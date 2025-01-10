// تفعيل الوضع الداكن
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// تفعيل مكتبة AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
});
