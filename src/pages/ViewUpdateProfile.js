import React, { useState, useEffect , useRef } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { FaCamera } from 'react-icons/fa'; // Import your preferred icon
import { saveAvatar, getAvatar, deleteAvatar } from './indexedDB'; 
const ViewUpdateProfile = () => {
  // State variables for each form field
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [profile, setProfile] = useState(null);
  const [avatar, setAvatar] = useState('');
  const [hasPermission, setHasPermission] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const userId = Cookies.get('HBI-T');
    
    if (userId) {
      setHasPermission(true);
      getAvatar(userId).then((savedAvatar) => {
        if (savedAvatar) {
          setAvatar(savedAvatar);
        }
      }).catch((error) => {
        console.error('Error fetching avatar:', error);
      });
    } else {
      setHasPermission(false);
      deleteAvatar('userAvatar').catch((error) => {
        console.error('Error deleting avatar:', error);
      });
      setAvatar('');
    }
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        const userId = Cookies.get('HBI-T');
        if (userId) {
          saveAvatar(userId, imageUrl).then(() => {
            setAvatar(imageUrl);
          }).catch((error) => {
            console.error('Error saving image to IndexedDB:', error);
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIconClick = () => {
    if (hasPermission) {
      fileInputRef.current.click();
    } else {
      alert('You do not have permission to upload a photo.');
    }
  };
  // Fetch profile data on component mount
  useEffect(() => {
    const fetchData = async () => {
      const profileId = Cookies.get('HBI-T');
      if (profileId) {
        try {
          const response = await axios.get(`https://healthbridge02.onrender.com/createProfile/${profileId}`);
          setProfile(response.data);
          setFullName(response.data.fullName || "");
          setEmail(response.data.email || "");
          setPhone(response.data.phone || "");
          setWebsite(response.data.website || "");
          setStreet(response.data.street || "");
          setCity(response.data.city || "");
          setState(response.data.state || "");
          setZip(response.data.zipCode || "");
          setCountry(response.data.country || "");
          setLanguage(response.data.language || "");
          setAge(response.data.age || "");
          setGender(response.data.gender || "");
           
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      } else {
        console.log("Profile ID not found in cookie.");
      }
    };

    fetchData();
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "fullName":
        setFullName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "website":
        setWebsite(value);
        break;
      case "street":
        setStreet(value);
        break;
      case "city":
        setCity(value);
        break;
      case "state":
        setState(value);
        break;
      case "zip":
        setZip(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "language":
        setLanguage(value);
        break;
      case "age":
        setAge(value);
        break;
      case "gender":
        setGender(value);
        break;
      default:
        break;
    }
  };

  // Handle profile submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const profileData = {
        fullName,
        email,
        phone,
        website,
        street,
        city,
        state,
        zipCode: zip,
        country,
        language,
        age,
        gender,
      };

      // Save the profile
      const response = await axios.post('https://healthbridge02.onrender.com/createProfile', profileData);
      const userId = response.data.user_id;
      Cookies.set('HBI-T', userId);

      // Fetch the updated profile immediately after saving
      const updatedProfile = await axios.get(`https://healthbridge02.onrender.com/createProfile/${userId}`);
      setProfile(updatedProfile.data);
      alert('Profile saved successfully');
    } catch (error) {
      console.error('Error:', error.message || error);
    }
  };

  // Handle profile update
  const handleUpdate = async (e) => {
    e.preventDefault();
    const profileData = {
      fullName,
      email,
      phone,
      website,
      street,
      city,
      state,
      zipCode: zip,
      country,
      language,
      age,
      gender,
    };

    try {
      const userId = Cookies.get('HBI-T');
      if (userId) {
        // Update the profile
        await axios.put(`https://healthbridge02.onrender.com/api/update-profile/${userId}`, profileData);
        alert('Profile updated successfully');

        // Fetch the updated profile immediately after updating
        const updatedProfile = await axios.get(`https://healthbridge02.onrender.com/createProfile/${userId}`);
        setProfile(updatedProfile.data);
        setFullName(updatedProfile.data.fullName || "");
        setEmail(updatedProfile.data.email || "");
        setPhone(updatedProfile.data.phone || "");
        setWebsite(updatedProfile.data.website || "");
        setStreet(updatedProfile.data.street || "");
        setCity(updatedProfile.data.city || "");
        setState(updatedProfile.data.state || "");
        setZip(updatedProfile.data.zipCode || "");
        setCountry(updatedProfile.data.country || "");
        setLanguage(updatedProfile.data.language || "");
        setAge(updatedProfile.data.age || "");
        setGender(updatedProfile.data.gender || "");
      } else {
        alert('User ID not found');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    }
  };

  return (
    <div className="container mx-auto p-4 bg-sky-50">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full xl:w-1/4 lg:w-1/3 md:w-1/2 p-4">
          <div className="card bg-white shadow-lg rounded-lg">
            <div className="card-body p-4">
              <div className="account-settings">
                <div className="user-profile text-center">
                <div className="user-profile text-center">
      <div className="user-avatar mb-4 relative">
        <img
          src={avatar || "https://bootdey.com/img/Content/avatar/avatar7.png"}
          alt="Profile"
          className="w-36 h-36 rounded-full mx-auto bg-center bg-cover relative"
        />
        <div
          onClick={handleIconClick}
          className="absolute bottom-0 right-0 bg-gray-700 text-white p-2 rounded-full cursor-pointer"
          title={hasPermission ? 'Change profile picture' : 'You do not have permission'}
        >
          <FaCamera />
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: 'none' }} // Hide the actual file input
        />
      </div>
    </div>
                  {profile && (
                    <div className="user-profile">
                      <h5 className="user-name text-xl font-semibold text-sky-800">
                        {profile.fullName}
                      </h5>
                      <h6 className="user-email text-md text-sky-600">
                        {profile.email}
                      </h6>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-3/4 lg:w-2/3 md:w-1/2 p-4">
          <div className="card bg-white shadow-lg rounded-lg">
            <div className="card-body p-4">
              <div className="space-y-6">
                <div>
                  <h6 className="text-lg font-semibold text-sky-800">
                    Personal Details
                  </h6>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label htmlFor="fullName" className="block text-sky-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control border border-sky-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-sky-500"
                        id="fullName"
                        placeholder="Enter full name"
                        value={fullName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="block text-sky-700">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control border border-sky-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-sky-500"
                        id="email"
                        placeholder="Enter email ID"
                        value={email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="block text-sky-700">
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control border border-sky-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-sky-500"
                        id="phone"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={handleChange}
                      />
                    </div>
                    {/* <div className="form-group">
                      <label htmlFor="website" className="block text-sky-700">
                        Website
                      </label>
                      <input
                        type="text"
                        className="form-control border border-sky-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-sky-500"
                        id="website"
                        placeholder="Enter website"
                        value={website}
                        onChange={handleChange}
                      />
                    </div> */}
                    <div className="form-group">
                      <label htmlFor="language" className="block text-sky-700">
                        Language
                      </label>
                      <input
                        type="text"
                        className="form-control border border-sky-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-sky-500"
                        id="language"
                        placeholder="Preferred language"
                        value={language}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="age" className="block text-sky-700">
                        Age
                      </label>
                      <input
                        type="number"
                        className="form-control border border-sky-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-sky-500"
                        id="age"
                        placeholder="Enter age"
                        value={age}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="gender" className="block text-sky-700">
                        Gender
                      </label>
                      <select
                        id="gender"
                        className="form-control border border-sky-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-sky-500"
                        value={gender}
                        onChange={handleChange}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                        <option value="Prefer not to say">
                          Prefer not to say
                        </option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold text-sky-800 mt-6">
                      Address
                    </h6>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label htmlFor="street" className="block text-sky-700">
                        Street
                      </label>
                      <input
                        type="text"
                        className="form-control border border-sky-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-sky-500"
                        id="street"
                        placeholder="Enter Street"
                        value={street}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="city" className="block text-sky-700">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control border border-sky-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-sky-500"
                        id="city"
                        placeholder="Enter City"
                        value={city}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="state" className="block text-sky-700">
                        State
                      </label>
                      <input
                        type="text"
                        className="form-control border border-sky-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-sky-500"
                        id="state"
                        placeholder="Enter State"
                        value={state}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="zip" className="block text-sky-700">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        className="form-control border border-sky-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-sky-500"
                        id="zip"
                        placeholder="Zip Code"
                        value={zip}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="country" className="block text-sky-700">
                        Country
                      </label>
                      <input
                        type="text"
                        className="form-control border border-sky-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-sky-500"
                        id="country"
                        placeholder="Country"
                        value={country}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="text-right mt-6">
                    <button
                      type="button"
                      id="cancel"
                      className="btn bg-gray-300 hover:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                      onClick={() => console.log("Cancel clicked")}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      id="submit"
                      className="btn bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded-lg ml-4 transition duration-300"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      id="update"
                      className="btn bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded-lg ml-4 transition duration-300"
                      onClick={handleUpdate}
                    >
                      Edit/Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUpdateProfile;
