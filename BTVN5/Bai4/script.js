const header = document.getElementById('header');

// Vị trí bắt đầu sticky header (tính theo pixel từ đầu trang)
const stickyPosition = 130; // Thay đổi giá trị này theo nhu cầu của bạn

// Bắt sự kiện cuộn trang
window.addEventListener('scroll', function() {
    // Lấy vị trí cuộn hiện tại
    const scrollPosition = window.pageYOffset;

    // Thêm class "sticky" khi cuộn đến vị trí mong muốn
    if (scrollPosition >= stickyPosition) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
