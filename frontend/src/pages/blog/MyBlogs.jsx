import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetMyBlogs from "../../hooks/useGetMyBlogs";

const MyBlogs = () => {
    const navigate = useNavigate();

    const { loading, blogs } = useGetMyBlogs();

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h2 className="text-3xl text-white font-bold mb-6">Tüm Bloglar</h2>

            {/* Yükleme durumu */}
            {loading ? (
                <div className="flex justify-center items-center">
                    <p className="text-white ml-4">Yükleniyor...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <div
                            key={blog._id}
                            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
                        >
                            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                            <p className="text-gray-600 mb-4">
                                {blog.content.slice(0, 100)}...
                            </p>
                            <div className="flex justify-between">
                                <button
                                    onClick={() => handleEdit(blog._id)}
                                    className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 transition"
                                >
                                    Düzenle
                                </button>
                                <button
                                    onClick={() => handleDelete(blog._id)}
                                    className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition"
                                >
                                    Sil
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBlogs;
