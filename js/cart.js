// Loading hiệu ứng
window.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    document.getElementById('overlay-loading').classList.add('hide');
    setTimeout(() => {
      document.getElementById('overlay-loading').style.display = 'none';
      document.querySelector('.cart-container').style.opacity = 1;
    }, 700);
  }, 1200);
});

// ========== MENU NAVIGATION JS ==========
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
// ========== TÀI KHOẢN ==========
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

// ========== GIỎ HÀNG ==========
const genres = [
  { key: "trinhtham", label: "Trinh thám", icon: "fa-user-secret" },
  { key: "vientuong", label: "Viễn tưởng", icon: "fa-rocket" },
  { key: "huyenhuyen", label: "Huyền huyễn", icon: "fa-dragon" },
  { key: "quansu", label: "Quân sự", icon: "fa-shield-halved" },
  { key: "ngontinh", label: "Ngôn tình", icon: "fa-heart" }
];
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('cart')) || [];
  } catch { return []; }
}
function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
function getSelected() {
  try {
    return JSON.parse(localStorage.getItem('cart_selected')) || [];
  } catch { return []; }
}
function setSelected(arr) {
  localStorage.setItem('cart_selected', JSON.stringify(arr));
}

// ====== CẬP NHẬT TỔNG SỐ LƯỢNG ======
function updateCartCount() {
  const cart = getCart();
  let totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  localStorage.setItem('cart_total_qty', totalQty);
  const badge = document.getElementById('cartCount');
  if (badge) badge.textContent = totalQty;
}

function renderCart() {
  const cart = getCart();
  let selected = getSelected();
  if (!Array.isArray(selected) || selected.length !== cart.length) {
    selected = cart.map(()=>true);
    setSelected(selected);
  }
  const cartContent = document.getElementById('cartContent');
  if (!cart.length) {
    cartContent.innerHTML = `<div class="cart-empty">Giỏ hàng của bạn đang trống.<br>Hãy thêm sách để bắt đầu hành trình đọc nhé!</div>`;
    document.getElementById('checkoutBtn').disabled = true;
    document.getElementById('checkoutBtn').style.opacity = 0.5;
    document.getElementById('selectAllBtn').disabled = true;
    document.getElementById('deselectAllBtn').disabled = true;
    updateCartCount();
    return;
  }
  document.getElementById('checkoutBtn').disabled = false;
  document.getElementById('checkoutBtn').style.opacity = 1;
  document.getElementById('selectAllBtn').disabled = false;
  document.getElementById('deselectAllBtn').disabled = false;
  let total = 0;
  let html = `<table class="cart-list"><thead>
    <tr>
      <th></th>
      <th>Sách</th>
      <th>Thể loại</th>
      <th>Giá</th>
      <th>Số lượng</th>
      <th>Thành tiền</th>
      <th></th>
      <th>Chọn</th>
    </tr>
  </thead><tbody>`;
  cart.forEach((item, i) => {
    let genreObj = genres.find(g => g.key === item.genre);
    let genreLabel = genreObj ? genreObj.label : "";
    let genreIcon = genreObj ? genreObj.icon : "";
    let itemTotal = item.price * item.qty;
    if (selected[i]) total += itemTotal;
    html += `<tr>
      <td><img class="cart-cover" src="${item.cover}" alt="${item.title}"></td>
      <td>
        <div class="cart-book-title">${item.title}</div>
        <div class="cart-book-author"><i class="fa fa-user"></i> ${item.author}</div>
      </td>
      <td><span class="cart-book-genre"><i class="fa ${genreIcon}"></i> ${genreLabel}</span></td>
      <td>${item.price.toLocaleString('vi-VN')}₫</td>
      <td>
        <div class="cart-qty">
          <button class="cart-qty-btn" onclick="changeQty(${i},-1)" title="Giảm"><i class="fa fa-minus"></i></button>
          <span>${item.qty}</span>
          <button class="cart-qty-btn" onclick="changeQty(${i},1)" title="Tăng"><i class="fa fa-plus"></i></button>
        </div>
      </td>
      <td>${itemTotal.toLocaleString('vi-VN')}₫</td>
      <td>
        <button class="cart-remove-btn" onclick="removeItem(${i})"><i class="fa fa-trash"></i> Xóa</button>
      </td>
      <td style="text-align:center;">
        <input type="checkbox" class="cart-select" data-idx="${i}" ${selected[i] ? "checked" : ""} style="width:20px;height:20px;">
      </td>
    </tr>`;
  });
  html += `<tr class="cart-total-row"><td colspan="8">Tổng cộng (đã chọn): ${total.toLocaleString('vi-VN')}₫</td></tr>`;
  html += `</tbody></table>`;
  cartContent.innerHTML = html;
  document.querySelectorAll('.cart-select').forEach(cb=>{
    cb.onchange = function() {
      let idx = +this.getAttribute('data-idx');
      selected[idx] = this.checked;
      setSelected(selected);
      renderCart();
    }
  });
  updateCartCount();
}
window.changeQty = function(idx, delta) {
  let cart = getCart();
  if (!cart[idx]) return;
  cart[idx].qty += delta;
  if (cart[idx].qty < 1) cart[idx].qty = 1;
  setCart(cart);
  renderCart();
}
window.removeItem = function(idx) {
  let cart = getCart();
  let selected = getSelected();
  cart.splice(idx, 1);
  selected.splice(idx, 1);
  setCart(cart);
  setSelected(selected);
  renderCart();
}
document.getElementById('selectAllBtn').onclick = function() {
  let cart = getCart();
  setSelected(cart.map(()=>true));
  renderCart();
}
document.getElementById('deselectAllBtn').onclick = function() {
  let cart = getCart();
  setSelected(cart.map(()=>false));
  renderCart();
}

