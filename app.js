// بيانات المنتجات: الاسم والفئة والسعر والصورة والوصف
const products = [
  {
    id: 1,
    name: "مشاية كهربائية",
    category: "أجهزة",
    price: 18500,
    icon: "🏃",
    description: "مشاية منزلية للمشي والجري."
  },
  {
    id: 2,
    name: "عجلة رياضية",
    category: "أجهزة",
    price: 7200,
    icon: "🚴",
    description: "عجلة ثابتة لتمارين الكارديو."
  },
  {
    id: 3,
    name: "بنش تمارين",
    category: "أجهزة",
    price: 4200,
    icon: "🪑",
    description: "بنش لتمارين الصدر والأوزان."
  },
  {
    id: 4,
    name: "دامبل قابل للتعديل",
    category: "أوزان",
    price: 1800,
    icon: "🏋️",
    description: "دامبل مناسب لتمارين الذراع والكتف."
  },
  {
    id: 5,
    name: "طقم أوزان",
    category: "أوزان",
    price: 3200,
    icon: "💪",
    description: "مجموعة أوزان لتمارين الجسم."
  },
  {
    id: 6,
    name: "بار حديد",
    category: "أوزان",
    price: 2300,
    icon: "🏋️‍♂️",
    description: "بار حديد لتمارين القوة."
  },
  {
    id: 7,
    name: "كرة قدم",
    category: "كرة قدم",
    price: 950,
    icon: "⚽",
    description: "كرة مناسبة للتدريب واللعب."
  },
  {
    id: 8,
    name: "حذاء كرة قدم",
    category: "كرة قدم",
    price: 2100,
    icon: "👟",
    description: "حذاء مريح للعب على الملاعب."
  },
  {
    id: 9,
    name: "قفازات حارس مرمى",
    category: "كرة قدم",
    price: 750,
    icon: "🧤",
    description: "قفازات تساعد على تثبيت الكرة."
  },
  {
    id: 10,
    name: "واقي ساق",
    category: "كرة قدم",
    price: 400,
    icon: "🛡️",
    description: "واقي للساق أثناء لعب كرة القدم."
  },
  {
    id: 11,
    name: "قفازات ملاكمة",
    category: "رياضات قتالية",
    price: 1450,
    icon: "🥊",
    description: "قفازات تدريب للملاكمة والكيك بوكس."
  },
  {
    id: 12,
    name: "كيس ملاكمة",
    category: "رياضات قتالية",
    price: 3600,
    icon: "🥊",
    description: "كيس تدريب للملاكمة واللياقة."
  },
  {
    id: 13,
    name: "واقي أسنان",
    category: "رياضات قتالية",
    price: 300,
    icon: "🦷",
    description: "واقي للفم أثناء التمارين القتالية."
  },
  {
    id: 14,
    name: "نظارة سباحة",
    category: "سباحة",
    price: 450,
    icon: "🥽",
    description: "نظارة سباحة مريحة وواضحة."
  },
  {
    id: 15,
    name: "زعانف سباحة",
    category: "سباحة",
    price: 800,
    icon: "🤿",
    description: "زعانف تساعد على التدريب في الماء."
  },
  {
    id: 16,
    name: "لوح تدريب سباحة",
    category: "سباحة",
    price: 520,
    icon: "🏊",
    description: "لوح للمساعدة في تمارين السباحة."
  },
  {
    id: 17,
    name: "مضرب تنس",
    category: "تنس",
    price: 1900,
    icon: "🎾",
    description: "مضرب تنس مناسب للتدريب واللعب."
  },
  {
    id: 18,
    name: "كرات تنس",
    category: "تنس",
    price: 380,
    icon: "🟡",
    description: "علبة كرات مناسبة للتدريب."
  },
  {
    id: 19,
    name: "مضرب تنس طاولة",
    category: "تنس",
    price: 650,
    icon: "🏓",
    description: "مضرب للعب تنس الطاولة."
  },
  {
    id: 20,
    name: "خوذة دراجة",
    category: "دراجات",
    price: 1100,
    icon: "⛑️",
    description: "خوذة لحماية الرأس أثناء ركوب الدراجة."
  },
  {
    id: 21,
    name: "قفازات دراجة",
    category: "دراجات",
    price: 480,
    icon: "🧤",
    description: "قفازات مريحة لركوب الدراجة."
  },
  {
    id: 22,
    name: "زجاجة مياه للدراجة",
    category: "دراجات",
    price: 250,
    icon: "🥤",
    description: "زجاجة مياه سهلة الحمل أثناء ركوب الدراجة."
  },
  {
    id: 23,
    name: "حبل نط",
    category: "إكسسوارات",
    price: 250,
    icon: "〰️",
    description: "حبل خفيف لتمارين الكارديو."
  },
  {
    id: 24,
    name: "فرشة يوجا",
    category: "إكسسوارات",
    price: 700,
    icon: "🧘",
    description: "فرشة مريحة لليوجا وتمارين الأرض."
  },
  {
    id: 25,
    name: "قارورة مياه رياضية",
    category: "إكسسوارات",
    price: 220,
    icon: "🧴",
    description: "قارورة قابلة لإعادة الاستخدام."
  },
  {
    id: 26,
    name: "حبل مقاومة",
    category: "إكسسوارات",
    price: 350,
    icon: "➰",
    description: "حبل مطاطي لتمارين المقاومة واللياقة."
  }
];

