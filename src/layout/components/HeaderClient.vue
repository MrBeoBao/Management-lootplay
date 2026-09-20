<template>
    <header class="header">
        <div class="header-container">

            <div class="auth-buttons">
                <button class="login-button">
                    ĐĂNG NHẬP
                </button>

                <button class="register-button">
                    ĐĂNG KÝ
                </button>
            </div>

        </div>
    </header>
</template>

<style scoped>
.header {
    width: 100%;
    background: white;
    border-bottom: 1px solid #eeeeee;
}

.header-container {
    width: 100%;
    height: 70px;
    
    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding-right: 25px;
    box-sizing: border-box;
}

.auth-buttons {
    display: flex;
    align-items: center;
    gap: 10px;
}

.auth-buttons button {
    padding: 9px 18px;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
}

.login-button {
    color: #1677e8;
    background: white;
    border: 1px solid #1677e8;
}

.login-button:hover {
    background: #1677e8;
    color: white;
}

.register-button {
    color: white;
    background: #1677e8;
    border: 1px solid #1677e8;
}

.register-button:hover {
    background: #1265c5;
}
</style>