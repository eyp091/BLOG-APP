# MyBlog - Modern Blog Platformu

MyBlog, kullanıcıların kolayca blog yazıları oluşturup paylaşabilecekleri modern ve kullanıcı dostu bir blog platformudur.

## 🚀 Özellikler

- 📝 Blog yazısı oluşturma ve düzenleme
- 🔍 Kategorilere göre içerik filtreleme
- 💬 Yorum sistemi
- 👤 Kullanıcı profilleri
- 📱 Responsive tasarım
- 🌙 Modern ve kullanıcı dostu arayüz

## 🛠️ Teknolojiler

### Frontend
- React.js
- Tailwind CSS
- React Router
- Font Awesome Icons

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## 🚀 Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/yourusername/my-blog-app.git
cd my-blog-app
```

2. Frontend bağımlılıklarını yükleyin:
```bash
cd frontend
npm install
```

3. Backend bağımlılıklarını yükleyin:
```bash
cd backend
npm install
```

4. Gerekli environment değişkenlerini ayarlayın:
- `.env` dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:
```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

5. Uygulamayı başlatın:

Frontend için:
```bash
cd frontend
npm run dev
```

Backend için:
```bash
cd backend
npm start
```

## 📁 Proje Yapısı

```
my-blog-app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── App.jsx
│   └── package.json
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
└── README.md
```

## 🖥️ Ekran Görüntüleri

- Ana Sayfa: Modern ve kullanıcı dostu blog listesi
- Blog Yazma Sayfası: Zengin metin editörü ve kategori seçenekleri
- Blog Detay Sayfası: Yazı içeriği, yazar bilgileri ve yorum sistemi

## 🤝 Katkıda Bulunma

1. Bu projeyi fork edin
2. Feature branch'i oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakın.

## 📞 İletişim


Proje Linki: [https://github.com/yourusername/my-blog-app](https://github.com/yourusername/my-blog-app)
