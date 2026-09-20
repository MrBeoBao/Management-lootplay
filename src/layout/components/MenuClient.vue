<template>
    <div class="menu-container">

        <div class="menu-content">

            <!-- Logo -->
            <router-link to="/" class="logo">
                <img
                    src="../../assets/images/logo-icon.png"
                    class="logo-icon"
                    alt="LootPlay"
                >

                <span class="logo-text">
                    Loot<span>Play</span>
                </span>
            </router-link>

            <!-- Menu -->
            <nav class="menu-nav">

                <router-link to="/" class="menu-item">
                    TRANG CHỦ
                </router-link>

                <router-link to="/games" class="menu-item">
                    GAMES
                </router-link>

                <router-link to="/software" class="menu-item">
                    PHẦN MỀM
                </router-link>

                <router-link to="/forum" class="menu-item">
                    DIỄN ĐÀN
                </router-link>

                <router-link to="/faq" class="menu-item">
                    FAQS
                </router-link>

                <!-- Nút tìm kiếm -->
                <button class="search-button">
                    <i class="bx bx-search"></i>
                </button>

            </nav>

        </div>

    </div>
</template>

<script>
export default {
}
</script>

<style scoped>

.menu-container {
    width: 100%;
    background: white;
    border-bottom: 1px solid #eeeeee;
}

.menu-content {
    width: 980px;
    max-width: 90%;
    height: 70px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* LOGO */

.logo {
    display: flex;
    align-items: center;
    gap: 8px;

    text-decoration: none;
}

.logo-icon {
    width: 35px;
    height: 35px;
    object-fit: contain;
}

.logo-text {
    margin: 0;
    font-size: 28px;
    font-weight: 500;
    color: #1677e8;
}

.logo-text span {
    color: #7057d9;
}

/* MENU */

.menu-nav {
    display: flex;
    align-items: center;
    gap: 28px;
}

.menu-item {
    color: #222;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    transition: 0.2s;
}

.menu-item:hover {
    color: #1677e8;
}

.router-link-active {
    color: #1677e8;
}

/* SEARCH */

.search-button {
    width: 42px;
    height: 42px;

    border: none;
    border-radius: 50%;

    background: #1677e8;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
}

.search-button i {
    font-size: 20px;
}

</style>