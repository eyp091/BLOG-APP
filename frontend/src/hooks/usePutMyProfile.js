import { useState } from "react";
import toast from "react-hot-toast";

const usePutMyProfile = () => {
    const [updateLoading, setUpdateLoading] = useState(false);
    const [updatedProfile, setUpdatedProfile] = useState(null);

    const user = JSON.parse(localStorage.getItem("blog-user"));
    const userId = user?._id;

    // Profil güncelleme fonksiyonu
    const updateProfile = async ({ fullName, username, password, gender }) => {
        setUpdateLoading(true);
        try {
            const res = await fetch(`/api/users/update-user/${userId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, gender }),
            });
            const data = await res.json();

            if (data.error) {
                throw new Error(data.error);
            }

            setUpdatedProfile(data);
            toast.success("Profile updated successfully!");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setUpdateLoading(false);
        }
    };

    return { updateLoading, updatedProfile, updateProfile };
};

export default usePutMyProfile;
