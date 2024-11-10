import { useEffect, useState } from "react";
import toast from "react-hot-toast";


const useGetMyBlogs = (userId) => {

    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('blog-user'));
        const userId = user?._id;

        const getMyBlogs = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/blogs/getMyBlogs',{
                    method: "GET",
                    headers: {"Content-Type" : "application/json", "Authorization" : `Bearer ${userId}`} //kullanıcı id'sini başlıkla gönderir.
                });
                const data = await res.json();

                if (data.message) {
                    toast.error(data.message);
                }

                setBlogs(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }
        getMyBlogs();
    }, [])

    return { loading, blogs };
}

export default useGetMyBlogs;