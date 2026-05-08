// مصفوفة المنتجات الثابتة - متجر Randa
const products = [
    { 
        id: 1, 
        name: "كاميرا احترافية", 
        price: 3500, 
        img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500" 
    },
    { 
        id: 2, 
        name: "آيفون 13 وردي", 
        price: 2800, 
        img: "https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_SL1500_.jpg" 
    },
    { 
        id: 3, 
        name: "نظارة شمسية", 
        price: 850, 
        img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500" 
    },
    { 
        id: 4, 
        name: "ماك بوك اير", 
        price: 6000, 
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500" 
    }
];

let count = 0;

function renderStore() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    // تحديث العنوان
    const headerTitle = document.querySelector('h1');
    if (headerTitle) headerTitle.innerText = "متجر Randa المنوع 🌟";

    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <div style="height: 200px; display: flex; align-items: center; justify-content: center; background: white; border-radius: 15px; overflow: hidden; margin-bottom: 15px; border: 1px solid #eee;">
                <img src="${p.img}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: contain; padding: 10px;">
            </div>
            <h3>${p.name}</h3>
            <span class="price">${p.price} ريال</span>
            <button class="add-btn" onclick="addToCart('${p.name}')">إضافة للسلة</button>
        </div>
    `).join('');
}

function addToCart(name) {
    count++;
    const cartElement = document.getElementById('cartCount');
    if (cartElement) {
        cartElement.innerText = count;
    }
    alert(" ! تم إضافة " + name + " بنجاح الى سلتك");
}

// التأكيد من تشغيل الدالة فور تحميل الصفحة
window.onload = renderStore;