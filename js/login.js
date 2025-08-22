// Ẩn/hiện mật khẩu
function togglePass(id) {
  var input = document.getElementById(id);
  if (!input) return;
  input.type = (input.type === "password") ? "text" : "password";
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Local "DB"
const USERS_KEY = 'APP_USERS';
function getUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Lỗi đọc local users:', e);
    return [];
  }
}

// Đăng nhập local (mô phỏng API)
async function loginLocal({ login, password }) {
  // Giả lập độ trễ để giống gọi API
  await new Promise(r => setTimeout(r, 300));

  const users = getUsers();
  const loginLower = (login || '').toLowerCase();

  // Tìm user theo username (hoặc email nếu có)
  const user = users.find(u => {
    const uname = (u.username || '').toLowerCase();
    const email = (u.email || '').toLowerCase();
    return uname === loginLower || email === loginLower;
  });

  if (!user || user.password !== password) {
    return { success: false, message: 'Tên đăng nhập hoặc mật khẩu không đúng.' };
  }

  return {
    success: true,
    tenDangNhap: user.username || '',
    tenNguoiDung: user.tenNguoiDung || ''
  };
}

// Xử lý submit form
var loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.onsubmit = async function(e) {
    e.preventDefault();
    var ok = true;
    var email = document.getElementById('loginEmail').value.trim();
    var pass = document.getElementById('loginPassword').value;
    var errEmailEl = document.getElementById('errLoginEmail');
    var errPassEl = document.getElementById('errLoginPassword');

    if (errEmailEl) errEmailEl.textContent = '';
    if (errPassEl) errPassEl.textContent = '';

    if (!email) {
      if (errEmailEl) errEmailEl.textContent = 'Vui lòng nhập tên đăng nhập hoặc email.';
      ok = false;
    }
    if (!pass) {
      if (errPassEl) errPassEl.textContent = 'Vui lòng nhập mật khẩu.';
      ok = false;
    }
    if (!ok) {
      var container = document.querySelector('.login-container');
      if (container) {
        container.style.animation = 'shake 0.3s';
        setTimeout(()=>{ container.style.animation=''; },350);
      }
      return false;
    }

    var btn = document.getElementById('loginBtn');
    if (btn) btn.classList.add('loading');

    try {
      // Gọi local thay vì server
      const data = await loginLocal({ login: email, password: pass });

      if (btn) btn.classList.remove('loading');

      if (data.success) {
        // Lưu thông tin vào localStorage (giữ hành vi cũ)
        localStorage.setItem('tenDangNhap', data.tenDangNhap || '');
        localStorage.setItem('tenNguoiDung', data.tenNguoiDung || '');
        localStorage.setItem('isLoggedIn', '1');

        var formEl = document.getElementById('loginForm');
        var successEl = document.getElementById('loginSuccess');
        if (formEl) formEl.style.display = 'none';
        if (successEl) successEl.style.display = 'block';

        setTimeout(function(){
          window.location.href = "../index.html";
        }, 2000);
      } else {
        if (errPassEl) errPassEl.textContent = data.message || 'Tên đăng nhập hoặc mật khẩu không đúng.';
        var container = document.querySelector('.login-container');
        if (container) {
          container.style.animation = 'shake 0.3s';
          setTimeout(()=>{ container.style.animation=''; },350);
        }
      }
    } catch (err) {
      if (btn) btn.classList.remove('loading');
      console.error(err);
      var errPassEl2 = document.getElementById('errLoginPassword');
      if (errPassEl2) errPassEl2.textContent = 'Không thể đọc dữ liệu cục bộ. Vui lòng thử lại.';
    }
    return false;
  };
}
