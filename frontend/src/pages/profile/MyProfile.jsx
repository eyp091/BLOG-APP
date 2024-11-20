import React from "react";
import useGetMyProfile from "../../hooks/useGetMyProfile";
import usePutMyProfile from "../../hooks/usePutMyProfile";

const MyProfile = () => {
    const { loading, myProfile, setMyProfile } = useGetMyProfile();
    const { updateLoading, updatedProfile, updateProfile } = usePutMyProfile(); // `updateProfile` metodunu destructure edin.

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMyProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const handleUpdateProfile = () => {
        // Kullanıcıdan alınan verileri updateProfile'a gönderiyoruz.
        const { fullName, username, password, gender } = myProfile;
        updateProfile({ fullName, username, password, gender });
    };

    return (
        <div className="min-h-screen bg-[rgb(157, 176, 214)] flex items-center justify-center">
            {loading ? (
                <div className="text-center text-gray-700">
                    <p>Loading profile...</p>
                </div>
            ) : (
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    {/* Profile Picture */}
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500">
                            <img
                                src={myProfile.profilePic || "https://via.placeholder.com/150"}
                                alt="Profile Pic"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Full Name */}
                    <div className="mb-4">
                        <label className="block text-gray-600 font-semibold mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={myProfile.fullName || ""}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2 bg-gray-50 text-gray-700"
                        />
                    </div>

                    {/* Username */}
                    <div className="mb-4">
                        <label className="block text-gray-600 font-semibold mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={myProfile.username || ""}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2 bg-gray-50 text-gray-700"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="block text-gray-600 font-semibold mb-1">
                            Password
                        </label>
                        <input
                            type="text"
                            name="password"
                            value={myProfile.password || ""}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2 bg-gray-50 text-gray-700"
                        />
                    </div>

                    {/* Gender */}
                    <div className="mb-4">
                        <label className="block text-gray-600 font-semibold mb-1">Gender</label>
                        <select
                            name="gender"
                            value={myProfile.gender || "Other"}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2 bg-gray-50 text-gray-700"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    {/* Edit Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={handleUpdateProfile} // Burada handleUpdateProfile'ı tetikleyin.
                            className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition ${
                                updateLoading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            disabled={updateLoading} // Yükleme sırasında butonu devre dışı bırakıyoruz.
                        >
                            {updateLoading ? "Updating..." : "Edit Profile"}
                        </button>
                    </div>

                    {/* Güncelleme sonrası bilgi */}
                    {updatedProfile && (
                        <div className="mt-4 text-green-500 text-center">
                            Profile updated successfully!
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MyProfile;
