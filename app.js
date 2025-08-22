// ================== DỮ LIỆU SÁCH ==================
const books = [
  {
    title: "The Wild Woman's Way",
    author: "Michaela Boehm",
    cover: "https://covers.openlibrary.org/b/id/10523338-L.jpg",
    content: `
      <h2>The Wild Woman's Way</h2>
      <p><b>Tác giả:</b> Michaela Boehm</p>
      <p>Unlock Your Full Potential for Pleasure, Power, and Fulfillment. Một cuốn sách truyền cảm hứng giúp bạn khám phá sức mạnh và sự tự do nội tại của chính mình.</p>
    `,
    genre: "ngontinh",
    price: 120000,
  },
  {
    title: "See What I Have Done",
    author: "Sarah Schmidt",
    cover: "https://covers.openlibrary.org/b/id/8231996-L.jpg",
    content: `
      <h2>See What I Have Done</h2>
      <p><b>Tác giả:</b> Sarah Schmidt</p>
      <p>Một tiểu thuyết tâm lý tội phạm dựa trên vụ án nổi tiếng Lizzie Borden, đưa bạn vào hành trình khám phá sự thật và những bí ẩn đen tối.</p>
    `,
    genre: "trinhtham",
    price: 135000,
  },
  {
    title: "The Familiars",
    author: "Stacey Halls",
    cover: "https://covers.openlibrary.org/b/id/10523337-L.jpg",
    content: `
      <h2>The Familiars</h2>
      <p><b>Tác giả:</b> Stacey Halls</p>
      <p>Một câu chuyện lịch sử hấp dẫn về tình bạn, phép thuật và sự kiên cường của phụ nữ trong thời kỳ săn phù thủy ở Anh quốc.</p>
    `,
    genre: "huyenhuyen",
    price: 99000,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://covers.openlibrary.org/b/id/9250225-L.jpg",
    content: `
      <h2>Atomic Habits</h2>
      <p><b>Tác giả:</b> James Clear</p>
      <p>Cuốn sách nổi tiếng về xây dựng thói quen nhỏ để tạo nên thành công lớn, giúp bạn thay đổi cuộc sống từng bước một cách bền vững.</p>
    `,
    genre: "vientuong",
    price: 150000,
  },
  {
    title: "Ikigai: The Japanese Secret to a Long and Happy Life",
    author: "Héctor García & Francesc Miralles",
    cover: "https://covers.openlibrary.org/b/id/8370226-L.jpg",
    content: `
      <h2>Ikigai: The Japanese Secret to a Long and Happy Life</h2>
      <p><b>Tác giả:</b> Héctor García & Francesc Miralles</p>
      <p>Khám phá bí quyết sống lâu và hạnh phúc của người Nhật, tìm ra ý nghĩa cuộc sống và động lực mỗi ngày.</p>
    `,
    genre: "vientuong",
    price: 110000,
  },
];
const moreBooks = [
  {
    title: "Tam Thể",
    author: "Lưu Từ Hân",
    cover: "https://covers.openlibrary.org/b/id/10523339-L.jpg",
    content: `
      <h2>Tam Thể</h2>
      <p><b>Tác giả:</b> Lưu Từ Hân</p>
      <p>Siêu phẩm viễn tưởng về sự tiếp xúc giữa nhân loại và nền văn minh ngoài hành tinh.</p>
    `,
    genre: "vientuong",
    price: 175000,
  },
  {
    title: "Sherlock Holmes: Tập Truyện Ngắn",
    author: "Arthur Conan Doyle",
    cover:
      "https://product.hstatic.net/200000950941/product/sh_1_22efc1374f4441c682c4a98e482bd151_master.jpg",
    content: `
      <h2>Sherlock Holmes: Tập Truyện Ngắn</h2>
      <p><b>Tác giả:</b> Arthur Conan Doyle</p>
      <p>Những vụ án trinh thám kinh điển của thám tử lừng danh Sherlock Holmes.</p>
    `,
    genre: "trinhtham",
    price: 98000,
  },
  {
    title: "Đấu La Đại Lục",
    author: "Đường Gia Tam Thiếu",
    cover:
      "https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-dau-la-dai-luc.jpg",
    content: `
      <h2>Đấu La Đại Lục</h2>
      <p><b>Tác giả:</b> Đường Gia Tam Thiếu</p>
      <p>Huyền huyễn, tu luyện, thế giới linh hồn và những trận chiến hấp dẫn.</p>
    `,
    genre: "huyenhuyen",
    price: 125000,
  },
  {
    title: "Binh Pháp Tôn Tử",
    author: "Tôn Vũ",
    cover:
      "https://bizweb.dktcdn.net/100/180/408/products/ton-tu-binh-phap-bia-1.jpg?v=1645088330417",
    content: `
      <h2>Binh Pháp Tôn Tử</h2>
      <p><b>Tác giả:</b> Tôn Vũ</p>
      <p>Tác phẩm kinh điển về nghệ thuật quân sự, chiến lược và trí tuệ.</p>
    `,
    genre: "quansu",
    price: 89000,
  },
  {
    title: "Hậu Cung Như Ý Truyện",
    author: "Lưu Liễm Tử",
    cover:
      "https://cdn1.fahasa.com/media/catalog/product/b/i/bia-mem_hau-cung-nhu-y-truyen---tap-4-3-01-copy_1.jpg",
    content: `
      <h2>Hậu Cung Như Ý Truyện</h2>
      <p><b>Tác giả:</b> Lưu Liễm Tử</p>
      <p>Ngôn tình cung đấu, tình yêu và quyền lực trong hậu cung nhà Thanh.</p>
    `,
    genre: "ngontinh",
    price: 112000,
  },
];

