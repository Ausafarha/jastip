/**
 * JASTIP AREA BANTARKAWUNG SEKITARNYA - IN-MEMORY STATE & LOGIC WITH CATEGORY FILTER
 */

const ADMIN_PHONE = "6285866692986";

// Master Data Produk
const productsData = [
    // --- IKAN MARINASI (READY PO) ---
    {
        id: 1,
        category: 'marinasi',
        name: 'Lele Marinasi Segar',
        desc: 'Siap goreng, bumbu marinasi meresap gurih. Bebas pilih varian.',
        status: 'READY PO',
        image: 'assets/images/lele.jpg',
        variants: [
            { name: 'Pack Isi 3 Ekor', price: 12000, unit: 'pack' },
            { name: 'Kiloan (1 Kg Segar)', price: 32000, unit: 'kg' }
        ]
    },
    {
        id: 2,
        category: 'marinasi',
        name: 'Nila Marinasi Segar',
        desc: 'Ikan nila segar dibumbui marinasi spesial, daging tebal dan gurih.',
        status: 'COMING SOON',
        image: 'assets/images/nila.jpg',
        variants: [
            { name: 'Pack Isi 3 Ekor', price: 22000, unit: 'pack' },
            { name: 'Kiloan (1 Kg Segar)', price: 35000, unit: 'kg' }
        ]
    },

    // --- MELON HIDROPONIK (READY PO) ---
    {
        id: 3,
        category: 'melon',
        name: 'Melon Golden Aroma',
        desc: 'Melon net manis renyah premium. Kemanisan tinggi di atas 13 Brix.',
        status: 'READY PO',
        image: 'assets/images/melon1.jpg',
        variants: [
            { name: 'Ukuran Sedang (± 1.0 - 1.2 kg)', price: 40000, displayPrice: 'Rp 40.000 - Rp 48.000', unit: 'est' },
            { name: 'Ukuran Besar (± 1.3 - 1.5 kg)', price: 52000, displayPrice: 'Rp 52.000 - Rp 60.000', unit: 'est' },
            { name: 'Ukuran Jumbo (± 1.6 - 1.8 kg)', price: 64000, displayPrice: 'Rp 64.000 - Rp 72.000', unit: 'est' }
        ]
    },
    {
        id: 4,
        category: 'melon',
        name: 'Melon Dalmatian',
        desc: 'Melon dengan tekstur super juicy. Kemanisan tinggi di atas 13 Brix.',
        status: 'READY PO',
        image: 'assets/images/melon2.jpg',
        variants: [
            { name: 'Ukuran Sedang (± 1.0 - 1.2 kg)', price: 40000, displayPrice: 'Rp 40.000 - Rp 48.000', unit: 'est' },
            { name: 'Ukuran Besar (± 1.3 - 1.5 kg)', price: 52000, displayPrice: 'Rp 52.000 - Rp 60.000', unit: 'est' },
            { name: 'Ukuran Jumbo (± 1.6 - 1.8 kg)', price: 64000, displayPrice: 'Rp 64.000 - Rp 72.000', unit: 'est' }
        ]
    },
    {
        id: 5,
        category: 'melon',
        name: 'Melon Sweet Lavender (Kuning)',
        desc: 'Melon hidroponik kulit kuning jaring, daging renyah & sangat manis.',
        status: 'READY PO',
        image: 'assets/images/sweet-lavender.jpg',
        variants: [
            { name: 'Ukuran Sedang (± 1.0 - 1.2 kg)', price: 35000, displayPrice: 'Rp 35.000 - Rp 42.000', unit: 'est' },
            { name: 'Ukuran Besar (± 1.3 - 1.5 kg)', price: 45500, displayPrice: 'Rp 45.500 - Rp 52.500', unit: 'est' },
            { name: 'Ukuran Jumbo (± 1.6 - 1.8 kg)', price: 56000, displayPrice: 'Rp 56.000 - Rp 63.000', unit: 'est' }
        ]
    },
    {
        id: 6,
        category: 'melon',
        name: 'Melon Sweet Net (Putih)',
        desc: 'Melon kulit putih net premium, tekstur lembut, juicy, dan manis.',
        status: 'READY PO',
        image: 'assets/images/sweetnet.jpg',
        variants: [
            { name: 'Ukuran Sedang (± 1.0 - 1.2 kg)', price: 35000, displayPrice: 'Rp 35.000 - Rp 42.000', unit: 'est' },
            { name: 'Ukuran Besar (± 1.3 - 1.5 kg)', price: 45500, displayPrice: 'Rp 45.500 - Rp 52.500', unit: 'est' },
            { name: 'Ukuran Jumbo (± 1.6 - 1.8 kg)', price: 56000, displayPrice: 'Rp 56.000 - Rp 63.000', unit: 'est' }
        ]
    },

    // --- IKAN LAUT ASAP (COMING SOON) ---
    {
        id: 7,
        category: 'ikan-asap',
        name: 'Ikan Asap Pari / Peh (Isi 5 Potong)',
        desc: 'Daging kenyal khas ikan pari asap segar tangkapan nelayan.',
        status: 'COMING SOON',
        image: 'assets/images/peh.jpg',
        variants: [
            { name: 'Pack Isi 5 Potong', price: 20000, unit: 'pack' }
        ]
    },
    {
        id: 8,
        category: 'ikan-asap',
        name: 'Ikan Asap Panggang (Isi 5 Ekor)',
        desc: 'Ikan panggang asap aroma khas gurih, cocok untuk mangut.',
        status: 'COMING SOON',
        image: 'assets/images/panggang.jpg',
        variants: [
            { name: 'Pack Isi 5 Ekor', price: 15000, unit: 'pack' }
        ]
    },
    {
        id: 9,
        category: 'ikan-asap',
        name: 'Ikan Asap Cucut (Isi 5 Potong)',
        desc: 'Daging padat gurih tanpa banyak duri halus.',
        status: 'COMING SOON',
        image: 'assets/images/cucut.jpg',
        variants: [
            { name: 'Pack Isi 5 Potong', price: 20000, unit: 'pack' }
        ]
    },
    {
        id: 10,
        category: 'ikan-asap',
        name: 'Ikan Asap Larak (Isi 5 Potong)',
        desc: 'Ikan larak pengasapan tradisional kualitas super.',
        status: 'COMING SOON',
        image: 'assets/images/larak.jpg',
        variants: [
            { name: 'Pack Isi 5 Potong', price: 20000, unit: 'pack' }
        ]
    },
    {
        id: 11,
        category: 'ikan-asap',
        name: 'Ikan Asap Etong (Isi 5 Potong)',
        desc: 'Daging tebal mirip ayam dengan aroma asap khas.',
        status: 'COMING SOON',
        image: 'assets/images/etong.jpg',
        variants: [
            { name: 'Pack Isi 5 Potong', price: 20000, unit: 'pack' }
        ]
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
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckout);
    }
});

