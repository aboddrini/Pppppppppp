// إضافة تأثيرات عند التمرير على الصور
document.addEventListener("DOMContentLoaded", function() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseout', function() {
            card.style.transform = 'scale(1)';
        });
    });
});