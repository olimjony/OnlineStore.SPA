import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import MessageDialog from '../components/MessageDialog';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { login, isAuthenticated } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [dialogType, setDialogType] = useState('');
  const navigate = useNavigate();

  const closeDialog = () => {
    setIsDialogOpen(false);
    if (dialogType != "error") {
      setTimeout(() => { navigate("/") }, 3000);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && (password.length >= 8)) {
      login(email, password);
      if (isAuthenticated == false) {
        setIsDialogOpen(true);
        setDialogMessage("Something went wrong! Please try again.");
        setDialogType('error');
      }
      else if (isAuthenticated == true) {
        setIsDialogOpen(true);
        setDialogMessage("You logged in successfully!");
        setDialogType('success');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-violet-700 mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="w-full bg-violet-600 text-white p-2 rounded-md flex items-center justify-center">
          Login
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

export default Login;