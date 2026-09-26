<template>
  <nav class="menu-bar">
    <div class="menu-inner">

      <!-- LOGO -->
      <router-link to="/" class="logo-link">
        <div class="logo-icon-box">
          <img
            src="../../assets/images/logo-icon.png"
            class="logo-icon"
            alt="LootPlay"
          >
        </div>
        <span class="logo-text">
          Loot<span class="logo-accent">Play</span>
        </span>
      </router-link>

      <!-- NAV LINKS -->
      <div class="nav-links">
        <router-link to="/" class="nav-item" exact-active-class="active">
          <i class="bx bx-home-alt-2"></i>
          <span>Trang Chủ</span>
        </router-link>

        <router-link to="/games" class="nav-item" active-class="active">
          <i class="bx bx-joystick"></i>
          <span>Games</span>
        </router-link>

        <router-link to="/software" class="nav-item" active-class="active">
          <i class="bx bx-code-block"></i>
          <span>Phần Mềm</span>
        </router-link>

        <router-link to="/forum" class="nav-item" active-class="active">
          <i class="bx bx-conversation"></i>
          <span>Diễn Đàn</span>
        </router-link>

        <router-link to="/faq" class="nav-item" active-class="active">
          <i class="bx bx-help-circle"></i>
          <span>FAQs</span>
        </router-link>
      </div>

      <!-- SEARCH + PROMO -->
      <div class="nav-right">
        <div class="promo-badge">
          <i class="bx bx-sale"></i>
          <span>SALE UP TO 70%</span>
        </div>
        <button class="search-btn" aria-label="Search">
          <i class="bx bx-search-alt-2"></i>
        </button>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'MenuClient'
}
</script>

<style scoped>
.menu-bar {
  width: 100%;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.98) 0%, rgba(10, 14, 23, 0.98) 100%);
  border-bottom: 1px solid rgba(59, 130, 246, 0.18);
  position: relative;
}

.menu-bar::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #2563eb 30%, #7c3aed 70%, transparent 100%);
  opacity: 0.5;
}

.menu-inner {
  max-width: 1280px;
  height: 70px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

/* === LOGO === */
.logo-link {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
  transition: transform 0.25s ease;
}

.logo-link:hover {
  transform: translateY(-1px);
}

.logo-icon-box {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(37, 99, 235, 0.4), 0 4px 10px rgba(0,0,0,0.3);
}

.logo-icon {
  width: 26px;
  height: 26px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.logo-text {
  font-family: 'Rajdhani', 'Plus Jakarta Sans', sans-serif;
  font-size: 26px;
  font-weight: 800;
  color: #e2e8f0;
  letter-spacing: 0.5px;
}

.logo-accent {
  background: linear-gradient(135deg, #38bdf8, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* === NAV LINKS === */
.nav-links {
  display: flex;
  align-items: center;
  gap: 2px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 8px;
  text-decoration: none;
  color: #94a3b8;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.3px;
  transition: all 0.2s ease;
  position: relative;
}

.nav-item i {
  font-size: 16px;
  transition: all 0.2s ease;
}

.nav-item:hover {
  color: #f1f5f9;
  background: rgba(59, 130, 246, 0.1);
}

.nav-item:hover i {
  color: #38bdf8;
}

.nav-item.active {
  color: #fff;
  background: rgba(37, 99, 235, 0.18);
}

.nav-item.active i {
  color: #60a5fa;
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  height: 2px;
  background: linear-gradient(90deg, #2563eb, #7c3aed);
  border-radius: 2px;
}

/* === RIGHT === */
.nav-right {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.promo-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 11px;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(239, 68, 68, 0.15));
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-radius: 20px;
  color: #fbbf24;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.8px;
  animation: promo-pulse 2.5s ease-in-out infinite;
}

.promo-badge i {
  font-size: 14px;
}

@keyframes promo-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.search-btn {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: #94a3b8;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s ease;
}

.search-btn:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.5);
  color: #60a5fa;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.2);
  transform: translateY(-1px);
}

/* === RESPONSIVE === */
@media (max-width: 900px) {
  .promo-badge { display: none; }
  .nav-item span { display: none; }
  .nav-item { padding: 8px 10px; }
}

@media (max-width: 640px) {
  .nav-links {
    gap: 0;
  }
  .menu-inner {
    padding: 0 16px;
  }
}
</style>