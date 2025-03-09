document.addEventListener('DOMContentLoaded', () => {
    if (/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        alert('Vui lòng sử dụng máy tính để vào website');
        window.location.href = 'about:blank';
    }
});
