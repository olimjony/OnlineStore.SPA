import { useState} from 'react';
import { FaEnvelope, FaLock, FaUser, FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../services/axiosInstance';
import MessageDialog from '../components/MessageDialog';

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');
    const [dialogType, setDialogType] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password != confirmPassword){
            setError("Passwords doesn't match!");
            return;
        }

        setLoading(true);

        const userData = {
            firstName,
            lastName,
            password,
            email
        }
    
        setDialogMessage('');
        setDialogType('');

        setError(false);
        
        try {
          const response = await axiosInstance.post('/UserRegister/register-user', userData);
          if (response.status === 200) {
            setDialogMessage("You were registered successfully!");
            setDialogType('success');
          } else {
            setDialogMessage("Something went wrong! Please try again.");
            setDialogType('error');
          }
    
        } catch (error) {
          console.log(error)
          setDialogMessage('There was an error with the registration process. Please try again.');
          setDialogType('error');
        }
    
        setIsDialogOpen(true);
        setLoading(false);
    }

    const closeDialog = () => {
        setIsDialogOpen(false); 
        if(dialogType != "error"){
            setTimeout(() => { navigate("/login/") }, 3000 );
        };
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-violet-700 mb-4 flex items-center">
                <FaUserPlus className="mr-2" /> Register
            </h2>
            {error && <div className="text-red-600 mb-4">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4 flex items-center border-b border-gray-300">
                    <FaUser className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        id="firstname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full p-2 focus:outline-none"
                        placeholder="Enter your first name"
                    />
                </div>
                <div className="mb-4 flex items-center border-b border-gray-300">
                    <FaUser className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        id="surname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full p-2 focus:outline-none"
                        placeholder="Enter your surname (not necessary)"
                    />
                </div>
                <div className="mb-4 flex items-center border-b border-gray-300">
                    <FaEnvelope className="text-gray-500 mr-2" />
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 focus:outline-none"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4 flex items-center border-b border-gray-300">
                    <FaLock className="text-gray-500 mr-2" />
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 focus:outline-none"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="mb-4 flex items-center border-b border-gray-300">
                    <FaLock className="text-gray-500 mr-2" />
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-2 focus:outline-none"
                        placeholder="Repeat Password"
                    />
                </div>
                <button
                    type="submit"
                    className={`w-full p-2 bg-violet-600 text-white rounded mt-4 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                >
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>
            <MessageDialog
                isOpen={isDialogOpen}
                message={dialogMessage}
                type={dialogType}
                onClose={closeDialog}
            />
        </div>
    );
}

export default Register;