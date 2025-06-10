import React from 'react';
import ApplicationLogo from '@/components/ApplicationLogo';
import NavigationMenu from './NavigationMenu'; // Assuming NavigationMenu is in the same directory
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  console.log("Rendering Sidebar");
  return (
    <aside className={`fixed inset-y-0 left-0 z-10 hidden w-60 flex-col border-r bg-background sm:flex ${className}`}>
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <ApplicationLogo />
      </div>
      <ScrollArea className="flex-1">
        <div className="py-4">
            <NavigationMenu />
        </div>
        {/* You can add more sections to the sidebar */}
        {/* Example:
        <Separator className="my-4" />
        <div className="px-4 py-2">
            <h3 className="mb-2 px-2 text-xs font-semibold uppercase text-muted-foreground">
                Projects
            </h3>
            <nav className="flex flex-col space-y-1">
                <p className="text-sm p-2 text-muted-foreground">Project links here...</p>
            </nav>
        </div>
        */}
      </ScrollArea>
      <div className="mt-auto p-4 border-t">
        <p className="text-xs text-muted-foreground">Sidebar Footer (Optional)</p>
      </div>
    </aside>
  );
};

export default Sidebar;