// قراءة السلة المحفوظة من المتصفح
let cart = JSON.parse(localStorage.getItem("gymCart")) || [];
let selectedCategory = "الكل";
let searchText = "";
let sortType = "normal";

// اختصار للوصول إلى عناصر الصفحة
function getElement(id) {
  return document.getElementById(id);
}

// تنسيق السعر بالجنيه
function priceText(price) {
  return price.toLocaleString("ar-EG") + " جنيه";
}

// منع عرض علامات HTML كنص أدخله العميل
function safeText(text) {
  let element = document.createElement("div");
  element.textContent = text;
  return element.innerHTML;
}

// عرض المنتجات
function showProducts() {
  let shownProducts = products.filter(function (product) {
    let categoryMatches =
      selectedCategory === "الكل" ||
      product.category === selectedCategory;

    let productText = (
      product.name + " " +
      product.category + " " +
      product.description
    ).toLowerCase();

    let searchMatches = productText.includes(searchText.toLowerCase());

    return categoryMatches && searchMatches;
  });

  if (sortType === "low") {
    shownProducts.sort(function (a, b) {
      return a.price - b.price;
    });
  }

  if (sortType === "high") {
    shownProducts.sort(function (a, b) {
      return b.price - a.price;
    });
  }

  let productsHTML = "";

  shownProducts.forEach(function (product) {
    productsHTML += `
      <article class="product">
        <div class="product-image">${product.icon}</div>

        <div class="product-info">
          <span class="product-category">${product.category}</span>
          <h3>${product.name}</h3>
          <p class="product-description">${product.description}</p>

          <div class="product-bottom">
            <span class="product-price">${priceText(product.price)}</span>
            <button class="add-button" data-add="${product.id}">
              أضف للسلة
            </button>
          </div>
        </div>
      </article>
    `;
  });

  getElement("productList").innerHTML = productsHTML;
  getElement("noResults").hidden = shownProducts.length > 0;
}

// حفظ السلة وتحديثها
function saveCart() {
  localStorage.setItem("gymCart", JSON.stringify(cart));
  showCartItems();
}