// ================== GENRE DATA ==================
const genres = [
  { key: "all", label: "Tất cả", icon: "fa-globe" },
  { key: "trinhtham", label: "Trinh thám", icon: "fa-user-secret" },
  { key: "vientuong", label: "Viễn tưởng", icon: "fa-rocket" },
  { key: "huyenhuyen", label: "Huyền huyễn", icon: "fa-dragon" },
  { key: "quansu", label: "Quân sự", icon: "fa-shield-halved" },
  { key: "ngontinh", label: "Ngôn tình", icon: "fa-heart" },
];
const genreBooksList = document.getElementById("genreBooksList");
let currentGenre = "all";
let searchValue = "";
const allBooks = books.concat(moreBooks);

// ================== MENU NAVIGATION JS ==================
const menuToggle = document.querySelector(".main-nav .menu-toggle");
const navLinks = document.querySelector(".main-nav .nav-links");
menuToggle.onclick = () => {
  navLinks.classList.toggle("open");
};
document.querySelectorAll(".main-nav .nav-btn").forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();
    document
      .querySelectorAll(".main-nav ul.nav-links li")
      .forEach((li) => {
        if (li !== btn.parentElement) li.classList.remove("open");
      });
    btn.parentElement.classList.toggle("open");
  };
  document.addEventListener("click", function (ev) {
    if (!btn.parentElement.contains(ev.target)) {
      btn.parentElement.classList.remove("open");
    }
  });
});
document.querySelectorAll(".main-nav .nav-links a").forEach((link) => {
  link.onclick = () => {
    navLinks.classList.remove("open");
    document
      .querySelectorAll(".main-nav ul.nav-links li")
      .forEach((li) => li.classList.remove("open"));
  };
});

// ================== CAROUSEL ==================
const carousel = document.getElementById("carousel");
let selectedIdx = 0;
const bookContent = document.getElementById("book-content");
const N = books.length;
let isRotating = false;
let autoTimeout = null;
let isAutoPaused = false;

