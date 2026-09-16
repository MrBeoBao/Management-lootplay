
document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");

    if (searchButton) {
        searchButton.addEventListener("click", searchWebsite);
    }

    const tabLinks = document.querySelectorAll(".nav-link[data-tab]");

    tabLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            tabLinks.forEach((item) => {
                item.classList.toggle("active", item === link);
            });

            showTab(link.dataset.tab);
        });
    });
});

function searchWebsite() {
    const keyword = window.prompt("Nhập tên game hoặc phim muốn tìm:", "");

    if (keyword && keyword.trim()) {
        window.alert("Bạn đang tìm kiếm: " + keyword.trim());
    }
}

function showTab(tabName) {
    if (tabName === "top-games" || tabName === "updates" || tabName === "top-movies" || tabName === "movie-updates") {
        if (tabName === "top-games") {
            window.alert("Danh sách TOP game hay");
        }

        if (tabName === "updates") {
            window.alert("Danh sách game cập nhật");
        }

        if (tabName === "top-movies") {
            window.alert("Danh sách TOP phim hay");
        }

        if (tabName === "movie-updates") {
            window.alert("Danh sách phim cập nhật");
        }
    }
}