/**
 * Filter & Render Produk Berdasarkan Kategori
 */
function filterProducts(category) {
    currentCategory = category;
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }

    renderProducts(category);
}

function renderProducts(category) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    const filteredProducts = category === 'all' 
        ? productsData 
        : productsData.filter(p => p.category === category);

    filteredProducts.forEach(product => {
        const isReady = product.status === 'READY PO';
        const cardClass = isReady ? 'product-card' : 'product-card disabled';
        const badgeClass = isReady ? 'badge-status ready' : 'badge-status coming-soon';
        
        let variantOptionsHTML = '';
        product.variants.forEach((variant, index) => {
            const priceText = variant.displayPrice ? variant.displayPrice : formatRupiah(variant.price);
            variantOptionsHTML += `<option value="${index}">${variant.name} (${priceText})</option>`;
        });

        const actionButton = isReady 
            ? `<div class="variant-select-group">
                <label for="variant-${product.id}">Pilih Varian / Berat:</label>
                <select id="variant-${product.id}" class="variant-dropdown" onchange="updateCardPrice(${product.id})">
                    ${variantOptionsHTML}
                </select>
               </div>
               <button class="btn btn-primary btn-block" onclick="addToCartWithVariant(${product.id})">
                🛒 Tambah ke Keranjang
               </button>`
            : `<button class="btn btn-secondary btn-block" onclick="notifyDemand('${product.name}')">
                📱 Ingatkan Saya via WA
               </button>`;

        const initialPriceText = product.variants[0].displayPrice ? product.variants[0].displayPrice : formatRupiah(product.variants[0].price);
        const initialUnit = product.variants[0].unit;

        const cardHTML = `
            <article class="${cardClass}">
                <div class="card-image-wrapper">
                    <span class="${badgeClass}">${product.status}</span>
                    <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" onclick="openImageModal('${product.image}', '${product.name}')">
                </div>
                <div class="card-body">
                    <h4 class="product-title">${product.name}</h4>
                    <p class="product-desc">${product.desc}</p>
                    <p class="product-price" id="price-display-${product.id}">
                        ${initialPriceText} <span class="unit">/ ${initialUnit}</span>
                    </p>
                    ${actionButton}
                </div>
            </article>
        `;

        productGrid.innerHTML += cardHTML;
    });
}

