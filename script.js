// Cấu hình sản phẩm
const productConfig = {
    name: 'Chậu Cây Thông Minh',
    unitPrice: 999000,
    shippingFee: 30000,
    images: [
        'images/anh1.jpg',  // Thay đổi tên file thành anh1.jpg và đặt vào thư mục images
        'images/anh2.jpg',  // Thêm ảnh thứ 2 vào thư mục images
        'images/anh3.jpg',  // Thêm ảnh thứ 3 vào thư mục images
        'images/anh4.jpg'   // Thêm ảnh thứ 4 vào thư mục images
    ]
};

// Thay đổi ảnh chính khi click vào thumbnail
function changeMainImage(index) {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Cập nhật ảnh chính
    mainImage.src = productConfig.images[index];
    
    // Cập nhật trạng thái active của thumbnail
    thumbnails.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Cập nhật giá khi thay đổi số lượng
function updatePrice() {
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    const subtotal = productConfig.unitPrice * quantity;
    const total = subtotal + productConfig.shippingFee;
    
    document.getElementById('qtyDisplay').textContent = quantity;
    document.getElementById('totalPrice').textContent = formatPrice(total);
}

// Thay đổi số lượng
function changeQuantity(delta) {
    const input = document.getElementById('quantity');
    const currentValue = parseInt(input.value) || 1;
    const newValue = Math.max(1, currentValue + delta);
    input.value = newValue;
    updatePrice();
}

// Format số tiền
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN').format(price) + '₫';
}

// Xử lý form đặt hàng
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Lấy thông tin từ form
    const orderData = {
        name: document.getElementById('customerName').value,
        phone: document.getElementById('customerPhone').value,
        email: document.getElementById('customerEmail').value,
        address: document.getElementById('customerAddress').value,
        quantity: parseInt(document.getElementById('quantity').value),
        note: document.getElementById('note').value,
        total: productConfig.unitPrice * parseInt(document.getElementById('quantity').value) + productConfig.shippingFee,
        date: new Date().toISOString()
    };
    
    // Log thông tin đơn hàng (có thể gửi lên server)
    console.log('Đơn hàng:', orderData);
    
    // Hiển thị modal thành công
    showSuccessModal();
    
    // Reset form
    this.reset();
    document.getElementById('quantity').value = 1;
    updatePrice();
    
    // Scroll lên đầu trang
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hiển thị modal thành công
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.add('show');
}

// Đóng modal
function closeModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('show');
}

// Đóng modal khi click bên ngoài
window.onclick = function(event) {
    const modal = document.getElementById('successModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Khởi tạo giá ban đầu
updatePrice();

// Smooth scroll cho link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
