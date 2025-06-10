import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation
import { Rocket } from 'lucide-react'; // Example icon

interface ApplicationLogoProps {
  className?: string;
  size?: number; // Size of the icon
}

const ApplicationLogo: React.FC<ApplicationLogoProps> = ({ className, size = 32 }) => {
  console.log("Rendering ApplicationLogo");
  return (
    <Link to="/" className={`flex items-center space-x-2 text-xl font-semibold ${className || 'text-gray-800 hover:text-green-600'}`}>
      <Rocket size={size} className="text-green-500" />
      <span>MyApp</span> {/* Replace with your app name or actual logo image */}
    </Link>
  );
};

export default ApplicationLogo;