import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200">
      <div className="container flex items-center justify-between h-14 max-w-6xl px-4 mx-auto">
        {/* Logo and Search */}
        <div className="flex items-center flex-1 gap-4">
          <LinkedInLogo />
          <div className="relative max-w-sm">
            <Input
              type="search"
              placeholder="Search"
              className="pl-8 bg-blue-50/50 focus-visible:ring-blue-500"
            />
            <SearchIcon className="absolute w-4 h-4 text-gray-500 left-2.5 top-2.5" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-1 md:space-x-4">
          <NavItem icon={<HomeIcon />} label="Home" active />
          <NavItem icon={<NetworkIcon />} label="Network" notification={1} />
          <NavItem icon={<JobsIcon />} label="Jobs" />
          <NavItem icon={<MessagingIcon />} label="Messaging" />
          <NavItem icon={<NotificationsIcon />} label="Notifications" notification={3} />
          <NavItem
            icon={
              <Avatar className="w-6 h-6 border">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
            }
            label="Me"
            dropdown
          />
        </nav>
      </div>
    </header>
  );
}

function NavItem({
  icon,
  label,
  notification,
  active = false,
  dropdown = false
}: {
  icon: React.ReactNode;
  label: string;
  notification?: number;
  active?: boolean;
  dropdown?: boolean;
}) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className={`flex flex-col items-center justify-center px-1 py-1 text-xs h-auto ${
        active ? "text-black" : "text-gray-500"
      }`}
    >
      <div className="relative">
        {icon}
        {notification && (
          <span className="absolute top-0 right-0 w-4 h-4 text-xs font-bold text-white translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
            {notification}
          </span>
        )}
      </div>
      <span className="mt-0.5 hidden md:inline-block">
        {label} {dropdown && <span className="text-[8px]">▼</span>}
      </span>
    </Button>
  );
}

function LinkedInLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#0A66C2"
      className="w-8 h-8"
    >
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
    </svg>
  );
}

// Icon components
function SearchIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M21.6 8.2l-9-7c-.4-.3-.9-.3-1.2 0l-9 7c-.3.2-.4.5-.4.8v11c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V9c0-.3-.1-.6-.4-.8zM12 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5-3h3a3 3 0 013 3v6h-9v-6a3 3 0 013-3zm-9-8a4 4 0 108 0 4 4 0 00-8 0zm9 0a4 4 0 108 0 4 4 0 00-8 0z"></path>
    </svg>
  );
}

function JobsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M21 7h-4V6a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H3a1 1 0 00-1 1v11a2 2 0 002 2h16a2 2 0 002-2V8a1 1 0 00-1-1zM9 6a1 1 0 011-1h4a1 1 0 011 1v1H9V6zm10 11a1 1 0 01-1 1H6V9h2v1a1 1 0 002 0V9h4v1a1 1 0 002 0V9h2v8z"></path>
    </svg>
  );
}

function MessagingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M22 8v10a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1h18a1 1 0 011 1v2zm-9.3 4.8l-8.5-5.3A1 1 0 013 6.8L12 12l9-5.2a1 1 0 01.8 1.3l-8.5 5.3a1 1 0 01-1.1-.1z"></path>
    </svg>
  );
}

function NotificationsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M18.9 13.5l.7-.7A1 1 0 0020 12V8a8 8 0 00-16 0v4a1 1 0 00.4.8l.7.7-1.6 1.6a1 1 0 00-.3.7V18a1 1 0 001 1h5.4a2 2 0 003.6 0H19a1 1 0 001-1v-2.1a1 1 0 00-.3-.7l-.8-.7z"></path>
    </svg>
  );
}
