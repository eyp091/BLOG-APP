import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: "",
  });



  // Form değişikliklerini yakala
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };




  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl text-white font-semibold mb-4">Edit Blog</h2>
      <div className="mb-4">
        <label className="block text-white mb-2">Başlık</label>
        <input
          type="text"
          name="title"
        //   value={blog.title}
        //   onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2">İçerik</label>
        <textarea
          name="content"
        //   value={blog.content}
        //   onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="6"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2">Yazar</label>
        <input
          type="text"
          name="author"
        //   value={blog.author}
        //   onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex space-x-4">
        <button
        //   onClick={handleUpdate}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Güncelle
        </button>
        <button
        //   onClick={handleDelete}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
        >
          Sil
        </button>
      </div>
    </div>
  );
};

export default EditBlog;
