<template>
  <div class="wrapper-shell">
    <HeaderClient />
    <MenuClient />

    <main class="page-wrapper">
      <div class="page-content">
        <router-view />
      </div>
    </main>

    <FooterClinet />
  </div>
</template>

<script>
import HeaderClient from '../components/HeaderClient.vue'
import MenuClient from '../components/MenuClient.vue'
import FooterClinet from '../components/FooterClinet.vue'

export default {
  components: {
    HeaderClient,
    MenuClient,
    FooterClinet
  }
}
</script>

<style>
@import "../../assets/css/bootstrap.min.css";
@import "../../assets/css/bootstrap-extended.css";
@import "../../assets/css/icons.css";
@import "../../assets/css/app.css";
@import "../../assets/css/header-colors.css";

:root {
  --page-bg: #f5f7fb;
  --card-bg: #ffffff;
  --primary: #1677e8;
  --text: #20242f;
}

* {
  box-sizing: border-box;
}

html, body, #app {
  margin: 0;
  min-height: 100%;
  height: 100%;
  font-family: "Segoe UI", Tahoma, sans-serif;
  background: var(--page-bg);
  color: var(--text);
}

body {
  min-height: 100vh;
}

.wrapper-shell {
  min-height: 100vh;
  background: var(--page-bg);
}

.page-wrapper {
  min-height: 60vh;
  padding: 32px 0 48px;
}

.page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
