import React from 'react';
import ApplicationLogo from '@/components/ApplicationLogo'; // Assuming ApplicationLogo is in components
import { Button } from '@/components/ui/button';
import { UserCircle, Bell, Menu as MenuIcon } from 'lucide-react'; // Example icons

interface HeaderProps {
  onToggleSidebar?: () => void; // Optional: for mobile sidebar toggle
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  console.log("Rendering Header");
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 py-4">
      {onToggleSidebar && (
         <Button size="icon" variant="outline" className="sm:hidden" onClick={onToggleSidebar}>
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
        </Button>
      )}
      <div className="flex items-center mr-auto">
         {/* ApplicationLogo can be placed here if not part of a global layout already */}
         {/* <ApplicationLogo className="hidden sm:block" /> */}
         <h1 className="text-lg font-semibold sm:text-xl ml-2 sm:ml-0">Dashboard</h1>
      </div>

      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon" aria-label="User Profile">
          <UserCircle className="h-6 w-6" />
          <span className="sr-only">User Profile</span>
        </Button>
        {/* Add more header items like search bar, theme toggle etc. */}
      </div>
    </header>
  );
};

export default Header;