// عرض محتويات السلة وحساب السعر
function showCartItems() {
  let cartHTML = "";
  let totalPrice = 0;
  let itemCount = 0;

  cart.forEach(function (item) {
    let product = products.find(function (p) {
      return p.id === item.id;
    });

    if (product) {
      totalPrice += product.price * item.quantity;
      itemCount += item.quantity;

      cartHTML += `
        <div class="cart-row">
          <span>${product.icon}</span>
          <span class="cart-name">${product.name}</span>
          <button class="quantity-button" data-minus="${product.id}">−</button>
          <span>${item.quantity}</span>
          <button class="quantity-button" data-plus="${product.id}">+</button>
          <button class="remove-button" data-remove="${product.id}">حذف</button>
        </div>
      `;
    }
  });

  if (cart.length === 0) {
    cartHTML = "<p>السلة فارغة. أضف منتجًا الأول.</p>";
  }

  getElement("cartItems").innerHTML = cartHTML;
  getElement("cartCount").textContent = itemCount;
  getElement("totalPrice").textContent = priceText(totalPrice);
  getElement("checkoutButton").disabled = cart.length === 0;
}

// إظهار رسالة قصيرة للمستخدم
function showNotice(message) {
  let notice = getElement("notice");
  notice.textContent = message;
  notice.classList.add("show");

  setTimeout(function () {
    notice.classList.remove("show");
  }, 2200);
}

// فتح السلة
function openCart() {
  getElement("cartPanel").classList.add("open");
  getElement("shade").classList.add("show");
}

// إغلاق السلة
function closeCart() {
  getElement("cartPanel").classList.remove("open");
  getElement("shade").classList.remove("show");
}

// أزرار إضافة المنتجات وتعديل السلة
document.addEventListener("click", function (event) {
  let button = event.target.closest("button");

  if (!button) {
    return;
  }

  // إضافة منتج
  if (button.dataset.add) {
    let id = Number(button.dataset.add);

    let item = cart.find(function (cartItem) {
      return cartItem.id === id;
    });

    if (item) {
      item.quantity++;
    } else {
      cart.push({ id: id, quantity: 1 });
    }

    saveCart();
    showNotice("تمت إضافة المنتج إلى السلة");
  }

  // زيادة الكمية
  if (button.dataset.plus) {
    let id = Number(button.dataset.plus);

    let item = cart.find(function (cartItem) {
      return cartItem.id === id;
    });

    item.quantity++;
    saveCart();
  }

  // تقليل الكمية
  if (button.dataset.minus) {
    let id = Number(button.dataset.minus);

    let item = cart.find(function (cartItem) {
      return cartItem.id === id;
    });

    item.quantity--;

    if (item.quantity === 0) {
      cart = cart.filter(function (cartItem) {
        return cartItem.id !== id;
      });
    }

    saveCart();
  }

  // حذف منتج
  if (button.dataset.remove) {
    let id = Number(button.dataset.remove);

    cart = cart.filter(function (cartItem) {
      return cartItem.id !== id;
    });

    saveCart();
  }
});

// البحث
getElement("searchButton").addEventListener("click", function () {
  searchText = getElement("searchInput").value.trim();
  showProducts();
});

getElement("searchInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    getElement("searchButton").click();
  }
});

// تصفية المنتجات باستخدام أزرار التصنيف
document.querySelectorAll(".filter").forEach(function (button) {
  button.addEventListener("click", function () {
    selectedCategory = button.dataset.category;

    document.querySelectorAll(".filter").forEach(function (filter) {
      filter.classList.remove("active");
    });

    button.classList.add("active");
    showProducts();
  });
});

// تصفية المنتجات من شريط التنقل
document.querySelectorAll(".category-link").forEach(function (link) {
  link.addEventListener("click", function () {
    selectedCategory = link.dataset.category;

    document.querySelectorAll(".filter").forEach(function (button) {
      button.classList.toggle(
        "active",
        button.dataset.category === selectedCategory
      );
    });

    showProducts();
  });
});

// ترتيب المنتجات حسب السعر
getElement("sortSelect").addEventListener("change", function () {
  sortType = this.value;
  showProducts();
});

// فتح وإغلاق السلة
getElement("cartButton").addEventListener("click", openCart);
getElement("closeCart").addEventListener("click", closeCart);
getElement("shade").addEventListener("click", closeCart);