// Fungsi Update Tampilan Harga Saat Dropdown Varian Diubah
function updateCardPrice(productId) {
    const product = productsData.find(p => p.id === productId);
    const selectElement = document.getElementById(`variant-${productId}`);
    const selectedVariant = product.variants[selectElement.value];

    const priceText = selectedVariant.displayPrice ? selectedVariant.displayPrice : formatRupiah(selectedVariant.price);
    const priceDisplay = document.getElementById(`price-display-${productId}`);
    priceDisplay.innerHTML = `${priceText} <span class="unit">/ ${selectedVariant.unit}</span>`;
}

// Fungsi Tambah ke Keranjang Berdasarkan Varian yang Dipilih
function addToCartWithVariant(productId) {
    const product = productsData.find(p => p.id === productId);
    const selectElement = document.getElementById(`variant-${productId}`);
    const selectedVariant = product.variants[selectElement.value];

    const cartItemId = `${product.id}-${selectedVariant.name}`;
    const cartItemName = `${product.name} (${selectedVariant.name})`;

    const existingIndex = cart.findIndex(item => item.cartItemId === cartItemId);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            cartItemId: cartItemId,
            id: product.id,
            name: cartItemName,
            price: selectedVariant.price,
            unit: selectedVariant.unit,
            category: product.category,
            quantity: 1
        });
    }

    saveAndRenderCart();
}

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
    const notesInput = document.getElementById('customer-notes') ? document.getElementById('customer-notes').value.trim() : '';

    if (!nameInput || !addressInput) {
        alert("Mohon lengkapi Nama dan Alamat Pengiriman!");
        return;
    }

    const grandTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const hasMelon = cart.some(item => item.category === 'melon');

    let itemsText = "";
    cart.forEach((item, index) => {
        itemsText += `${index + 1}. *${item.name}*\n   • Qty: ${item.quantity}\n   • Subtotal: ${formatRupiah(item.price * item.quantity)}\n`;
    });

    let message = `Halo Admin Jastip Bantarkawung, saya mau order:\n\n`;
    message += `📋 *DETAIL PESANAN:*\n${itemsText}\n`;
    message += `💰 *TOTAL ESTIMASI:* ${formatRupiah(grandTotal)}\n\n`;
    message += `👤 *DATA PEMBELI:*\n`;
    message += `• Nama: ${nameInput}\n`;
    message += `• Patokan Alamat: ${addressInput}\n`;
    message += `• Catatan: ${notesInput || '-'}\n\n`;

    if (hasMelon) {
        message += `⚖️ *CATATAN TIMBANGAN MELON:*\nTotal harga melon di atas adalah estimasi. Admin akan mengonfirmasi berat pasti & nota akhir via chat ini.\n\n`;
    }

    message += `📍 *LOKASI PENGIRIMAN:*\n(Mohon lampirkan Share Location / Titik Maps lokasi Rumah Anda di bawah pesan ini ya Kak 🙏)`;

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

function openImageModal(imageSrc, title) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img-target');
    const captionText = document.getElementById('modal-caption');

    if (modal && modalImg && captionText) {
        modal.style.display = 'block';
        modalImg.src = imageSrc;
        captionText.textContent = title;
    }
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}