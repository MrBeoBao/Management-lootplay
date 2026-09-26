<template>
  <div class="home-page">

    <!-- ===================== HERO ===================== -->
    <section class="hero-section">
      <div class="hero-bg-overlay"></div>
      <div class="hero-bg-grid"></div>

      <div class="hero-content">
        <div class="hero-text">

          <div class="hero-badge">
            <span class="badge-dot"></span>
            WELCOME TO LOOTPLAY STORE
          </div>

          <h1>
            KHÁM PHÁ
            <br>
            <span class="hero-gradient-text">THẾ GIỚI GAME</span>
          </h1>

          <p>
            Khám phá những tựa game hấp dẫn, tìm kiếm game yêu thích
            và bắt đầu hành trình của bạn cùng LootPlay.
          </p>

          <div class="hero-stats">
            <div class="stat-item">
              <strong>2.500+</strong>
              <span>Games</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <strong>150K+</strong>
              <span>Người dùng</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <strong>24/7</strong>
              <span>Hỗ trợ</span>
            </div>
          </div>

          <div class="hero-buttons">
            <router-link to="/games" class="btn-primary">
              <i class="bx bx-joystick"></i>
              KHÁM PHÁ GAME
            </router-link>

            <router-link to="/register" class="btn-ghost">
              <i class="bx bx-user-plus"></i>
              TẠO TÀI KHOẢN
            </router-link>
          </div>

        </div>

        <!-- Decorative glow orbs -->
        <div class="hero-orb hero-orb-1"></div>
        <div class="hero-orb hero-orb-2"></div>
      </div>
    </section>


    <!-- ===================== CATEGORIES ===================== -->
    <section class="section">

      <div class="section-header">
        <div>
          <div class="section-label">
            <i class="bx bx-category"></i> GAME CATEGORY
          </div>
          <h2>Khám phá theo thể loại</h2>
        </div>
        <router-link to="/games" class="see-all">
          XEM TẤT CẢ
          <i class="bx bx-right-arrow-alt"></i>
        </router-link>
      </div>

      <div class="category-grid">

        <div class="category-card">
          <div class="category-icon-wrap blue">
            <i class="bx bx-crosshair"></i>
          </div>
          <div class="category-info">
            <h3>Action</h3>
            <p>Game hành động</p>
          </div>
          <i class="bx bx-chevron-right category-arrow"></i>
        </div>

        <div class="category-card">
          <div class="category-icon-wrap purple">
            <i class="bx bx-shield"></i>
          </div>
          <div class="category-info">
            <h3>RPG</h3>
            <p>Game nhập vai</p>
          </div>
          <i class="bx bx-chevron-right category-arrow"></i>
        </div>

        <div class="category-card">
          <div class="category-icon-wrap orange">
            <i class="bx bx-car"></i>
          </div>
          <div class="category-info">
            <h3>Racing</h3>
            <p>Game đua xe</p>
          </div>
          <i class="bx bx-chevron-right category-arrow"></i>
        </div>

        <div class="category-card">
          <div class="category-icon-wrap green">
            <i class="bx bx-football"></i>
          </div>
          <div class="category-info">
            <h3>Sports</h3>
            <p>Game thể thao</p>
          </div>
          <i class="bx bx-chevron-right category-arrow"></i>
        </div>

      </div>
    </section>


    <!-- ===================== FEATURED GAMES ===================== -->
    <section class="section games-section">

      <div class="section-header">
        <div>
          <div class="section-label">
            <i class="bx bx-star"></i> LOOTPLAY STORE
          </div>
          <h2>Game nổi bật</h2>
        </div>
        <router-link to="/games" class="see-all">
          XEM TẤT CẢ
          <i class="bx bx-right-arrow-alt"></i>
        </router-link>
      </div>

      <div class="games-grid">

        <!-- GAME 1 -->
        <div class="game-card">
          <div class="game-image">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=85"
              alt="Gaming"
            >
            <span class="game-tag">ACTION</span>
            <div class="game-overlay">
              <button class="quick-view-btn">
                <i class="bx bx-show"></i> XEM NHANH
              </button>
            </div>
          </div>

          <div class="game-content">
            <div class="game-header-row">
              <h3>Ultimate Gaming</h3>
              <div class="game-rating">
                <i class="bx bxs-star"></i>
                <span>4.8</span>
              </div>
            </div>
            <p>Khám phá những tựa game hành động hấp dẫn nhất.</p>
            <div class="game-footer">
              <strong class="price">299.000<span>đ</span></strong>
              <button class="view-btn">XEM GAME</button>
            </div>
          </div>
        </div>

        <!-- GAME 2 -->
        <div class="game-card">
          <div class="game-image">
            <img
              src="https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=1000&q=85"
              alt="Gaming Controller"
            >
            <span class="game-tag game-tag-purple">RPG</span>
            <div class="game-overlay">
              <button class="quick-view-btn">
                <i class="bx bx-show"></i> XEM NHANH
              </button>
            </div>
          </div>

          <div class="game-content">
            <div class="game-header-row">
              <h3>Adventure World</h3>
              <div class="game-rating">
                <i class="bx bxs-star"></i>
                <span>4.9</span>
              </div>
            </div>
            <p>Bắt đầu chuyến phiêu lưu trong thế giới game.</p>
            <div class="game-footer">
              <strong class="price">399.000<span>đ</span></strong>
              <button class="view-btn">XEM GAME</button>
            </div>
          </div>
        </div>

        <!-- GAME 3 -->
        <div class="game-card">
          <div class="game-image">
            <img
              src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1000&q=85"
              alt="Gaming Setup"
            >
            <span class="game-tag game-tag-amber">PREMIUM</span>
            <div class="game-overlay">
              <button class="quick-view-btn">
                <i class="bx bx-show"></i> XEM NHANH
              </button>
            </div>
          </div>

          <div class="game-content">
            <div class="game-header-row">
              <h3>Pro Gaming</h3>
              <div class="game-rating">
                <i class="bx bxs-star"></i>
                <span>5.0</span>
              </div>
            </div>
            <p>Những trải nghiệm game đỉnh cao dành cho game thủ.</p>
            <div class="game-footer">
              <strong class="price">499.000<span>đ</span></strong>
              <button class="view-btn">XEM GAME</button>
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- ===================== WHY LOOTPLAY ===================== -->
    <section class="why-section">
      <div class="section">

        <div class="section-header center">
          <div>
            <div class="section-label center-label">
              <i class="bx bx-shield-quarter"></i> WHY LOOTPLAY
            </div>
            <h2>Tại sao chọn LootPlay?</h2>
          </div>
        </div>

        <div class="features-grid">

          <div class="feature-card">
            <div class="feature-icon-wrap blue">
              <i class="bx bx-rocket"></i>
            </div>
            <h3>Nhanh chóng</h3>
            <p>Tìm kiếm và mua game một cách nhanh chóng, tiện lợi.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon-wrap purple">
              <i class="bx bx-lock-alt"></i>
            </div>
            <h3>An toàn</h3>
            <p>Thông tin tài khoản và thanh toán được bảo vệ an toàn.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon-wrap cyan">
              <i class="bx bx-credit-card"></i>
            </div>
            <h3>Thanh toán</h3>
            <p>Hỗ trợ nhiều phương thức thanh toán tiện lợi nhất.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon-wrap amber">
              <i class="bx bx-star"></i>
            </div>
            <h3>Đánh giá</h3>
            <p>Chia sẻ trải nghiệm và đánh giá về những tựa game.</p>
          </div>

        </div>

      </div>
    </section>


    <!-- ===================== CTA ===================== -->
    <section class="cta-section">
      <div class="cta-glow cta-glow-left"></div>
      <div class="cta-glow cta-glow-right"></div>

      <div class="cta-content">
        <div class="cta-text">
          <div class="section-label center-label">
            <i class="bx bx-game"></i> READY TO PLAY?
          </div>
          <h2>Bắt đầu hành trình cùng LootPlay</h2>
          <p>Khám phá kho game khổng lồ và tìm tựa game dành riêng cho bạn.</p>
        </div>
        <div class="cta-actions">
          <router-link to="/games" class="btn-cta-primary">
            <i class="bx bx-joystick"></i>
            KHÁM PHÁ NGAY
          </router-link>
          <router-link to="/register" class="btn-cta-ghost">
            <i class="bx bx-user-plus"></i>
            ĐĂNG KÝ MIỄN PHÍ
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>