function renderCarousel(animate = true) {
  const angleStep = 360 / N;
  const radius = 200;
  let targetAngle = -selectedIdx * angleStep;
  carousel.style.transition = animate
    ? "transform 0.7s cubic-bezier(.4,2,.6,1)"
    : "none";
  carousel.style.transform = `rotateY(${targetAngle}deg)`;

  carousel.innerHTML = "";
  books.forEach((book, idx) => {
    const angle = idx * angleStep;
    const bookDiv = document.createElement("div");
    bookDiv.style.setProperty("--angle", `${angle}deg`);
    bookDiv.style.setProperty("--radius", `${radius}px`);
    if (idx === selectedIdx) {
      bookDiv.className = "carousel-book selected";
    } else {
      bookDiv.className = "carousel-book not-selected";
    }
    bookDiv.innerHTML = `<img src="${book.cover}" alt="${book.title}" title="${book.title}">`;
    bookDiv.addEventListener("click", () => {
      if (selectedIdx !== idx && !isRotating) {
        rotateTo(idx);
      }
    });
    carousel.appendChild(bookDiv);
  });
}

function fadeInOnceOnScroll() {
  document.querySelectorAll(".fade-in-once").forEach((el) => {
    if (el.classList.contains("visible")) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", fadeInOnceOnScroll);

function renderBookInfo(fade = true) {
  const prevHeight = bookContent.offsetHeight;
  bookContent.style.minHeight = prevHeight + "px";

  // Hàm render nội dung + gắn sự kiện cho nút Xem thêm
  const renderContent = () => {
    bookContent.innerHTML =
      books[selectedIdx].content +
      `<button id="seeMoreBtn" class="btn">Xem thêm →</button>`;

    // gắn sự kiện mở modal khi bấm "Xem thêm"
    const seeMoreBtn = document.getElementById("seeMoreBtn");
    if (seeMoreBtn) {
      seeMoreBtn.addEventListener("click", () => {
        showBookModal(books[selectedIdx]);
      });
    }
  };

  if (fade) {
    bookContent.classList.remove("fade-in");
    bookContent.classList.add("fade-out");
    setTimeout(() => {
      renderContent();
      bookContent.classList.remove("fade-out");
      bookContent.classList.add("fade-in");
      setTimeout(() => {
        bookContent.style.minHeight = "";
      }, 500);
    }, 320);
  } else {
    renderContent();
    bookContent.classList.add("fade-in");
    setTimeout(() => {
      bookContent.style.minHeight = "";
    }, 500);
  }
}


function autoRotateStep() {
  if (isRotating || isAutoPaused) {
    autoTimeout = setTimeout(autoRotateStep, 400);
    return;
  }
  isRotating = true;
  selectedIdx = (selectedIdx + 1) % N;
  renderCarousel(true);
  renderBookInfo(true);
  carousel.addEventListener("transitionend", onAutoTransitionEnd, {
    once: true,
  });
}
function onAutoTransitionEnd() {
  isRotating = false;
  if (!isAutoPaused) autoTimeout = setTimeout(autoRotateStep, 2600);
}
function startAutoRotate() {
  isAutoPaused = false;
  if (!autoTimeout) autoTimeout = setTimeout(autoRotateStep, 2600);
}
function stopAutoRotate() {
  isAutoPaused = true;
  if (autoTimeout) clearTimeout(autoTimeout);
  autoTimeout = null;
}
carousel.parentElement.onmouseenter = stopAutoRotate;
carousel.parentElement.onmouseleave = startAutoRotate;
document.addEventListener("visibilitychange", () => {
  if (document.hidden) stopAutoRotate();
  else startAutoRotate();
});
function rotateTo(targetIdx) {
  if (isRotating) return;
  isRotating = true;
  stopAutoRotate();
  let current = selectedIdx;
  let diff = (targetIdx - current + N) % N;
  let step = diff > N / 2 ? -1 : 1;
  let steps = Math.abs(diff > N / 2 ? diff - N : diff);
  let count = 0;
  function nextStep() {
    if (count < steps) {
      current = (current + step + N) % N;
      selectedIdx = current;
      renderCarousel(true);
      renderBookInfo(true);
      count++;
      setTimeout(nextStep, 180);
    } else {
      selectedIdx = targetIdx;
      renderCarousel(true);
      renderBookInfo(true);
      isRotating = false;
      startAutoRotate();
    }
  }
  nextStep();
}

// ================== MODAL CHI TIẾT SÁCH ==================
const bookModalOverlay = document.getElementById("bookModalOverlay");
const bookModal = document.getElementById("bookModal");
const bookModalClose = document.getElementById("bookModalClose");
const modalBookCover = document.getElementById("modalBookCover");
const modalBookTitle = document.getElementById("modalBookTitle");
const modalBookAuthor = document.getElementById("modalBookAuthor");
const modalBookGenre = document.getElementById("modalBookGenre");
const modalBookPrice = document.getElementById("modalBookPrice");
const modalBookDesc = document.getElementById("modalBookDesc");
const modalAddCartBtn = document.getElementById("modalAddCartBtn");
let currentModalBook = null;

function showBookModal(book) {
  currentModalBook = book;
  modalBookCover.src = book.cover;
  modalBookCover.alt = book.title;
  modalBookTitle.textContent = book.title;
  modalBookAuthor.innerHTML = `<i class="fa fa-user"></i> ${book.author}`;
  let genreObj = genres.find((g) => g.key === book.genre);
  modalBookGenre.innerHTML = genreObj
    ? `<i class="fa ${genreObj.icon}"></i> ${genreObj.label}`
    : "";
  modalBookPrice.textContent =
    "Giá: " + book.price.toLocaleString("vi-VN") + "₫";
  modalBookDesc.innerHTML = book.content;
  bookModalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}
function hideBookModal() {
  bookModalOverlay.classList.remove("active");
  document.body.style.overflow = "";
  currentModalBook = null;
}
bookModalClose.onclick = hideBookModal;
bookModalOverlay.onclick = function (e) {
  if (e.target === bookModalOverlay) hideBookModal();
};
document.addEventListener("keydown", function (e) {
  if (bookModalOverlay.classList.contains("active") && e.key === "Escape")
    hideBookModal();
});

// ================== GIỎ HÀNG ==================
function getCart() {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch {
    return [];
  }
}

function getCartCount() {
  return parseInt(localStorage.getItem("cartCount")) || 0;
}

function setCart(cart) {
  // lưu cart
  localStorage.setItem("cart", JSON.stringify(cart));
  // tính tổng số lượng sản phẩm
  let totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  // lưu riêng tổng số sản phẩm
  localStorage.setItem("cartCount", totalCount);
}

function addToCart(book) {
  let cart = getCart();
  let idx = cart.findIndex(
    (item) => item.title === book.title && item.author === book.author
  );
  
  if (idx >= 0) {
    cart[idx].qty += 1;
  } else {
    cart.push({ ...book, qty: 1 });
  }

  setCart(cart);         // lưu giỏ hàng
  updateCartCount();     // 🔥 cập nhật badge ngay
  
  showToast(`Đã thêm "${book.title}" vào giỏ hàng!`);
}

function flyToCart(sourceEl) {
  try {
    const cartIcon =
      document.querySelector(".cart-item i.fa-shopping-cart") ||
      document.querySelector(".cart-item a") ||
      document.querySelector(".cart-item");
    if (!sourceEl || !cartIcon) return;

    // Lấy vị trí trên viewport
    const s = sourceEl.getBoundingClientRect();
    const t = cartIcon.getBoundingClientRect();

    // Tạo bản sao ảnh
    const clone = sourceEl.cloneNode(true);
    clone.classList.add("fly-to-cart");
    clone.style.width = s.width + "px";
    clone.style.height = s.height + "px";
    clone.style.left = s.left + "px";
    clone.style.top = s.top + "px";
    clone.style.transform = "translate3d(0,0,0) scale(1)";
    clone.style.opacity = "1";
    document.body.appendChild(clone);

    // Force reflow để transition hoạt động
    clone.getBoundingClientRect();

    // Tính quỹ đạo
    const endX = (t.left + t.width / 2) - (s.left + s.width / 2);
    const endY = (t.top + t.height / 2) - (s.top + s.height / 2);
    const scale = Math.max(0.15, Math.min(0.3, t.width / s.width));

    // Animate
    clone.style.transform = `translate(${endX}px, ${endY}px) scale(${scale}) rotate(12deg)`;
    clone.style.opacity = "0.35";

    const onEnd = () => {
      clone.removeEventListener("transitionend", onEnd);
      clone.remove();

      // Bump cart + pop badge
      cartIcon.classList.add("cart-bump");
      const badge = document.getElementById("cart-count");
      if (badge) badge.classList.add("badge-pop");
      setTimeout(() => {
        cartIcon.classList.remove("cart-bump");
        if (badge) badge.classList.remove("badge-pop");
      }, 520);
    };
    clone.addEventListener("transitionend", onEnd);
  } catch (e) {
    // bỏ qua nếu có lỗi nhỏ
  }
}
function updateCartCount() {
  const cart = getCart();
  let totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  // Lưu lại tổng số lượng vào localStorage
  localStorage.setItem('cart_total_qty', totalQty);

  // Hiển thị ra badge
  const badge = document.getElementById('cart-count');
  if (badge) {
    badge.textContent = totalQty;
    badge.style.display = totalQty > 0 ? "flex" : "none";
  }
}



function updateCartBadge() {
  const badge = document.getElementById("cart-count");
  if (!badge) return;

  let count = getCartCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}

// Gọi khi load trang
document.addEventListener("DOMContentLoaded", updateCartBadge);

// ================== TOAST THÔNG BÁO ==================
const toast = document.getElementById("toast");
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

// ================== HIỂN THỊ SÁCH THEO THỂ LOẠI ==================
function renderGenreBooks() {
  let filtered = allBooks.filter((book) => {
    let matchGenre =
      currentGenre === "all" || book.genre === currentGenre;
    let matchSearch =
      !searchValue ||
      book.title.toLowerCase().includes(searchValue) ||
      book.author.toLowerCase().includes(searchValue);
    return matchGenre && matchSearch;
  });
  genreBooksList.innerHTML = "";
  if (filtered.length === 0) {
    genreBooksList.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:#ff7e3f;font-size:1.2rem;padding:32px 0;">Không tìm thấy sách phù hợp.</div>`;
    return;
  }
  filtered.forEach((book, i) => {
    let genreObj = genres.find((g) => g.key === book.genre);
    let genreLabel = genreObj ? genreObj.label : "";
    let genreIcon = genreObj ? genreObj.icon : "";
    let card = document.createElement("div");
    card.className = "book-card";
    card.tabIndex = 0;
    card.style.animationDelay = i * 0.08 + "s";
    card.innerHTML = `
      <img class="book-cover" src="${book.cover}" alt="${book.title}">
      <div class="book-info">
        <div class="book-title">${book.title}</div>
        <div class="book-author"><i class="fa fa-user"></i> ${book.author}</div>
        <div class="book-desc">${book.content
          .replace(/<[^>]+>/g, "")
          .slice(0, 80)}...</div>
        <span class="book-genre"><i class="fa ${genreIcon}"></i> ${genreLabel}</span>
        <div class="book-modal-price" style="margin:8px 0 0 0;">${book.price.toLocaleString(
          "vi-VN"
        )}₫</div>
        <button class="book-more" tabindex="0"><i class="fa fa-cart-plus"></i> Thêm vào giỏ hàng</button>
      </div>
    `;
    // Khi click vào thẻ sách (trừ nút thêm giỏ)
    card.addEventListener("click", function (e) {
      if (e.target.classList.contains("book-more")) return;
      showBookModal(book);
    });
    // Khi click nút thêm vào giỏ hàng
    card.querySelector(".book-more").onclick = (ev) => {
      ev.stopPropagation();
      addToCart(book);
      const imgEl = card.querySelector(".book-cover");  // ảnh bìa trong card
  flyToCart(imgEl);
    };
    genreBooksList.appendChild(card);
  });
}

// Nút thêm vào giỏ hàng trong modal
modalAddCartBtn.onclick = function () {
  if (currentModalBook) {
    addToCart(currentModalBook);
    const imgEl = document.getElementById("modalBookCover"); // ảnh bìa trong modal
    flyToCart(imgEl);
  }
};

// ================== TAB THỂ LOẠI & TÌM KIẾM ==================
// lấy reference (nếu chưa có)
const searchInput = document.getElementById("searchInput");
const searchIcon = document.querySelector(".main-nav .search-bar .fa-search");

// hàm cuộn mượt xuống khu vực kết quả (tự điều chỉnh nếu có header cố định)
function scrollToResults() {
  if (!genreBooksList) return;
  // tìm chiều cao header cố định nếu có
  const header = document.querySelector(".main-nav");
  const headerHeight =
    header && getComputedStyle(header).position === "fixed"
      ? header.offsetHeight
      : 0;

  const topPos =
    genreBooksList.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16; // 16px khoảng cách

  window.scrollTo({
    top: Math.max(0, topPos),
    behavior: "smooth",
  });
}

// khi click icon: cập nhật searchValue, render lại danh sách và cuộn xuống
if (searchIcon) {
  searchIcon.addEventListener("click", (e) => {
    // cập nhật searchValue (dùng input hiện tại)
    searchValue = (searchInput?.value || "").trim().toLowerCase();
    renderGenreBooks();

    // nếu muốn focus lại ô tìm kiếm
    if (searchInput) searchInput.focus();

    // cuộn xuống kết quả sau một chút để animation render xong (nhỏ delay để DOM cập nhật)
    setTimeout(scrollToResults, 80);
  });
}

// nhấn Enter trong ô tìm kiếm cũng thực hiện hành động tương tự
if (searchInput) {
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // kích hoạt click icon (đã có listener ở trên)
      if (searchIcon) searchIcon.click();
      else {
        // fallback: trực tiếp render + cuộn
        searchValue = searchInput.value.trim().toLowerCase();
        renderGenreBooks();
        setTimeout(scrollToResults, 80);
      }
    }
  });
}

