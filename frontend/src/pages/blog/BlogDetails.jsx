import React from 'react';
import { useParams } from 'react-router-dom';
import useGetBlogWithId from '../../hooks/useGetBlogWithId';
import { extarctTime } from '../../utils/extractTime';

const BlogDetails = () => {
    const { id } = useParams();

    const { loading, blog } = useGetBlogWithId(id);
    console.log("blog detail: ", blog);

    const formatedDate = extarctTime(blog.createdAt);

    if (loading || !blog || !blog.autherDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-special mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {blog.title}
            </h1>
            <div className="flex items-center mb-6">
                <img
                    src={blog.autherDetails.profilePic}
                    alt="Yazar"
                    className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                    <p className="text-gray-700 font-medium" style={{ textAlign: 'left' }}>Yazar: {blog.autherDetails.fullName}</p>
                    <p className="text-gray-700 font-medium" style={{ textAlign: 'left' }}>Kategory: {blog.categoryDetails.categoryName}</p>
                    <p className="text-gray-500 text-sm" style={{ textAlign: 'left' }}>{formatedDate}</p>
                </div>
            </div>
            <img
                src="https://via.placeholder.com/800x400"
                alt="Blog Görseli"
                className="h-96 object-cover rounded-lg mb-6"
                style={{ width: '50%', display: 'block', margin: '0 auto' }}
            />
            <p className="text-gray-700 leading-relaxed mb-6">
                {blog.title}
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                içerik
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
                {blog.content}
            </p>
            {/* <div className="flex justify-between items-center mt-8">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Geri Dön
                </button>
                <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                    Yorum Yap
                </button>
            </div> */}
        </div>
    );
};

export default BlogDetails;
