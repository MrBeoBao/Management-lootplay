<template>
  <div class="cart-page">

    <!-- Page header -->
    <div class="cart-header">
      <div class="cart-header-inner">
        <div>
          <div class="page-label">
            <i class="bx bx-shopping-bag"></i> GIỎ HÀNG CỦA BẠN
          </div>
          <h1>Giỏ Hàng</h1>
        </div>
        <router-link to="/games" class="continue-btn">
          <i class="bx bx-left-arrow-alt"></i>
          Tiếp tục mua sắm
        </router-link>
      </div>
    </div>

    <!-- Content -->
    <div class="cart-container">

      <!-- Loading -->
      <div v-if="loading" class="state-box">
        <div class="state-icon loading-spin">
          <i class="bx bx-loader-alt bx-spin"></i>
        </div>
        <p>Đang tải giỏ hàng...</p>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="state-box error-state">
        <div class="state-icon error-icon">
          <i class="bx bx-error-circle"></i>
        </div>
        <p>{{ error }}</p>
        <a href="/login" class="action-link">Đăng nhập ngay</a>
      </div>

      <!-- Empty -->
      <div v-else-if="items.length === 0" class="state-box">
        <div class="state-icon empty-icon">
          <i class="bx bx-shopping-bag"></i>
        </div>
        <h3>Giỏ hàng đang trống</h3>
        <p>Hãy chọn một game để thêm vào giỏ hàng.</p>
        <button @click="$router.push('/games')" class="empty-shop-btn">
          <i class="bx bx-joystick"></i>
          XEM DANH SÁCH GAME
        </button>
      </div>

      <!-- Cart with items -->
      <div v-else class="cart-layout">

        <!-- List -->
        <div class="cart-list">

          <div
            v-for="item in items"
            :key="item.id"
            class="cart-item"
          >
            <!-- Thumbnail -->
            <div class="item-thumb">
              <img
                v-if="item.game?.images?.length"
                :src="item.game.images[0].image_url"
                :alt="item.game.name"
              >
              <div v-else class="thumb-placeholder">
                <i class="bx bx-joystick"></i>
              </div>
            </div>

            <!-- Info -->
            <div class="item-info">
              <div class="item-info-top">
                <div>
                  <span class="item-category">{{ item.game?.category?.name || 'GAME' }}</span>
                  <h3>{{ item.game?.name }}</h3>
                </div>
                <div class="item-total">
                  {{ formatPrice(item.game?.price * item.quantity) }}
                </div>
              </div>

              <div class="item-actions">
                <div class="item-price">{{ formatPrice(item.game?.price) }}</div>

                <div class="quantity-area">
                  <span class="qty-label">Số lượng:</span>

                  <div class="quantity-control">
                    <button
                      class="qty-btn"
                      @click="decreaseQuantity(item)"
                      :disabled="item.quantity <= 1 || updating"
                    >−</button>

                    <span class="qty-num">{{ item.quantity }}</span>

                    <button
                      class="qty-btn"
                      @click="increaseQuantity(item)"
                      :disabled="item.quantity >= item.game?.stock || updating"
                    >+</button>
                  </div>

                  <button
                    class="remove-btn"
                    @click="removeItem(item)"
                    :disabled="updating"
                    title="Xóa khỏi giỏ hàng"
                  >
                    <i class="bx bx-trash"></i>
                    XÓA
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Summary -->
        <div class="cart-summary">

          <div class="summary-title">
            <i class="bx bx-receipt"></i>
            TỔNG ĐƠN HÀNG
          </div>

          <div class="summary-rows">
            <div class="summary-row">
              <span>Tạm tính ({{ items.length }} sản phẩm)</span>
              <strong>{{ formatPrice(total) }}</strong>
            </div>
            <div class="summary-row">
              <span>Phí giao dịch</span>
              <strong class="free-tag">Miễn phí</strong>
            </div>
            <div class="summary-row">
              <span>Thuế</span>
              <strong>0 ₫</strong>
            </div>
          </div>

          <div class="summary-divider"></div>

          <div class="summary-total">
            <span>Tổng cộng</span>
            <strong>{{ formatPrice(total) }}</strong>
          </div>

          <button class="checkout-btn">
            <i class="bx bx-credit-card"></i>
            TIẾN HÀNH THANH TOÁN
          </button>

          <div class="secure-badge">
            <i class="bx bx-shield-quarter"></i>
            <span>Thanh toán bảo mật & mã hóa 256-bit</span>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',

  data() {
    return {
      items: [],
      loading: true,
      error: '',
      updating: false,
      user: null
    }
  },

  computed: {
    total() {
      return this.items.reduce((sum, item) => {
        return sum + (
          Number(item.game?.price || 0) *
          Number(item.quantity || 0)
        )
      }, 0)
    }
  },

  async mounted() {
    await this.loadCart()
  },

  methods: {

    async loadCart() {
      const savedUser = localStorage.getItem('user')

      if (!savedUser) {
        this.loading = false
        this.error =
          'Vui lòng đăng nhập để xem giỏ hàng.'
        return
      }

      try {
        this.user = JSON.parse(savedUser)
      } catch (error) {
        this.loading = false
        this.error =
          'Thông tin đăng nhập không hợp lệ.'
        return
      }

      if (!this.user || !this.user.id) {
        this.loading = false
        this.error =
          'Không tìm thấy tài khoản.'
        return
      }

      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/cart/${this.user.id}`
        )

        const data = await response.json()

        if (!response.ok) {
          this.error =
            data.message ||
            'Không thể lấy giỏ hàng.'
          return
        }

        this.items = data.items || []

      } catch (error) {
        console.error(error)

        this.error =
          'Không thể kết nối đến máy chủ.'
      } finally {
        this.loading = false
      }
    },

    async increaseQuantity(item) {
      const newQuantity =
        Number(item.quantity) + 1

      if (newQuantity > Number(item.game?.stock || 0)) {
        alert('Số lượng game trong kho không đủ.')
        return
      }

      await this.updateQuantity(
        item,
        newQuantity
      )
    },

    async decreaseQuantity(item) {
      const newQuantity =
        Number(item.quantity) - 1

      if (newQuantity < 1) {
        return
      }

      await this.updateQuantity(
        item,
        newQuantity
      )
    },

    async updateQuantity(item, quantity) {
      if (!this.user || !this.user.id) {
        alert('Vui lòng đăng nhập lại.')
        return
      }

      this.updating = true

      try {
        const response = await fetch(
          'http://127.0.0.1:8000/api/cart/update',
          {
            method: 'PUT',

            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },

            body: JSON.stringify({
              user_id: this.user.id,
              cart_item_id: item.id,
              quantity: quantity
            })
          }
        )

        const data = await response.json()

        if (!response.ok) {
          alert(
            data.message ||
            'Không thể cập nhật số lượng.'
          )
          return
        }

        item.quantity = data.cart_item.quantity

      } catch (error) {
        console.error(error)

        alert(
          'Không thể kết nối đến máy chủ.'
        )
      } finally {
        this.updating = false
      }
    },

    async removeItem(item) {
      if (!this.user || !this.user.id) {
        alert('Vui lòng đăng nhập lại.')
        return
      }

      const confirmed = confirm(
        `Bạn có chắc muốn xóa "${item.game?.name}" khỏi giỏ hàng?`
      )

      if (!confirmed) {
        return
      }

      this.updating = true

      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/cart/remove/${item.id}`,
          {
            method: 'DELETE',

            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },

            body: JSON.stringify({
              user_id: this.user.id
            })
          }
        )

        const data = await response.json()

        if (!response.ok) {
          alert(
            data.message ||
            'Không thể xóa game.'
          )
          return
        }

        this.items = this.items.filter(
          cartItem => cartItem.id !== item.id
        )

      } catch (error) {
        console.error(error)

        alert(
          'Không thể kết nối đến máy chủ.'
        )
      } finally {
        this.updating = false
      }
    },

    formatPrice(price) {
      return new Intl.NumberFormat('vi-VN').format(
        Number(price || 0)
      ) + ' ₫'
    }
  }
}
</script>