document.querySelectorAll(".genre-tab").forEach((tab) => {
  tab.onclick = function () {
    document
      .querySelectorAll(".genre-tab")
      .forEach((t) => t.classList.remove("active"));
    this.classList.add("active");
    currentGenre = this.getAttribute("data-genre");
    renderGenreBooks();
  };
});
document
  .getElementById("searchInput")
  .addEventListener("input", function () {
    searchValue = this.value.trim().toLowerCase();
    renderGenreBooks();
  });

// ================== HIỂN THỊ TÊN NGƯỜI DÙNG Ở MENU TÀI KHOẢN ==================
function updateAccountMenu() {
  const tenNguoiDung = localStorage.getItem("tenNguoiDung");
  const tenDangNhap = localStorage.getItem("tenDangNhap");
  const navBtn = document.querySelector(".main-nav .nav-btn");
  const dropdown = navBtn?.parentElement.querySelector(".dropdown");
  if (!navBtn || !dropdown) return;

  if (tenNguoiDung && tenNguoiDung.trim() !== "") {
    navBtn.innerHTML = `<i class="fa fa-user"></i> ${tenNguoiDung} <i class="fa fa-caret-down"></i>`;
    dropdown.querySelectorAll("a").forEach((a) => {
      if (a.href.includes("dangnhap") || a.href.includes("dangky")) {
        a.style.display = "none";
      } else {
        a.style.display = "";
      }
    });
  } else {
    navBtn.innerHTML = `<i class="fa fa-user"></i> Tài khoản <i class="fa fa-caret-down"></i>`;
    dropdown.querySelectorAll("a").forEach((a) => {
      if (a.href.includes("dangnhap") || a.href.includes("dangky")) {
        a.style.display = "";
      } else {
        a.style.display = "none";
      }
    });
  }
}
document.addEventListener("DOMContentLoaded", function () {
  updateAccountMenu();
  document.querySelectorAll(".main-nav .dropdown a").forEach((a) => {
    if (a.textContent.includes("Đăng xuất")) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.removeItem("tenNguoiDung");
        localStorage.removeItem("tenDangNhap");
        updateAccountMenu();
        window.location.reload();
      });
    }
  });
});

// ================== KHỞI TẠO ==================
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("overlay-loading").classList.add("hide");
    setTimeout(() => {
      document.getElementById("overlay-loading").style.display = "none";
      document.querySelector(".container").style.opacity = 1;
      fadeInOnceOnScroll();
    }, 700);
  }, 1200);

  renderCarousel(false);
  renderBookInfo(false);
  startAutoRotate();
  renderGenreBooks();
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
