import { useEffect, useState } from "react";
import toast from "react-hot-toast";


const useDeleteSelectedBlog = () => {
    const [deleteLoading, setLoading] = useState(false);
    const [deletedBlog, setDeletedBlog] = useState([]);

    const deleteBlog = async (blogId) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/blogs/deleteblog/${blogId}`, {
                method: 'DELETE',
                headers: {'Content-Type' : 'application/json'}
            });

            const data = await res.json();

            if (data.error) {
                throw new Error(data.error);
            }

            setDeletedBlog(data);
            toast.success("Blog deleted successfully!");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return {deleteLoading, deletedBlog, deleteBlog};
}

export default useDeleteSelectedBlog;