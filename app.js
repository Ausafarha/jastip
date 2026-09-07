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
/**
 * Update UI Keranjang Belanja dengan Rentang Harga
 */
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

    let minGrandTotal = 0;
    let maxGrandTotal = 0;
    let hasRange = false;

    cart.forEach((item, index) => {
        // Ambil data produk asli untuk cek displayPrice
        const product = productsData.find(p => p.id === item.id);
        const selectedVariant = product ? product.variants.find(v => item.name.includes(v.name)) : null;

        let itemPriceText = formatRupiah(item.price * item.quantity);

        if (selectedVariant && selectedVariant.displayPrice) {
            hasRange = true;
            // Ambil angka min & max dari displayPrice (contoh: "Rp 64.000 - Rp 72.000")
            const prices = selectedVariant.displayPrice.replace(/[^0-9-]/g, '').split('-');
            const minPrice = parseInt(prices[0]) * item.quantity;
            const maxPrice = parseInt(prices[1]) * item.quantity;
            
            minGrandTotal += minPrice;
            maxGrandTotal += maxPrice;
            itemPriceText = `${formatRupiah(minPrice)} - ${formatRupiah(maxPrice)}`;
        } else {
            const total = item.price * item.quantity;
            minGrandTotal += total;
            maxGrandTotal += total;
        }

        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div class="cart-item-info">
                <h5>${item.name}</h5>
                <p>${item.quantity} x (${itemPriceText})</p>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})">Hapus</button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    // Tampilkan Total Estimasi di Keranjang
    if (hasRange) {
        cartTotalPrice.textContent = `${formatRupiah(minGrandTotal)} - ${formatRupiah(maxGrandTotal)}`;
    } else {
        cartTotalPrice.textContent = formatRupiah(minGrandTotal);
    }
}

