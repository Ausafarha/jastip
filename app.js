/**
 * JASTIP AREA BANTARKAWUNG SEKITARNYA - IN-MEMORY STATE & LOGIC WITH CATEGORY FILTER
 */

const ADMIN_PHONE = "6285866692986";

// Master Data Produk
const productsData = [
    // --- LELE MARINASI (READY PO) ---
    {
        id: 1,
        category: 'lele',
        name: 'Lele Marinasi Segar (Isi 3)',
        desc: 'Ukuran besar, siap goreng, bumbu marinasi meresap gurih.',
        price: 12000,
        unit: 'pack',
        status: 'READY PO',
        image: 'assets/images/lele.jpg'
    },
    {
        id: 2,
        category: 'lele',
        name: 'Lele Marinasi Segar (Isi 5)',
        desc: 'Ukuran sedang isi 5 ekor, porsi pas untuk keluarga.',
        price: 19000,
        unit: 'pack',
        status: 'READY PO',
        image: 'assets/images/lele.jpg'
    },

    // --- MELON HIDROPONIK (COMING SOON) ---
    {
        id: 3,
        category: 'melon',
        name: 'Melon Hidroponik Jaring (Net)',
        desc: 'Melon net manis renyah premium, hasil kebun hidroponik lokal.',
        price: 45000,
        unit: 'kg',
        status: 'COMING SOON',
        image: 'assets/images/melon1.jpg'
    },
    {
        id: 4,
        category: 'melon',
        name: 'Melon Hidroponik Dalmatian',
        desc: 'Melon motif dalmatian dengan tekstur super juicy dan manis tinggi.',
        price: 45000,
        unit: 'kg',
        status: 'COMING SOON',
        image: 'assets/images/melon2.jpg'
    },

    // --- IKAN LAUT ASAP (COMING SOON) ---
    {
        id: 5,
        category: 'ikan-asap',
        name: 'Ikan Asap Pari / Peh (Isi 5 Potong)',
        desc: 'Daging kenyal khas ikan pari asap segar tangkapan nelayan.',
        price: 20000,
        unit: 'pack',
        status: 'COMING SOON',
        image: 'assets/images/peh.jpg'
    },
    {
        id: 6,
        category: 'ikan-asap',
        name: 'Ikan Asap Panggang (Isi 5 Potong)',
        desc: 'Ikan panggang asap aroma khas gurih, cocok untuk mangut.',
        price: 15000,
        unit: 'pack',
        status: 'COMING SOON',
        image: 'assets/images/panggang.jpg'
    },
    {
        id: 7,
        category: 'ikan-asap',
        name: 'Ikan Asap Cucut (Isi 5 Potong)',
        desc: 'Daging padat gurih tanpa banyak duri halus.',
        price: 20000,
        unit: 'pack',
        status: 'COMING SOON',
        image: 'assets/images/cucut.jpg'
    },
    {
        id: 8,
        category: 'ikan-asap',
        name: 'Ikan Asap Larak (Isi 5 Potong)',
        desc: 'Ikan larak pengasapan tradisional kualitas super.',
        price: 20000,
        unit: 'pack',
        status: 'COMING SOON',
        image: 'assets/images/larak.jpg'
    },
    {
        id: 9,
        category: 'ikan-asap',
        name: 'Ikan Asap Etong (Isi 5 Potong)',
        desc: 'Daging tebal mirip ayam dengan aroma asap khas.',
        price: 20000,
        unit: 'pack',
        status: 'COMING SOON',
        image: 'assets/images/etong.jpg'
    }
];

// In-Memory State Keranjang Belanja
let cart = JSON.parse(localStorage.getItem('jastip_cart')) || [];
let currentCategory = 'all';

// Inisialisasi Aplikasi
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(currentCategory);
    updateCartUI();
    
    const checkoutForm = document.getElementById('checkout-form');
    checkoutForm.addEventListener('submit', handleCheckout);
});

/**
 * Filter & Render Produk Berdasarkan Kategori
 */
function filterProducts(category) {
    currentCategory = category;
    
    // Update State Tombol Filter UI
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    renderProducts(category);
}