// فتح نموذج بيانات العميل
getElement("checkoutButton").addEventListener("click", function () {
  if (cart.length > 0) {
    closeCart();
    getElement("orderModal").classList.add("open");
  }
});

// إغلاق نموذج الطلب
getElement("closeOrder").addEventListener("click", function () {
  getElement("orderModal").classList.remove("open");
});

// تسجيل الطلب وعرضه في سجل الطلبات
getElement("orderForm").addEventListener("submit", function (event) {
  event.preventDefault();

  if (cart.length === 0) {
    showNotice("السلة فارغة");
    return;
  }

  let form = this;
  let total = 0;
  let orderedProducts = [];

  // تسجيل اسم كل منتج وسعره وكميته
  cart.forEach(function (item) {
    let product = products.find(function (p) {
      return p.id === item.id;
    });

    if (product) {
      total += product.price * item.quantity;

      orderedProducts.push({
        name: product.name,
        quantity: item.quantity,
        price: product.price
      });
    }
  });

  let order = {
    number: Date.now().toString().slice(-7),
    name: form.elements.name.value,
    phone: form.elements.phone.value,
    address: form.elements.address.value,
    payment: form.elements.payment.value,
    products: orderedProducts,
    total: total,
    date: new Date().toLocaleString("ar-EG"),
    status: "تم تسجيل الطلب — بانتظار إتمام الدفع والتوصيل"
  };

  let orders = JSON.parse(localStorage.getItem("gymOrders")) || [];
  orders.push(order);
  localStorage.setItem("gymOrders", JSON.stringify(orders));

  // تفريغ السلة بعد تسجيل الطلب
  cart = [];
  saveCart();

  form.reset();
  getElement("orderModal").classList.remove("open");

  showNotice("تم تسجيل الطلب رقم " + order.number);
  showOrders();

  getElement("orders").scrollIntoView({ behavior: "smooth" });
});

// عرض الطلبات المحفوظة
function showOrders() {
  let orders = JSON.parse(localStorage.getItem("gymOrders")) || [];
  let ordersList = getElement("ordersList");

  getElement("noOrders").style.display =
    orders.length === 0 ? "block" : "none";

  let html = "";

  // نعرض أحدث طلب في البداية
  orders.slice().reverse().forEach(function (order) {
    let productsHTML = "";

    order.products.forEach(function (product) {
      productsHTML += `
        <div>
          ${safeText(product.name)} — الكمية: ${product.quantity}
          — سعر القطعة: ${priceText(product.price)}
        </div>
      `;
    });

    html += `
      <article class="order-card">
        <h3>طلب رقم: ${safeText(order.number)}</h3>
        <p><strong>اسم العميل:</strong> ${safeText(order.name)}</p>
        <p><strong>رقم الهاتف:</strong> ${safeText(order.phone)}</p>
        <p><strong>العنوان:</strong> ${safeText(order.address)}</p>

        <div class="order-products">
          <strong>المنتجات:</strong>
          ${productsHTML}
        </div>

        <p><strong>الإجمالي المطلوب:</strong> ${priceText(order.total)}</p>
        <p><strong>طريقة الدفع المختارة:</strong> ${safeText(order.payment)}</p>
        <p><strong>وقت تسجيل الطلب:</strong> ${safeText(order.date)}</p>
        <p class="order-status"><strong>حالة الطلب:</strong> ${safeText(order.status)}</p>
      </article>
    `;
  });

  ordersList.innerHTML = html;
}

// مسح سجل الطلبات المحفوظ على هذا المتصفح
getElement("clearOrders").addEventListener("click", function () {
  let confirmed = confirm("هل تريد مسح كل الطلبات المسجلة؟");

  if (confirmed) {
    localStorage.removeItem("gymOrders");
    showOrders();
    showNotice("تم مسح سجل الطلبات");
  }
});

// عرض المنتجات والسلة والطلبات عند فتح الموقع
showProducts();
showCartItems();
showOrders();