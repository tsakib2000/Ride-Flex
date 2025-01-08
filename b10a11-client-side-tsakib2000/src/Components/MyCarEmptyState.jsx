
import { FaCarSide } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyCarEmptyState = () => {
    return (
        <div className="min-h-[600px] w-full flex items-center justify-center bg-gray-50 px-4 py-8">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-blue-100">
              <FaCarSide className="w-12 h-12 text-blue-500" aria-hidden="true" />
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            No Cars Added Yet
          </h2>
  
          <p className="text-gray-600 mb-8">
            You haven&apos;t added any cars to your collection. Start by adding your first car and begin your journey with us.
          </p>
  
          <Link to='/add-car'
          
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 "
            aria-label="Add your first car"
          >
            Add Your First Car
          </Link>
  
          <p className="mt-4 text-sm text-gray-500">
            Adding a car takes only a few minutes
          </p>
        </div>
      </div>
    );
};

export default MyCarEmptyState;