<style scoped>
.cart-page {
  min-height: 100vh;
  background: transparent;
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  color: #f8fafc;
}

/* ========================= HEADER ========================= */
.cart-header {
  position: relative;
  padding: 44px 24px;
  background: linear-gradient(135deg, rgba(10, 15, 30, 0.98) 0%, rgba(18, 24, 50, 0.98) 100%);
  border-bottom: 1px solid rgba(59, 130, 246, 0.15);
  overflow: hidden;
}

.cart-header::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 44px 44px;
}

.cart-header-inner {
  position: relative;
  z-index: 2;
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.page-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #38bdf8;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.cart-header h1 {
  margin: 0;
  font-family: 'Rajdhani', sans-serif;
  font-size: 36px;
  font-weight: 800;
  color: #f8fafc;
}

.continue-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  color: #94a3b8;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.continue-btn:hover {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.3);
  color: #60a5fa;
  transform: translateX(-3px);
}

/* ========================= CONTAINER ========================= */
.cart-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 36px 24px 60px;
}

/* ========================= STATE BOXES ========================= */
.state-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 80px 20px;
  background: rgba(17, 24, 39, 0.6);
  border: 1px dashed rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  text-align: center;
}

.state-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 28px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  color: #38bdf8;
}

.error-state .state-icon {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.2);
  color: #f87171;
}