function renderProducts(category) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    // Filter Data
    const filteredProducts = category === 'all' 
        ? productsData 
        : productsData.filter(p => p.category === category);

    // Render HTML Cards
    filteredProducts.forEach(product => {
        const isReady = product.status === 'READY PO';
        const cardClass = isReady ? 'product-card' : 'product-card disabled';
        const badgeClass = isReady ? 'badge-status ready' : 'badge-status coming-soon';
        
        const actionButton = isReady 
            ? `<button class="btn btn-primary btn-block" onclick="addToCart(${product.id})">
                🛒 Tambah ke Keranjang
               </button>`
            : `<button class="btn btn-secondary btn-block" onclick="notifyDemand('${product.name}')">
                📱 Ingatkan Saya via WA
               </button>`;

        const cardHTML = `
            <article class="${cardClass}">
                <div class="card-image-wrapper">
                    <span class="${badgeClass}">${product.status}</span>
                    <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" onclick="openImageModal('${product.image}', '${product.name}')">
                </div>
                <div class="card-body">
                    <h4 class="product-title">${product.name}</h4>
                    <p class="product-desc">${product.desc}</p>
                    <p class="product-price">${formatRupiah(product.price)} <span class="unit">/ ${product.unit}</span></p>
                    ${actionButton}
                </div>
            </article>
        `;

        productGrid.innerHTML += cardHTML;
    });
}

/**
 * Menambahkan Produk ke Keranjang
 */
function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            unit: product.unit,
            quantity: 1
        });
    }

    saveAndRenderCart();
}

/**
 * Menghapus Item dari Keranjang
 */
function removeFromCart(index) {
    cart.splice(index, 1);
    saveAndRenderCart();
}

function saveAndRenderCart() {
    localStorage.setItem('jastip_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartBadge = document.getElementById('cart-badge');
    const cartTotalPrice = document.getElementById('cart-total-price');

    const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItemsCount;

    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="cart-empty-text">Keranjang belanja Anda masih kosong.</p>`;
        cartTotalPrice.textContent = "Rp 0";
        return;
    }

    let grandTotal = 0;

    cart.forEach((item, index) => {
        const itemSubtotal = item.price * item.quantity;
        grandTotal += itemSubtotal;

        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div class="cart-item-info">
                <h5>${item.name}</h5>
                <p>${item.quantity} x ${formatRupiah(item.price)} = <strong>${formatRupiah(itemSubtotal)}</strong></p>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})">Hapus</button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    cartTotalPrice.textContent = formatRupiah(grandTotal);
}

/**
 * Handler Checkout WhatsApp
 */
function handleCheckout(e) {
    e.preventDefault();

    if (cart.length === 0) {
        alert("Keranjang Anda masih kosong. Silakan pilih produk terlebih dahulu!");
        return;
    }

    const nameInput = document.getElementById('customer-name').value.trim();
    const addressInput = document.getElementById('customer-address').value.trim();

    if (!nameInput || !addressInput) {
        alert("Mohon lengkapi Nama dan Alamat Pengiriman!");
        return;
    }

    const grandTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    let itemsText = "";
    cart.forEach((item, index) => {
        itemsText += `${index + 1}. *${item.name}*\n   - Qty: ${item.quantity} ${item.unit}\n   - Subtotal: ${formatRupiah(item.price * item.quantity)}\n`;
    });

    const message = 
`🛍️ *PESANAN BARU - JASTIP BANTARKAWUNG SEKITARNYA* 🛍️

*Data Pemesan:*
👤 *Nama:* ${nameInput}
📍 *Alamat:* ${addressInput}

---
*Rincian Pesanan:*
${itemsText}
---
💰 *Total Pembayaran:* ${formatRupiah(grandTotal)}

Halo Admin, mohon proses pesanan jastip saya di atas ya. Terima kasih!`;

    const waUrl = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
}

/**
 * Handler Validasi Demand (Coming Soon Button)
 */
function notifyDemand(productName) {
    const demandMessage = `Halo Admin Jastip BANTARKAWUNG SEKITARNYA, saya tertarik dengan produk *${productName}*. Tolong infokan jika kloter PO produk ini sudah dibuka ya! Terima kasih.`;
    const waUrl = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(demandMessage)}`;
    window.open(waUrl, '_blank');
}

/**
 * Helper Utility
 */
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
    }).format(number);
}

/**
 * Helper Fungsi Popup Modal Gambar
 */
function openImageModal(imageSrc, title) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img-target');
    const captionText = document.getElementById('modal-caption');

    modal.style.display = 'block';
    modalImg.src = imageSrc;
    captionText.textContent = title;
}

function closeImageModal() {
    document.getElementById('image-modal').style.display = 'none';
}