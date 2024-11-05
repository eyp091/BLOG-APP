import { useState } from "react";
import toast from "react-hot-toast";


const useWriteBlog = () => {
    const [loading, setLoding] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const writeBlog = async (title, content, categoryId) => {
        setLoding(true);
        setIsSuccess(false);
        try {
            const res = await fetch('/api/blogs/setBlog', {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({title, content, categoryId})
            });

            const data = await res.json();

            if (data.error) {
                throw new Error(data.error);
            }

            setIsSuccess(true);
            toast.success('Blog başarıyla kaydedildi');
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoding(false);
        }
    }
    return {loading, setIsSuccess, writeBlog};
}

export default useWriteBlog;