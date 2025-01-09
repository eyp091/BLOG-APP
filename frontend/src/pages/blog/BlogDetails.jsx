import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useGetBlogWithId from '../../hooks/useGetBlogWithId';
import { extarctTime } from '../../utils/extractTime';

const BlogDetails = () => {
    const { id } = useParams();
    const { loading, blog } = useGetBlogWithId(id);
    const [comment, setComment] = useState('');

    const formatedDate = blog?.createdAt ? extarctTime(blog.createdAt) : '';
    
    // Tahmini okuma süresi hesaplama (ortalama 200 kelime/dakika)
    const calculateReadTime = (content) => {
        const wordsPerMinute = 200;
        const wordCount = content?.split(/\s+/)?.length || 0;
        const readTime = Math.ceil(wordCount / wordsPerMinute);
        return readTime;
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        // Yorum gönderme işlemi burada yapılacak
        setComment('');
    };

    if (loading || !blog || !blog.autherDetails) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            {/* Hero Section */}
            <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 mb-12">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex items-center space-x-2 text-blue-100 mb-6">
                        <Link to="/" className="hover:text-white">Ana Sayfa</Link>
                        <span>/</span>
                        <span>{blog.categoryDetails.categoryName}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        {blog.title}
                    </h1>
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-3">
                            <img
                                src={blog.autherDetails.profilePic || 'https://via.placeholder.com/50'}
                                alt={blog.autherDetails.fullName}
                                className="w-12 h-12 rounded-full border-2 border-white"
                            />
                            <div>
                                <p className="font-medium">{blog.autherDetails.fullName}</p>
                                <p className="text-sm text-blue-100">{formatedDate}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                            <i className="far fa-clock"></i>
                            <span>{calculateReadTime(blog.content)} dakika okuma</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sol Sidebar - İçindekiler */}
                    <div className="lg:col-span-1 hidden lg:block">
                        <div className="sticky top-8 bg-white rounded-xl shadow-sm p-6">
                            <h3 className="text-lg font-semibold mb-4">İçindekiler</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="hover:text-blue-600 cursor-pointer">Giriş</li>
                                <li className="hover:text-blue-600 cursor-pointer">Ana Bölüm</li>
                                <li className="hover:text-blue-600 cursor-pointer">Sonuç</li>
                            </ul>
                        </div>
                    </div>

                    {/* Ana İçerik */}
                    <div className="lg:col-span-3">
                        <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
                            <img
                                src={blog.image || "https://via.placeholder.com/800x400"}
                                alt={blog.title}
                                className="w-full h-[400px] object-cover"
                            />
                            
                            <div className="p-8">
                                {/* Sosyal Medya Paylaşım */}
                                <div className="flex items-center space-x-4 mb-8 pb-8 border-b border-gray-100">
                                    <span className="text-gray-600">Paylaş:</span>
                                    <a href="#" className="text-blue-400 hover:text-blue-600">
                                        <i className="fab fa-twitter text-xl"></i>
                                    </a>
                                    <a href="#" className="text-blue-600 hover:text-blue-800">
                                        <i className="fab fa-facebook text-xl"></i>
                                    </a>
                                    <a href="#" className="text-pink-600 hover:text-pink-800">
                                        <i className="fab fa-instagram text-xl"></i>
                                    </a>
                                    <a href="#" className="text-blue-700 hover:text-blue-900">
                                        <i className="fab fa-linkedin text-xl"></i>
                                    </a>
                                </div>

                                {/* Blog İçeriği */}
                                <div className="prose max-w-none">
                                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                        {blog.content}
                                    </p>
                                </div>

                                {/* Etiketler */}
                                <div className="flex flex-wrap gap-2 mt-8">
                                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                        #{blog.categoryDetails.categoryName}
                                    </span>
                                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                        #blog
                                    </span>
                                </div>
                            </div>
                        </article>

                        {/* Yazar Hakkında */}
                        <div className="bg-white rounded-2xl shadow-sm p-8 mt-8">
                            <h3 className="text-xl font-semibold mb-4">Yazar Hakkında</h3>
                            <div className="flex items-center space-x-4">
                                <img
                                    src={blog.autherDetails.profilePic || 'https://via.placeholder.com/80'}
                                    alt={blog.autherDetails.fullName}
                                    className="w-20 h-20 rounded-full"
                                />
                                <div>
                                    <h4 className="font-semibold text-lg">{blog.autherDetails.fullName}</h4>
                                    <p className="text-gray-600 mt-2">
                                        Profesyonel blog yazarı ve içerik üreticisi.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Yorumlar */}
                        <div className="bg-white rounded-2xl shadow-sm p-8 mt-8">
                            <h3 className="text-xl font-semibold mb-6">Yorumlar</h3>
                            
                            {/* Yorum Formu */}
                            <form onSubmit={handleCommentSubmit} className="mb-8">
                                <textarea
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder="Yorumunuzu yazın..."
                                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                                    rows="4"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-200"
                                >
                                    Yorum Yap
                                </button>
                            </form>

                            {/* Örnek Yorumlar */}
                            <div className="space-y-6">
                                <div className="flex space-x-4">
                                    <img
                                        src="https://via.placeholder.com/40"
                                        alt="Kullanıcı"
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <div className="flex items-center space-x-2">
                                            <h4 className="font-semibold">Ahmet Yılmaz</h4>
                                            <span className="text-sm text-gray-500">2 saat önce</span>
                                        </div>
                                        <p className="text-gray-600 mt-1">
                                            Harika bir yazı olmuş, teşekkürler!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
