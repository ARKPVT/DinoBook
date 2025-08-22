// Ẩn/hiện mật khẩu
function togglePass(id) {
  var input = document.getElementById(id);
  input.type = (input.type === "password") ? "text" : "password";
}

// Kiểm tra hợp lệ nâng cao
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validatePassword(pw) {
  return pw.length >= 6 && /[A-Za-z]/.test(pw) && /\d/.test(pw);
}

// "Local DB" bằng localStorage
const USERS_KEY = "APP_USERS";

function getUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Lỗi đọc local users:", e);
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function uuid() {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return "u-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
}

// "Đăng ký local" mô phỏng API
async function registerLocal({ tenNguoiDung, username, password }) {
  // Giả lập độ trễ
  await new Promise((r) => setTimeout(r, 350));

  const users = getUsers();

  // Kiểm tra trùng email
  const exists = users.some((u) => u.username.toLowerCase() === username.toLowerCase());
  if (exists) {
    return { success: false, message: "Email đã tồn tại trong hệ thống." };
  }

  // Kiểm tra họ tên
  if (!tenNguoiDung || tenNguoiDung.trim().length < 2) {
    return { success: false, message: "Vui lòng nhập họ tên hợp lệ." };
  }

  // Lưu user
  const newUser = {
    id: uuid(),
    tenNguoiDung: tenNguoiDung.trim(),
    username: username.trim(),
    password,
  };
  users.push(newUser);
  saveUsers(users);

  return { success: true, message: "Đăng ký thành công.", user: newUser };
}

// Xử lý submit form
document.getElementById("registerForm").onsubmit = async function (e) {
  e.preventDefault();
  var ok = true;
  var name = document.getElementById("regName").value.trim();
  var email = document.getElementById("regEmail").value.trim();
  var pass = document.getElementById("regPassword").value;
  var pass2 = document.getElementById("regPassword2").value;

  document.getElementById("errName").textContent = "";
  document.getElementById("errEmail").textContent = "";
  document.getElementById("errPassword").textContent = "";
  document.getElementById("errPassword2").textContent = "";

  if (name.length < 2) {
    document.getElementById("errName").textContent = "Vui lòng nhập họ tên hợp lệ.";
    ok = false;
  }
  if (!validateEmail(email)) {
    document.getElementById("errEmail").textContent = "Email không hợp lệ.";
    ok = false;
  }
  if (!validatePassword(pass)) {
    document.getElementById("errPassword").textContent = "Mật khẩu tối thiểu 6 ký tự, gồm chữ và số.";
    ok = false;
  }
  if (pass !== pass2) {
    document.getElementById("errPassword2").textContent = "Mật khẩu nhập lại không khớp.";
    ok = false;
  }

  if (!ok) {
    document.querySelector(".register-container").style.animation = "shake 0.3s";
    setTimeout(() => {
      document.querySelector(".register-container").style.animation = "";
    }, 350);
    return false;
  }

  var btn = document.getElementById("registerBtn");
  btn.classList.add("loading");

  try {
    const data = await registerLocal({
      tenNguoiDung: name,
      username: email,
      password: pass,
    });

    btn.classList.remove("loading");

    if (data.success) {
      localStorage.setItem("tenNguoiDung", name);
      localStorage.setItem("tenDangNhap", email);

      document.getElementById("registerForm").style.display = "none";
      document.getElementById("registerSuccess").style.display = "block";
      setTimeout(function () {
        window.location.href = "../index.html";
      }, 2200);
    } else {
      if (data.message && data.message.includes("tồn tại")) {
        document.getElementById("errEmail").textContent = data.message;
      } else if (data.message && data.message.includes("họ tên")) {
        document.getElementById("errName").textContent = data.message;
      } else {
        alert(data.message || "Đăng ký thất bại. Vui lòng thử lại!");
      }
      document.querySelector(".register-container").style.animation = "shake 0.3s";
      setTimeout(() => {
        document.querySelector(".register-container").style.animation = "";
      }, 350);
    }
  } catch (err) {
    btn.classList.remove("loading");
    console.error(err);
    alert("Không thể lưu dữ liệu cục bộ. Vui lòng thử lại sau!");
  }
  return false;
};
