import { useState } from 'react';
import { FaEdit, FaPhone, FaBirthdayCake, FaEnvelope } from 'react-icons/fa';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [phone, setPhone] = useState('+1 (555) 123-4567');
  const [birthdate, setBirthdate] = useState('1990-01-01');
  const [avatar, setAvatar] = useState('https://via.placeholder.com/150');

  const handleEdit = () => setIsEditing(!isEditing);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <div className="flex flex-col items-center space-y-6">
        {/* Avatar Section */}
        <div className="relative">
          <img
            src={avatar}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-violet-600"
          />
          <button
            className="absolute bottom-0 right-0 bg-violet-600 text-white p-2 rounded-full"
            onClick={() => alert('Change avatar functionality here')}
          >
            <FaEdit />
          </button>
        </div>

        {/* User Info */}
        <h2 className="text-3xl font-semibold text-violet-700">{name}</h2>
        <p className="text-sm text-gray-600">{email}</p>

        {/* Editable Info */}
        <div className="w-full space-y-4 mt-6">
          <div className="flex items-center space-x-3">
            <FaPhone className="text-violet-600" />
            {isEditing ? (
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none"
                placeholder="Enter your phone number"
              />
            ) : (
              <p className="text-lg text-gray-800">{phone}</p>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <FaBirthdayCake className="text-violet-600" />
            {isEditing ? (
              <input
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none"
              />
            ) : (
              <p className="text-lg text-gray-800">{birthdate}</p>
            )}
          </div>

          {/* Email Section */}
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-violet-600" />
            <p className="text-lg text-gray-800">{email}</p>
          </div>
        </div>

        {/* Edit/Save Button */}
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={handleEdit}
            className="px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
          {isEditing && (
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Save Changes
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;