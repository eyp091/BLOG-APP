import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetAllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getBlogs = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/blogs/');
                const data = await res.json();
                
                if (data.error) throw new Error(data.error);

                setBlogs(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }

        getBlogs();
    }, [])
    return { loading, blogs };
}

export default useGetAllBlogs;