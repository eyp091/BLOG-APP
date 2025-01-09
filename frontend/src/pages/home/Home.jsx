import React, { useState } from 'react';
import useGetAllBlogs from '../../hooks/useGetAllBlogs';
import { extarctTime } from '../../utils/extractTime';
import { Link } from 'react-router-dom';

const Home = () => {
  const { loading, blogs } = useGetAllBlogs();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Newsletter işlemleri burada yapılacak
    setEmail('');
  };

  const categories = [
    { id: 1, name: 'Teknoloji', count: 12, color: 'bg-blue-100 text-blue-600' },
    { id: 2, name: 'Yaşam', count: 8, color: 'bg-green-100 text-green-600' },
    { id: 3, name: 'Spor', count: 15, color: 'bg-red-100 text-red-600' },
    { id: 4, name: 'Sanat', count: 10, color: 'bg-purple-100 text-purple-600' },
    { id: 5, name: 'Bilim', count: 7, color: 'bg-yellow-100 text-yellow-600' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Düşüncelerinizi Keşfedin ve Paylaşın
            </h1>
            <p className="text-xl md:text-2xl font-light mb-10 text-blue-100">
              Bilgi, deneyim ve hikayeleri paylaşabileceğiniz blog platformuna hoş geldiniz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/write-blog"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-50 transition duration-300"
              >
                Blog Yazısı Oluştur
              </Link>
              <Link
                to="/about"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
              >
                Hakkımızda
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-4">
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          </div>
        ) : (
          <>
            {/* Categories */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Kategoriler</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.id}`}
                    className={`${category.color} rounded-xl p-4 text-center hover:shadow-md transition duration-300`}
                  >
                    <h3 className="font-semibold mb-2">{category.name}</h3>
                    <span className="text-sm">{category.count} Yazı</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Featured Articles */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Öne Çıkan Yazılar</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {blogs.slice(0, 2).map((blog) => (
                  <article
                    key={blog.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                  >
                    <div className="relative">
                      <img
                        src={blog.image || 'https://picsum.photos/600/400'}
                        alt={blog.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                        <Link to={`/blogs/${blog._id}`}>
                          <h3 className="text-2xl font-bold text-white hover:underline">
                            {blog.title}
                          </h3>
                        </Link>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 line-clamp-3">{blog.content}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img
                            src={blog.autherDetails.profilePic || 'https://picsum.photos/50'}
                            alt={blog.autherDetails.fullName}
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <p className="font-semibold text-gray-800">
                              {blog.autherDetails.fullName}
                            </p>
                            <p className="text-sm text-gray-500">
                              {extarctTime(blog.createdAt)}
                            </p>
                          </div>
                        </div>
                        <Link
                          to={`/blogs/${blog._id}`}
                          className="text-blue-600 hover:text-blue-700 font-semibold"
                        >
                          Devamını Oku →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Latest Articles */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Son Yazılar</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.slice(2).map((blog) => (
                  <article
                    key={blog.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300"
                  >
                    <img
                      src={blog.image || 'https://picsum.photos/300/200'}
                      alt={blog.title}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                    <div className="p-6">
                      <Link to={`/blogs/${blog._id}`}>
                        <h3 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition duration-300 mb-3">
                          {blog.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-4 line-clamp-3">{blog.content}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img
                            src={blog.autherDetails.profilePic || 'https://picsum.photos/50'}
                            alt={blog.autherDetails.fullName}
                            className="w-8 h-8 rounded-full"
                          />
                          <div className="text-sm">
                            <p className="text-gray-800">{blog.autherDetails.fullName}</p>
                            <p className="text-gray-500">{extarctTime(blog.createdAt)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Güncel Yazılardan Haberdar Olun</h2>
                <p className="text-blue-100 mb-8">
                  En son blog yazılarımızdan ve güncellemelerimizden haberdar olmak için bültenimize kaydolun.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-posta adresiniz"
                    className="px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
                  >
                    Abone Ol
                  </button>
                </form>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MyBlog</h3>
              <p className="text-gray-400">
                Düşüncelerinizi paylaşın, bilgi edinin ve toplulukla etkileşime geçin.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Ana Sayfa</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white">Hakkımızda</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">İletişim</Link></li>
                <li><Link to="/write-blog" className="text-gray-400 hover:text-white">Blog Yaz</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kategoriler</h4>
              <ul className="space-y-2">
                {categories.slice(0, 4).map(category => (
                  <li key={category.id}>
                    <Link to={`/category/${category.id}`} className="text-gray-400 hover:text-white">
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Bizi Takip Edin</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p> 2024 MyBlog. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
