document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    const validUsers = {
        'nguyengiabao': '21062007',
        'mainhatbaoan': '17102006',
    };

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (validUsers[username] && validUsers[username] === password) {
                // Đăng nhập thành công → Chuyển hướng sang trang chính
                window.location.href = 'home.html';
            } else {
                errorMessage.textContent = 'Tên người dùng hoặc mật khẩu không đúng!';
            }
        });
    }
});
