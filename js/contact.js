// Loading hiệu ứng
window.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    document.getElementById('overlay-loading').classList.add('hide');
    setTimeout(() => {
      document.getElementById('overlay-loading').style.display = 'none';
      document.querySelector('.contact-container').style.opacity = 1;
    }, 700);
  }, 1200);
});
// Menu dropdown tài khoản
const menuToggle = document.querySelector('.main-nav .menu-toggle');
const navLinks = document.querySelector('.main-nav .nav-links');
if(menuToggle) menuToggle.onclick = () => {
  navLinks.classList.toggle('open');
};
document.querySelectorAll('.main-nav .nav-btn').forEach(btn => {
  btn.onclick = (e) => {
    e.preventDefault();
    document.querySelectorAll('.main-nav ul.nav-links li').forEach(li => {
      if (li !== btn.parentElement) li.classList.remove('open');
    });
    btn.parentElement.classList.toggle('open');
  };
  document.addEventListener('click', function(ev) {
    if (!btn.parentElement.contains(ev.target)) {
      btn.parentElement.classList.remove('open');
    }
  });
});
document.querySelectorAll('.main-nav .nav-links a').forEach(link => {
  link.onclick = () => {
    navLinks.classList.remove('open');
    document.querySelectorAll('.main-nav ul.nav-links li').forEach(li => li.classList.remove('open'));
  };
});
// Tài khoản
function updateAccountMenu() {
  const tenNguoiDung = localStorage.getItem('tenNguoiDung');
  const tenDangNhap = localStorage.getItem('tenDangNhap');
  const navBtn = document.querySelector('.main-nav .nav-btn');
  const dropdown = navBtn?.parentElement.querySelector('.dropdown');
  if (!navBtn || !dropdown) return;
  if (tenNguoiDung && tenNguoiDung.trim() !== "") {
    navBtn.innerHTML = `<i class="fa fa-user"></i> ${tenNguoiDung} <i class="fa fa-caret-down"></i>`;
    dropdown.querySelectorAll('a').forEach(a => {
      if (a.href.includes('dangnhap') || a.href.includes('dangky')) {
        a.style.display = 'none';
      } else {
        a.style.display = '';
      }
    });
  } else {
    navBtn.innerHTML = `<i class="fa fa-user"></i> Tài khoản <i class="fa fa-caret-down"></i>`;
    dropdown.querySelectorAll('a').forEach(a => {
      if (a.href.includes('dangnhap') || a.href.includes('dangky')) {
        a.style.display = '';
      } else {
        a.style.display = 'none';
      }
    });
  }
}
document.addEventListener('DOMContentLoaded', function() {
  updateAccountMenu();
  document.querySelectorAll('.main-nav .dropdown a').forEach(a => {
    if (a.textContent.includes('Đăng xuất')) {
      a.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('tenNguoiDung');
        localStorage.removeItem('tenDangNhap');
        updateAccountMenu();
        window.location.reload();
      });
    }
  });
});