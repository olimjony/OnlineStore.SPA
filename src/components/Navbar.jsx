import { FaUser, FaSignInAlt, FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { userName, setUserName } = useState("Anonyme");

  return (
    <nav className="bg-violet-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg flex items-center">
          <FaShoppingCart className="mr-2" /> MyApp
        </Link>
        <div>
          {isAuthenticated ? (
            <div className='flex items-center'>
              <Link to="/profile" className="text-white mx-2 flex items-center flex-col">
                <FaUserCircle className="mr-1" size={"40px"}/>
                <span className='text-white'>{userName}</span>
              </Link>
            </div>
          ) : (
            <div className='flex items-center'>
              <Link to="/login" className="text-white mx-2 flex items-center">
                <FaSignInAlt className="mr-1" /> Login
              </Link>
              <Link to="/register" className="text-white mx-2 flex items-center">
                <FaUser className="mr-1" /> Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;