<style scoped>

/* ========================= BASE ========================= */
.home-page {
  width: 100%;
  min-height: 100vh;
  background: transparent;
  color: #f8fafc;
  font-family: 'Be Vietnam Pro', 'Plus Jakarta Sans', sans-serif;
}

.section {
  width: 1240px;
  max-width: calc(100% - 48px);
  margin: 0 auto;
  padding: 72px 0;
}

/* ========================= SECTION HEADER ========================= */
.section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 36px;
}

.section-header.center {
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 44px;
}

.section-label {
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

.section-label i { font-size: 14px; }

.center-label { justify-content: center; }

.section-header h2 {
  font-size: 32px;
  font-weight: 800;
  color: #f1f5f9;
  margin: 0;
  line-height: 1.25;
}

.see-all {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 700;
  color: #3b82f6;
  text-decoration: none;
  padding: 8px 14px;
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.see-all:hover {
  background: rgba(59, 130, 246, 0.15);
  border-color: #3b82f6;
  color: #60a5fa;
  transform: translateX(3px);
}

/* ========================= HERO ========================= */
.hero-section {
  position: relative;
  min-height: 580px;
  background-image: url("https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1800&q=85");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    rgba(5, 9, 18, 0.97) 0%,
    rgba(10, 18, 40, 0.9) 45%,
    rgba(15, 24, 55, 0.5) 100%
  );
}

.hero-bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(59, 130, 246, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.04) 1px, transparent 1px);
  background-size: 44px 44px;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 1240px;
  max-width: calc(100% - 48px);
  margin: 0 auto;
  padding: 60px 0;
}

