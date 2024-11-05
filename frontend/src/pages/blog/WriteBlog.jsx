import React, { useState } from 'react';
import useWriteBlog from '../../hooks/useWriteBlog';

const BlogPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [categoryId, setCategoryId] = useState('');

    const { loading, writeBlog, setIsSuccess } = useWriteBlog()

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Form gönderim işlemleri
        await writeBlog(title, content, categoryId);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[rgb(157, 176, 214)] mt-12">
            <div className="w-full max-w-special bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Create a New Blog Post</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-600 text-xl font-medium mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full py-3 px-4 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-transparent placeholder-gray-400"
                            placeholder="Enter your title"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 text-xl font-medium mb-2" htmlFor="content">
                            Content
                        </label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full py-3 px-4 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-transparent placeholder-gray-400"
                            rows="8"
                            placeholder="Write your content here..."
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 text-xl font-medium mb-2" htmlFor="category">
                            Category ID
                        </label>
                        <input
                            type="text"
                            id="category"
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}
                            className="w-full py-3 px-4 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-transparent placeholder-gray-400"
                            placeholder="Enter category ID"
                            required
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-200"
                        >
                            {loading ? (
                                <span className="loading loading-spinner"></span>
                            ) : (
                                "Save Blog Post"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogPostForm;
