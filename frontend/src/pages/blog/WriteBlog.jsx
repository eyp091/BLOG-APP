import React, { useState } from 'react';
import useWriteBlog from '../../hooks/useWriteBlog';
import { FiImage, FiEdit3, FiList } from 'react-icons/fi';

const BlogPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const { loading, writeBlog, setIsSuccess } = useWriteBlog();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await writeBlog(title, content, categoryId, image);
    };

    const categories = [
        { id: '1', name: 'Teknoloji' },
        { id: '2', name: 'Yaşam' },
        { id: '3', name: 'Spor' },
        { id: '4', name: 'Sanat' },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
            <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                    <FiEdit3 className="mr-3" />
                    Yeni Blog Yazısı Oluştur
                </h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-2">
                        <label className="flex items-center text-gray-700 text-lg font-medium mb-2" htmlFor="title">
                            <FiList className="mr-2" />
                            Başlık
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full py-3 px-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-gray-100"
                            placeholder="Etkileyici bir başlık yazın..."
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center text-gray-700 text-lg font-medium mb-2" htmlFor="category">
                            <FiList className="mr-2" />
                            Kategori
                        </label>
                        <select
                            id="category"
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}
                            className="w-full py-3 px-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-gray-100"
                            required
                        >
                            <option value="">Kategori Seçin</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center text-gray-700 text-lg font-medium mb-2" htmlFor="content">
                            <FiEdit3 className="mr-2" />
                            İçerik
                        </label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full py-3 px-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-gray-100 min-h-[200px]"
                            placeholder="Blog içeriğinizi yazın..."
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center text-gray-700 text-lg font-medium mb-2">
                            <FiImage className="mr-2" />
                            Kapak Görseli
                        </label>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center justify-center w-full h-32 px-4 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                <div className="flex flex-col items-center">
                                    <FiImage className="w-8 h-8 text-gray-400" />
                                    <span className="mt-2 text-gray-500">Görsel Seç</span>
                                </div>
                                <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
                            </label>
                            {previewImage && (
                                <div className="relative w-32 h-32">
                                    <img
                                        src={previewImage}
                                        alt="Preview"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                                    Yükleniyor...
                                </div>
                            ) : (
                                "Blog Yazısını Yayınla"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogPostForm;