// ========== THANH TOÁN ==========
const cartPopupOverlay = document.getElementById('cartPopupOverlay');
const cartPopupSuccess = document.getElementById('cartPopupSuccess');
const cartPopupClose = document.getElementById('cartPopupClose');
const cartPopupMsg = document.getElementById('cartPopupMsg');
const cartFormPopup = document.getElementById('cartFormPopup');
const cartFormError = document.getElementById('cartFormError');
const cartFormCancel = document.getElementById('cartFormCancel');
document.getElementById('checkoutBtn').onclick = function() {
  const cart = getCart();
  const selected = getSelected();
  let selectedBooks = cart.filter((item,i)=>selected[i]);
  if (!selectedBooks.length) {
    alert("Vui lòng chọn ít nhất một sách để thanh toán!");
    return;
  }
  cartFormPopup.style.display = "";
  cartPopupSuccess.style.display = "none";
  cartPopupOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  cartFormError.textContent = "";
  cartFormPopup.reset && cartFormPopup.reset();
};
cartFormCancel.onclick = function() {
  cartPopupOverlay.classList.remove('active');
  document.body.style.overflow = '';
};
cartPopupOverlay.onclick = function(e) {
  if (e.target === cartPopupOverlay) {
    cartPopupOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};
cartFormPopup.onsubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('cartName').value.trim();
  const phone = document.getElementById('cartPhone').value.trim();
  const address = document.getElementById('cartAddress').value.trim();
  if (!name || !phone || !address) {
    cartFormError.textContent = "Vui lòng nhập đầy đủ thông tin!";
    return;
  }
  if (!/^0\d{9,10}$/.test(phone)) {
    cartFormError.textContent = "Số điện thoại không hợp lệ!";
    return;
  }

  // Hiện xác nhận đơn hàng
  const cart = getCart();
  const selected = getSelected();
  let selectedBooks = cart.filter((item,i)=>selected[i]);
  let msg = `<div style="margin-bottom:10px;">Bạn đã đặt mua:</div><ul style="text-align:left;max-height:120px;overflow:auto;padding-left:18px;">`;
  let total = 0;
  selectedBooks.forEach(item=>{
    msg += `<li>${item.title} (${item.qty} cuốn)</li>`;
    total += item.price * item.qty;
  });
  msg += `</ul>
  <div style="margin-top:10px;font-weight:700;">Tổng tiền: ${total.toLocaleString('vi-VN')}₫</div>
  <div style="margin-top:10px;">
    <b>Khách hàng:</b> ${name}<br>
    <b>Điện thoại:</b> ${phone}<br>
    <b>Địa chỉ:</b> ${address}
  </div>
  <div style="margin-top:10px;">Cảm ơn bạn đã mua sách tại DINO Book Store!</div>`;
  cartPopupMsg.innerHTML = msg;
  cartFormPopup.style.display = "none";
  cartPopupSuccess.style.display = "";

  // Gửi dữ liệu sang Google Sheet
  sendOrderToSheet(name, phone, address, selectedBooks, total);
};

cartPopupClose.onclick = function() {
  cartPopupOverlay.classList.remove('active');
  document.body.style.overflow = '';
};
window.addEventListener('DOMContentLoaded', function() {
  renderCart();
  updateCartCount();
});

function getCart() {
  try {
    return JSON.parse(localStorage.getItem('cart')) || [];
  } catch {
    return [];
  }
}

function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
  const cart = getCart();
  let totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  localStorage.setItem('cart_total_qty', totalQty);

  const badge = document.getElementById('cart-count');
  if (badge) {
    badge.textContent = totalQty;
    badge.style.display = totalQty > 0 ? "flex" : "none";
  }
}

// Hàm này chỉ để đảm bảo khi load lại trang khác thì badge vẫn đúng
function updateCartBadge() {
  const badge = document.getElementById("cart-count");
  if (!badge) return;

  let count = parseInt(localStorage.getItem("cart_total_qty")) || 0;
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}

// Gọi khi load trang
document.addEventListener("DOMContentLoaded", updateCartBadge);
function sendOrderToSheet(name, phone, address, books, total) {
  const params = new URLSearchParams({
    name: name,
    phone: phone,
    address: address,
    items: books.map(b => `${b.title} (${b.qty})`).join(", "),
    total: total
  });

  fetch("https://script.google.com/macros/s/AKfycby19uDtgvKK0pb2I5nQFLH8JIhaL0-FyIIVWQfaxrvicLdFDdC-psAnKeW23OzlYJMtxA/exec?" + params.toString())
    .then(res => res.json())
    .then(res => console.log("✅ Đã gửi đơn hàng:", res))
    .catch(err => console.error("❌ Lỗi gửi đơn hàng:", err));
}
