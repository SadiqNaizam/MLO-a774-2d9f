import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log("Rendering Footer");
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-background py-6 px-4 md:px-8 text-center text-sm text-muted-foreground">
      <div className="container mx-auto">
        <p>&copy; {currentYear} MyApp. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-primary">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;