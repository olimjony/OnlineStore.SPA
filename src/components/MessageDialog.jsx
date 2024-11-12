function MessageDialog({ isOpen, message, type, onClose }) {
  if (!isOpen) return null;

  const iconColor = type === 'success' ? 'text-green-500' : 'text-gray-500';
  const borderColor = type === 'success' ? 'border-green-500' : 'border-gray-300';
  const title = type === 'success' ? 'Success' : 'Error';

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white rounded-lg shadow-md max-w-md w-full p-6 flex flex-col items-center space-y-4">
        {/* Icon */}
        <div
          className={`w-12 h-12 flex justify-center items-center rounded-full border-2 ${borderColor} mb-4`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-8 h-8 ${iconColor}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {type === 'success' ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            )}
          </svg>
        </div>

        {/* Dialog Message */}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 text-center">{message}</p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 border border-gray-300 text-gray-800 rounded-md hover:bg-gray-100 transition duration-200 ease-in-out"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default MessageDialog;