import { useEffect, useState } from "react"
import toast from "react-hot-toast";


const useGetMyProfile = () => {

    const [loading, setLoading] = useState(false);
    const [myProfile, setMyProfile] = useState([]);
    const user = JSON.parse(localStorage.getItem('blog-user'));
    const userId = user?._id;    

    useEffect(() => {
        const getMyProfile = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/users/my-profile/${userId}`);
                const data = await res.json();

                if (data.error) {
                    throw new Error(data.error)
                }

                setMyProfile(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }
        getMyProfile();
    }, [])

    return { loading, myProfile, setMyProfile };
}

export default useGetMyProfile;