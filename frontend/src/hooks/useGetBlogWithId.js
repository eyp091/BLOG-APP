import { useEffect, useState } from "react"
import toast from "react-hot-toast";

const useGetBlogWithId = (selectedBlogId) => {
    const [loading, setLoading] = useState(false);
    const [blog, setBlog] = useState([]);    

    useEffect(() => {
        const getSelectedBlog = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/blogs/${selectedBlogId}`);
                const data = await res.json();
    
                if (data.error) {
                    throw new Error(data.error);
                }

                setBlog(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }
        getSelectedBlog();
    }, [])
    
    return {loading, blog};
}

export default useGetBlogWithId;