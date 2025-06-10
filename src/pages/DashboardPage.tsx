import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';
import NavigationMenu from '@/components/layout/NavigationMenu'; // Used within Sidebar
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button'; // For mobile sidebar toggle in main content
import { Menu as MenuIcon } from 'lucide-react'; // For mobile toggle in Header
import { cn } from '@/lib/utils'; // For conditional class names

const DashboardPage = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };
  
  console.log('DashboardPage loaded');

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      {/* Custom Sidebar component */}
      <Sidebar className={cn("sm:flex", isMobileSidebarOpen ? "flex fixed z-40 h-full" : "hidden")} />
      
      {/* Mobile Sidebar Backdrop */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 sm:hidden" 
          onClick={toggleMobileSidebar}
        />
      )}

      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-60"> {/* Adjust pl based on sidebar width */}
        {/* Custom Header component, pass toggle function */}
        <Header onToggleSidebar={toggleMobileSidebar} />
        
        <main className="flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Welcome to Your Dashboard</CardTitle>
                <CardDescription>
                  This is a placeholder for your main dashboard content. You can manage your application from here.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Explore the navigation menu to discover various features. 
                  This area can be customized with charts, summaries, quick actions, and more.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Placeholder data analytics chart" 
                  className="mt-4 rounded-lg shadow-md"
                />
              </CardContent>
            </Card>

            {/* Example of another card */}
            <Card>
                <CardHeader>
                    <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="text-sm font-medium text-muted-foreground">Active Users</h3>
                        <p className="text-2xl font-bold">1,234</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="text-sm font-medium text-muted-foreground">Sales Today</h3>
                        <p className="text-2xl font-bold">$5,678</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="text-sm font-medium text-muted-foreground">New Signups</h3>
                        <p className="text-2xl font-bold">89</p>
                    </div>
                </CardContent>
            </Card>
          </div>
        </main>
        
        {/* Custom Footer component */}
        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;