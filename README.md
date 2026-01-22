# Trang Web Bán Sản Phẩm Cá Nhân

Trang web đơn giản để bán một sản phẩm cá nhân của bạn.

## Cách chạy

```bash
npm start
```

Sau đó mở trình duyệt tại `http://localhost:8000`

## Tùy chỉnh sản phẩm

Để thay đổi thông tin sản phẩm, chỉnh sửa các file sau:

1. **index.html** - Thay đổi:
   - Tên sản phẩm
   - Mô tả sản phẩm
   - Giá sản phẩm
   - Thông tin liên hệ ở footer

2. **script.js** - Thay đổi:
   - `productConfig.unitPrice` - Giá sản phẩm
   - `productConfig.shippingFee` - Phí vận chuyển

3. **style.css** - Tùy chỉnh màu sắc và giao diện

## Tính năng

- ✅ Trang landing page đẹp mắt
- ✅ Form đặt hàng đơn giản
- ✅ Tính toán giá tự động
- ✅ Responsive design
- ✅ Thông báo đặt hàng thành công

## Cấu trúc file

```
├── index.html      # Trang chính
├── style.css       # Stylesheet
├── script.js       # JavaScript
├── package.json    # NPM config
└── README.md       # Hướng dẫn
```
