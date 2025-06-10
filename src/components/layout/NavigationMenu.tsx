import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils'; // For conditional class names
import { Home, Settings, BarChart2 } from 'lucide-react'; // Example icons

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart2 },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

const NavigationMenu: React.FC = () => {
  console.log("Rendering NavigationMenu");
  const location = useLocation();

  return (
    <nav className="flex flex-col space-y-1 p-2">
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
            location.pathname === item.href
              ? "bg-green-100 text-green-700"
              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          )}
        >
          <item.icon className="h-5 w-5" />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default NavigationMenu;