.hero-text { max-width: 640px; }

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 16px;
  border-radius: 24px;
  background: rgba(37, 99, 235, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.35);
  color: #93c5fd;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 24px;
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22d3ee;
  animation: blink 1.5s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.hero-text h1 {
  margin: 0 0 20px;
  color: #f8fafc;
  font-family: 'Barlow Condensed', 'Be Vietnam Pro', sans-serif;
  font-size: 68px;
  font-weight: 800;
  line-height: 1.08;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-gradient-text {
  background: linear-gradient(90deg, #38bdf8, #a78bfa, #ec4899);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: grad-flow 4s linear infinite;
}

@keyframes grad-flow {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}

.hero-text p {
  font-size: 16px;
  color: #94a3b8;
  line-height: 1.8;
  margin: 0 0 28px;
  max-width: 520px;
  font-weight: 400;
}

/* Stats */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 32px;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-item strong {
  font-size: 20px;
  font-weight: 800;
  color: #f1f5f9;
}

.stat-item span {
  font-size: 12px;
  color: #64748b;
}

.stat-divider {
  width: 1px;
  height: 32px;
  background: rgba(255, 255, 255, 0.1);
}

/* Hero Buttons */
.hero-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn-primary, .btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 24px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: #fff;
  border: 1px solid transparent;
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(37, 99, 235, 0.55);
}

.btn-ghost {
  background: rgba(255, 255, 255, 0.06);
  color: #f1f5f9;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

/* Orbs */
.hero-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.hero-orb-1 {
  width: 350px;
  height: 350px;
  right: 5%;
  top: -100px;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, transparent 70%);
  animation: orb-float 6s ease-in-out infinite;
}

.hero-orb-2 {
  width: 250px;
  height: 250px;
  right: 20%;
  bottom: -80px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%);
  animation: orb-float 8s ease-in-out infinite reverse;
}

@keyframes orb-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* ========================= CATEGORIES ========================= */
.category-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.category-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 16px;
  background: rgba(17, 24, 39, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.25s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.category-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 14px;
  background: linear-gradient(135deg, transparent 0%, rgba(59, 130, 246, 0.04) 100%);
  opacity: 0;
  transition: opacity 0.25s ease;
}

.category-card:hover::before { opacity: 1; }

.category-card:hover {
  transform: translateY(-4px);
  border-color: rgba(59, 130, 246, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.1);
}

.category-icon-wrap {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 22px;
  color: #fff;
}