.empty-icon {
  background: rgba(124, 58, 237, 0.1);
  border-color: rgba(124, 58, 237, 0.2);
  color: #a78bfa;
}

.state-box h3 {
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 700;
  color: #f1f5f9;
}

.state-box p {
  margin: 0;
  color: #64748b;
  font-size: 14px;
}

.action-link {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: #fff;
  border-radius: 10px;
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  margin-top: 6px;
  transition: all 0.2s ease;
}

.action-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
}

.empty-shop-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 6px;
  transition: all 0.25s ease;
  font-family: var(--font-main, sans-serif);
  box-shadow: 0 6px 18px rgba(37, 99, 235, 0.35);
}

.empty-shop-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.5);
}

/* ========================= LAYOUT ========================= */
.cart-layout {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 24px;
  align-items: start;
}

/* ========================= CART LIST ========================= */
.cart-list {
  background: rgba(17, 24, 39, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  overflow: hidden;
}

.cart-item {
  display: flex;
  gap: 20px;
  padding: 22px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: background 0.2s ease;
}

.cart-item:last-child { border-bottom: none; }
.cart-item:hover { background: rgba(30, 41, 59, 0.4); }

/* Thumbnail */
.item-thumb {
  flex-shrink: 0;
  width: 130px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.item-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumb-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #334155;
  font-size: 28px;
}

/* Item info */
.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.item-info-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
}

.item-category {
  display: inline-block;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #38bdf8;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.item-info h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #f1f5f9;
}

.item-total {
  font-size: 17px;
  font-weight: 800;
  background: linear-gradient(135deg, #38bdf8, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
  flex-shrink: 0;
}

/* Item actions */
.item-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.item-price {
  font-size: 14px;
  font-weight: 600;
  color: #64748b;
}

.quantity-area {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
}

.qty-label {
  font-size: 12px;
  color: #64748b;
}

.quantity-control {
  display: flex;
  align-items: center;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.qty-btn {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  color: #94a3b8;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qty-btn:hover:not(:disabled) {
  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
}

.qty-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.qty-num {
  width: 36px;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  color: #f1f5f9;
  border-left: 1px solid rgba(255, 255, 255, 0.07);
  border-right: 1px solid rgba(255, 255, 255, 0.07);
}

.remove-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 11px;
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 8px;
  color: #f87171;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: var(--font-main, sans-serif);
}

.remove-btn:hover:not(:disabled) {
  background: #ef4444;
  border-color: #ef4444;
  color: #fff;
}

.remove-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* ========================= SUMMARY ========================= */
.cart-summary {
  background: rgba(17, 24, 39, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: 24px;
  position: sticky;
  top: 128px;
}

.summary-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1.2px;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.summary-title i {
  font-size: 17px;
  color: #38bdf8;
}

.summary-rows {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}

.summary-row span {
  color: #64748b;
}

.summary-row strong {
  color: #e2e8f0;
  font-weight: 600;
}

.free-tag {
  color: #4ade80 !important;
}

.summary-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 18px 0;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
}

.summary-total span {
  font-size: 15px;
  font-weight: 700;
  color: #f1f5f9;
}

.summary-total strong {
  font-size: 22px;
  font-weight: 800;
  background: linear-gradient(135deg, #38bdf8, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.checkout-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
  font-family: var(--font-main, sans-serif);
}

.checkout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(37, 99, 235, 0.55);
}

.secure-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 16px;
  font-size: 11px;
  color: #475569;
}

.secure-badge i {
  font-size: 14px;
  color: #22c55e;
}

/* ========================= RESPONSIVE ========================= */
@media (max-width: 900px) {
  .cart-layout {
    grid-template-columns: 1fr;
  }
  .cart-summary {
    position: static;
  }
}

@media (max-width: 640px) {
  .cart-header-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }
  .cart-item {
    flex-direction: column;
  }
  .item-thumb {
    width: 100%;
    height: 160px;
  }
  .item-info-top {
    flex-direction: column;
  }
  .quantity-area {
    margin-left: 0;
    flex-wrap: wrap;
  }
}
</style>