/**
 * Handler Checkout Pesanan & Simpan ke Catatan Admin
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

    let minGrandTotal = 0;
    let maxGrandTotal = 0;
    let hasMelon = false;
    let itemsText = "";
    let itemsArray = [];

    cart.forEach((item, index) => {
        const product = productsData.find(p => p.id === item.id);
        const selectedVariant = product ? product.variants.find(v => item.name.includes(v.name)) : null;

        if (item.category === 'melon') hasMelon = true;

        let priceText = "";
        if (selectedVariant && selectedVariant.displayPrice) {
            const prices = selectedVariant.displayPrice.replace(/[^0-9-]/g, '').split('-');
            const minPrice = parseInt(prices[0]) * item.quantity;
            const maxPrice = parseInt(prices[1]) * item.quantity;
            
            minGrandTotal += minPrice;
            maxGrandTotal += maxPrice;
            priceText = `${formatRupiah(minPrice)} - ${formatRupiah(maxPrice)}`;
        } else {
            const total = item.price * item.quantity;
            minGrandTotal += total;
            maxGrandTotal += total;
            priceText = formatRupiah(total);
        }

        itemsText += `${index + 1}. *${item.name}*\n   • Qty: ${item.quantity}\n   • Est. Harga: ${priceText}\n`;
        itemsArray.push(`${item.name} (${item.quantity}x)`);
    });

    const totalText = (minGrandTotal !== maxGrandTotal) 
        ? `${formatRupiah(minGrandTotal)} - ${formatRupiah(maxGrandTotal)}`
        : formatRupiah(minGrandTotal);

    // 1. OLEH KARENA ITU: Buat Objek Pesanan Baru
    const newOrder = {
        id: Date.now(),
        date: new Date().toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' }),
        customerName: nameInput,
        address: addressInput,
        notes: notesInput || '-',
        items: itemsArray,
        totalEstimate: totalText,
        status: 'pending'
    };

    // 2. SIMPAN DULU KE LOCALSTORAGE ADMIN (PENTING!)
    saveOrderToAdmin(newOrder);

    // 3. Rakit Format Pesan WhatsApp
    let message = `Halo Admin Jastip Bantarkawung, saya mau order:\n\n`;
    message += `📋 *DETAIL PESANAN:*\n${itemsText}\n`;
    message += `💰 *TOTAL ESTIMASI:* ${totalText}\n\n`;
    message += `👤 *DATA PEMBELI:*\n`;
    message += `• Nama: ${nameInput}\n`;
    message += `• Patokan Alamat: ${addressInput}\n`;
    message += `• Catatan: ${notesInput || '-'}\n\n`;

    if (hasMelon) {
        message += `⚖️ *INFO TIMBANGAN:* Total di atas adalah estimasi kisaran berat. Harga pas akan diinfokan setelah barang ditimbang ya kak.\n\n`;
    }

    message += `📍 *LOKASI PENGIRIMAN:*\n(Mohon lampirkan Share Location / Titik Maps lokasi Rumah Anda di bawah pesan ini ya Kak 🙏)`;

    // 4. Bersihkan Keranjang Belanja & Form Input
    cart = [];
    localStorage.removeItem('jastip_cart');
    updateCartUI();
    document.getElementById('checkout-form').reset();

    // 5. Direct ke WhatsApp
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
// --- MANAJEMEN PANEL ADMIN MANUAL ---

const MY_ADMIN_PIN = "676767"; // Ganti PIN kamu di sini

function openAdminPanel() {
    const inputPin = prompt("Masukkan PIN Rahasia Admin:");
    if (inputPin === MY_ADMIN_PIN) {
        const adminPanel = document.getElementById('admin-panel');
        adminPanel.style.display = 'block';
        renderAdminDashboard();
        adminPanel.scrollIntoView({ behavior: 'smooth' });
    } else if (inputPin !== null) {
        alert("PIN Salah! Akses ditolak.");
    }
}

function closeAdminPanel() {
    document.getElementById('admin-panel').style.display = 'none';
}

function getAdminOrders() {
    return JSON.parse(localStorage.getItem('jastip_admin_manual_orders')) || [];
}

// 1. Simpan Otomatis dari Copas Teks WA
function parseAndSaveWA() {
    const pasteText = document.getElementById('admin-paste-input').value.trim();
    if (!pasteText) {
        alert("Silakan paste/tempel teks format WA terlebih dahulu!");
        return;
    }

    // Ambil Nama Pembeli
    const nameMatch = pasteText.match(/•\s*Nama:\s*(.*)/i) || pasteText.match(/Nama:\s*(.*)/i);
    const customerName = nameMatch ? nameMatch[1].trim() : "Pelanggan WA";

    // Ambil Alamat
    const addressMatch = pasteText.match(/•\s*Patokan Alamat:\s*(.*)/i);
    const address = addressMatch ? addressMatch[1].trim() : "-";

    // Ambil Total Estimasi
    const totalMatch = pasteText.match(/TOTAL ESTIMASI:\*\s*(.*)/i);
    const totalEst = totalMatch ? totalMatch[1].trim() : "";

    const newOrder = {
        id: Date.now(),
        date: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        name: customerName,
        info: `📍 ${address} ${totalEst ? '| 💰 ' + totalEst : ''}`,
        rawText: pasteText,
        status: 'pending'
    };

    const orders = getAdminOrders();
    orders.unshift(newOrder);
    localStorage.setItem('jastip_admin_manual_orders', JSON.stringify(orders));

    document.getElementById('admin-paste-input').value = '';
    renderAdminDashboard();
}

// 2. Simpan Manual (Cuma Nama + Info)
function saveManualOrder() {
    const nameInput = document.getElementById('admin-manual-name').value.trim();
    const infoInput = document.getElementById('admin-manual-info').value.trim();

    if (!nameInput) {
        alert("Nama Pelanggan harus diisi!");
        return;
    }

    const newOrder = {
        id: Date.now(),
        date: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        name: nameInput,
        info: infoInput || 'Pesanan Manual',
        rawText: '',
        status: 'pending'
    };

    const orders = getAdminOrders();
    orders.unshift(newOrder);
    localStorage.setItem('jastip_admin_manual_orders', JSON.stringify(orders));

    document.getElementById('admin-manual-name').value = '';
    document.getElementById('admin-manual-info').value = '';
    renderAdminDashboard();
}

function toggleOrderStatus(orderId) {
    const orders = getAdminOrders();
    const index = orders.findIndex(o => o.id === orderId);
    if (index > -1) {
        orders[index].status = orders[index].status === 'completed' ? 'pending' : 'completed';
        localStorage.setItem('jastip_admin_manual_orders', JSON.stringify(orders));
        renderAdminDashboard();
    }
}

function deleteAdminOrder(orderId) {
    if (confirm("Hapus catatan ini?")) {
        let orders = getAdminOrders();
        orders = orders.filter(o => o.id !== orderId);
        localStorage.setItem('jastip_admin_manual_orders', JSON.stringify(orders));
        renderAdminDashboard();
    }
}

function clearAllAdminOrders() {
    if (confirm("Yakin hapus SEMUA catatan pesanan?")) {
        localStorage.removeItem('jastip_admin_manual_orders');
        renderAdminDashboard();
    }
}

// Render Tampilan List Catatan Admin
function renderAdminDashboard() {
    const container = document.getElementById('admin-orders-list');
    const totalBadge = document.getElementById('admin-total-orders');
    const pendingBadge = document.getElementById('admin-pending-orders');

    if (!container) return;

    const orders = getAdminOrders();
    const pendingCount = orders.filter(o => o.status === 'pending').length;

    totalBadge.textContent = orders.length;
    pendingBadge.textContent = pendingCount;

    if (orders.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:#666; font-size: 0.85rem; padding: 10px;">Belum ada catatan.</p>`;
        return;
    }

    let html = '';
    orders.forEach(order => {
        const isDone = order.status === 'completed';
        const cardStyle = isDone ? 'background-color: #f0fdf4; border-left: 4px solid #22c55e;' : 'background-color: #fff; border-left: 4px solid #eab308;';
        const titleStyle = isDone ? 'text-decoration: line-through; color: #166534;' : 'color: #0f172a;';

        html += `
            <div style="padding: 10px; margin-bottom: 8px; border-radius: 6px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); ${cardStyle}">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <strong style="font-size: 0.9rem; ${titleStyle}">👤 ${order.name} <small style="font-weight:normal; color:#64748b;">(${order.date})</small></strong>
                    <span style="font-size: 0.7rem; padding: 2px 6px; border-radius: 4px; ${isDone ? 'background:#dcfce7;color:#166534;' : 'background:#fef9c3;color:#854d0e;'}">
                        ${isDone ? 'Selesai' : 'Pending'}
                    </span>
                </div>
                
                <p style="margin: 4px 0; font-size: 0.8rem; color: #475569;">${order.info}</p>
                
                <div style="margin-top: 6px; display: flex; gap: 6px;">
                    <button onclick="toggleOrderStatus(${order.id})" style="padding: 3px 8px; font-size: 0.75rem; cursor: pointer; border: none; border-radius: 4px; ${isDone ? 'background:#cbd5e1;color:#334155;' : 'background:#22c55e;color:#fff;'}">
                        ${isDone ? '↩️ Batal' : '✅ Selesai'}
                    </button>
                    <button onclick="deleteAdminOrder(${order.id})" style="padding: 3px 8px; font-size: 0.75rem; background:#ef4444; color:#fff; border:none; border-radius:4px; cursor:pointer;">
                        🗑️ Hapus
                    </button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}