.category-icon-wrap.blue { background: linear-gradient(135deg, #2563eb, #38bdf8); box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35); }
.category-icon-wrap.purple { background: linear-gradient(135deg, #7c3aed, #a78bfa); box-shadow: 0 4px 12px rgba(124, 58, 237, 0.35); }
.category-icon-wrap.orange { background: linear-gradient(135deg, #ea580c, #f97316); box-shadow: 0 4px 12px rgba(234, 88, 12, 0.35); }
.category-icon-wrap.green { background: linear-gradient(135deg, #059669, #10b981); box-shadow: 0 4px 12px rgba(5, 150, 105, 0.35); }

.category-info { flex: 1; }

.category-info h3 {
  margin: 0 0 3px;
  font-size: 15px;
  font-weight: 700;
  color: #f1f5f9;
}

.category-info p {
  margin: 0;
  font-size: 12px;
  color: #64748b;
}

.category-arrow {
  font-size: 20px;
  color: #334155;
  transition: all 0.2s ease;
}

.category-card:hover .category-arrow {
  color: #3b82f6;
  transform: translateX(3px);
}

/* ========================= GAMES ========================= */
.games-section {
  padding-top: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.game-card {
  background: rgba(17, 24, 39, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.game-card:hover {
  transform: translateY(-6px);
  border-color: rgba(59, 130, 246, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.1);
}

.game-image {
  position: relative;
  width: 100%;
  height: 210px;
  overflow: hidden;
  background: #111827;
}

.game-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.game-card:hover .game-image img {
  transform: scale(1.08);
}

.game-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 5px 10px;
  border-radius: 6px;
  background: linear-gradient(135deg, #2563eb, #38bdf8);
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.8px;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.4);
}

.game-tag-purple { background: linear-gradient(135deg, #7c3aed, #a78bfa); box-shadow: 0 2px 8px rgba(124, 58, 237, 0.4); }
.game-tag-amber { background: linear-gradient(135deg, #d97706, #f59e0b); box-shadow: 0 2px 8px rgba(217, 119, 6, 0.4); }

.game-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.game-card:hover .game-overlay { opacity: 1; }

.quick-view-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  background: rgba(255, 255, 255, 0.95);
  color: #111827;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transform: translateY(8px);
  transition: transform 0.3s ease;
}

.game-card:hover .quick-view-btn { transform: translateY(0); }

.game-content {
  padding: 18px;
}

.game-header-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 6px;
}

.game-content h3 {
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  color: #f1f5f9;
}

.game-rating {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 12px;
  font-weight: 700;
  color: #fbbf24;
  flex-shrink: 0;
}

.game-content p {
  margin: 0 0 16px;
  font-size: 13px;
  color: #64748b;
  line-height: 1.55;
}

.game-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.price {
  font-size: 19px;
  font-weight: 800;
  background: linear-gradient(135deg, #38bdf8, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.price span {
  font-size: 14px;
}

.view-btn {
  padding: 8px 14px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #60a5fa;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.view-btn:hover {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  border-color: transparent;
  color: #fff;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
}

/* ========================= WHY SECTION ========================= */
.why-section {
  background: rgba(15, 23, 42, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.feature-card {
  padding: 28px 22px;
  background: rgba(17, 24, 39, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  text-align: center;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #2563eb, #7c3aed);
  transition: width 0.3s ease;
  border-radius: 2px;
}

.feature-card:hover::after { width: 60%; }

.feature-card:hover {
  transform: translateY(-5px);
  border-color: rgba(59, 130, 246, 0.2);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
}

.feature-icon-wrap {
  width: 60px;
  height: 60px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  font-size: 26px;
  color: #fff;
}

.feature-icon-wrap.blue { background: linear-gradient(135deg, #2563eb, #38bdf8); box-shadow: 0 6px 15px rgba(37, 99, 235, 0.3); }
.feature-icon-wrap.purple { background: linear-gradient(135deg, #7c3aed, #a78bfa); box-shadow: 0 6px 15px rgba(124, 58, 237, 0.3); }
.feature-icon-wrap.cyan { background: linear-gradient(135deg, #0891b2, #06b6d4); box-shadow: 0 6px 15px rgba(8, 145, 178, 0.3); }
.feature-icon-wrap.amber { background: linear-gradient(135deg, #d97706, #fbbf24); box-shadow: 0 6px 15px rgba(217, 119, 6, 0.3); }

.feature-card h3 {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 700;
  color: #f1f5f9;
}

.feature-card p {
  margin: 0;
  font-size: 13px;
  color: #64748b;
  line-height: 1.6;
}

/* ========================= CTA ========================= */
.cta-section {
  position: relative;
  padding: 80px 24px;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(10, 14, 23, 0.98) 100%);
  overflow: hidden;
  text-align: center;
  border-top: 1px solid rgba(59, 130, 246, 0.15);
}

.cta-glow {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  pointer-events: none;
}

.cta-glow-left {
  left: -150px;
  top: 50%;
  transform: translateY(-50%);
  background: radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, transparent 70%);
}

.cta-glow-right {
  right: -150px;
  top: 50%;
  transform: translateY(-50%);
  background: radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%);
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 640px;
  margin: 0 auto;
}

.cta-text h2 {
  font-size: 40px;
  font-weight: 800;
  color: #f8fafc;
  margin: 10px 0 12px;
  font-family: 'Barlow Condensed', 'Be Vietnam Pro', sans-serif;
  letter-spacing: 0.5px;
  line-height: 1.15;
}

.cta-text p {
  font-size: 15px;
  color: #64748b;
  margin: 0 0 36px;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

.btn-cta-primary, .btn-cta-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.25s ease;
}

.btn-cta-primary {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: #fff;
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.45);
}

.btn-cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 30px rgba(37, 99, 235, 0.6);
}

.btn-cta-ghost {
  background: rgba(255, 255, 255, 0.05);
  color: #94a3b8;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.btn-cta-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #f1f5f9;
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

/* ========================= RESPONSIVE ========================= */
@media (max-width: 1024px) {
  .category-grid { grid-template-columns: repeat(2, 1fr); }
  .features-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 900px) {
  .hero-text h1 { font-size: 46px; }
  .games-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .hero-section { min-height: auto; }
  .hero-text h1 { font-size: 36px; }
  .hero-buttons { flex-direction: column; }
  .games-grid { grid-template-columns: 1fr; }
  .category-grid { grid-template-columns: 1fr 1fr; }
  .features-grid { grid-template-columns: 1fr 1fr; }
  .section-header { flex-direction: column; align-items: flex-start; gap: 12px; }
  .cta-text h2 { font-size: 28px; }
  .hero-stats { gap: 14px; }
}
</style>