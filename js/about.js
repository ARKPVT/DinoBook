// BAN LÃNH ĐẠO
const boardMembers = [
  {
    name: "Nguyễn Minh Quân",
    role: "Chủ tịch HĐQT",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "“Sách là ngọn đèn soi sáng tương lai.”"
  },
  {
    name: "Trần Thị Bích Ngọc",
    role: "Tổng Giám đốc",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "“Mỗi cuốn sách là một cánh cửa mở ra thế giới mới.”"
  },
  {
    name: "Lê Hoàng Nam",
    role: "Giám đốc Công nghệ",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    quote: "“Công nghệ là cầu nối tri thức cho mọi thế hệ.”"
  },
  {
    name: "Phạm Thị Hồng Hạnh",
    role: "Giám đốc Marketing",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "“Lan tỏa cảm hứng đọc sách đến triệu trái tim Việt.”"
  }
];
const boardList = document.getElementById('boardList');
boardMembers.forEach((m, i) => {
  const card = document.createElement('div');
  card.className = "flip-card";
  card.tabIndex = 0;
  card.innerHTML = `
        <img src="${m.img}" alt="${m.name}">
        <div class="board-name">${m.name}</div>
        <div class="board-role">${m.role}</div>
        <div class="board-quote">${m.quote}</div>
      `;
  boardList.appendChild(card);
});

// Hiệu ứng hiện dần khi cuộn
function fadeInOnScroll() {
  document.querySelectorAll('.about-section, .about-board-section').forEach(el => {
    if (el.classList.contains('visible')) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
  document.querySelectorAll('.timeline-event').forEach((el, idx) => {
    if (el.classList.contains('visible')) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      setTimeout(()=>el.classList.add('visible'), idx*120);
    }
  });
  document.querySelectorAll('.about-mission, .about-vision').forEach((el, idx) => {
    if (el.classList.contains('visible')) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      setTimeout(()=>el.classList.add('visible'), idx*120);
    }
  });
  document.querySelectorAll('.flip-card').forEach((el, idx) => {
    if (el.classList.contains('visible')) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      setTimeout(()=>el.classList.add('visible'), idx*120);
    }
  });
}
window.addEventListener('DOMContentLoaded', () => setTimeout(fadeInOnScroll, 300));
window.addEventListener('scroll', fadeInOnScroll);

// HERO ANIMATION ON LOAD + TYPE EFFECT
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelectorAll('.about-hero .hero-animate').forEach(el => {
      el.classList.add('visible');
    });
    // Typewriter effect for slogan
    const slogan = '"Mỗi trang sách là một chuyến phiêu lưu kỳ diệu!"';
    const sloganEl = document.getElementById('typeSlogan');
    let i = 0;
    function type() {
      if (i <= slogan.length) {
        sloganEl.textContent = slogan.slice(0, i);
        i++;
        setTimeout(type, 32 + Math.random()*40);
      } else {
        sloganEl.textContent = slogan;
        sloganEl.style.borderRight = "none";
      }
    }
    setTimeout(type, 800);
  }, 200);
});

// MENU NAVIGATION JS
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

// Parallax effect for books on mouse move
document.querySelector('.about-hero .parallax-books').addEventListener('mousemove', function(e) {
  const imgs = this.querySelectorAll('img');
  imgs.forEach((img, idx) => {
    const offset = (e.offsetX - this.offsetWidth/2)/20 + (idx-1)*10;
    img.style.transform = `translateY(-8px) scale(1.08) rotate(${offset}deg)`;
  });
});
document.querySelector('.about-hero .parallax-books').addEventListener('mouseleave', function(e) {
  const imgs = this.querySelectorAll('img');
  imgs.forEach((img) => {
    img.style.transform = '';
  });
});

function updateAccountMenu() {
  const tenNguoiDung = localStorage.getItem('tenNguoiDung');
  const tenDangNhap = localStorage.getItem('tenDangNhap');
  const navBtn = document.querySelector('.main-nav .nav-btn');
  const dropdown = navBtn?.parentElement.querySelector('.dropdown');
  if (!navBtn || !dropdown) return;

  if (tenNguoiDung && tenNguoiDung.trim() !== "") {
    // Đã đăng nhập
    navBtn.innerHTML = `<i class="fa fa-user"></i> ${tenNguoiDung} <i class="fa fa-caret-down"></i>`;
    // Ẩn Đăng nhập/Đăng ký, hiện Hồ sơ/Đăng xuất
    dropdown.querySelectorAll('a').forEach(a => {
      if (a.href.includes('dangnhap') || a.href.includes('dangky')) {
        a.style.display = 'none';
      } else {
        a.style.display = '';
      }
    });
  } else {
    // Chưa đăng nhập
    navBtn.innerHTML = `<i class="fa fa-user"></i> Tài khoản <i class="fa fa-caret-down"></i>`;
    // Hiện Đăng nhập/Đăng ký, ẩn Hồ sơ/Đăng xuất
    dropdown.querySelectorAll('a').forEach(a => {
      if (a.href.includes('dangnhap') || a.href.includes('dangky')) {
        a.style.display = '';
      } else {
        a.style.display = 'none';
      }
    });
  }
}

// Xử lý Đăng xuất
document.addEventListener('DOMContentLoaded', function() {
  updateAccountMenu();
  // Đăng xuất: xóa localStorage và reload
  document.querySelectorAll('.main-nav .dropdown a').forEach(a => {
    if (a.textContent.includes('Đăng xuất')) {
      a.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('tenNguoiDung');
        localStorage.removeItem('tenDangNhap');
        updateAccountMenu();
        // Reload lại trang để cập nhật giao diện
        window.location.reload();
      });
    }
  });
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
