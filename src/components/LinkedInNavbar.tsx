export function LinkedInNavbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 flex items-center px-4 py-1 z-50 sticky top-0 min-h-[56px]">
      {/* Left: Logo and Search */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <div className="bg-[#0A66C2] rounded flex items-center justify-center w-9 h-9">
          <svg viewBox="0 0 32 32" width="28" height="28"><g><rect fill="#0A66C2" x="0" y="0" width="32" height="32" rx="6"></rect><path d="M9 12h3v10H9zm1.5-2.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM14 12h2.8v1.2h.04c.39-.74 1.34-1.52 2.76-1.52C22.42 11.68 23 13.1 23 15.08V22h-3v-6c0-1.43-.02-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V22h-3V12z" fill="#fff"></path></g></svg>
        </div>
        <div className="ml-2 bg-[#edf3f8] rounded flex items-center px-2 w-60 h-9 border border-gray-200">
          <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
          <input className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder-gray-500" placeholder="Search" />
        </div>
      </div>
      {/* Center: Nav Icons */}
      <div className="flex-1 flex justify-center gap-10 ml-8">
        <NavIcon icon={<HomeIcon />} label="Home" />
        <NavIcon icon={<NetworkIcon />} label="Network" badge count={2} />
        <NavIcon icon={<JobsIcon />} label="Jobs" />
        <NavIcon icon={<MessageIcon />} label="Messaging" />
        <NavIcon icon={<BellIcon />} label="Notifications" badge count={24} />
        <NavIcon icon={<UserIcon />} label="Me" avatarUrl="https://randomuser.me/api/portraits/men/32.jpg" />
      </div>
      {/* Right: For Business, Premium */}
      <div className="flex items-center gap-8 ml-8">
        <div className="flex flex-col items-center text-xs text-gray-700 cursor-pointer">
          <GridIcon />
          <span className="mt-0.5">For Business</span>
        </div>
        <div className="flex flex-col items-center text-xs cursor-pointer">
          <div className="w-6 h-6 flex items-center justify-center"><PremiumIcon /></div>
          <span className="mt-0.5 text-[#b48608] font-semibold">Try Premium for ₹0</span>
        </div>
      </div>
    </nav>
  );
}

function NavIcon({ icon, label, badge, count, avatarUrl }: { icon?: React.ReactNode; label: string; badge?: boolean; count?: number; avatarUrl?: string }) {
  return (
    <div className="flex flex-col items-center justify-center relative cursor-pointer w-16">
      <div className="relative flex items-center justify-center">
        {avatarUrl ? (
          <img src={avatarUrl} alt={label} className="h-8 w-8 rounded-full object-cover border border-gray-300" />
        ) : (
          icon
        )}
        {badge && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5 min-w-[18px] text-center font-bold border-2 border-white">{count || ''}</span>
        )}
      </div>
      <span className="text-[12px] text-gray-800 mt-1 leading-tight font-normal">{label}</span>
    </div>
  );
}

// SVG Icon Components
function HomeIcon() {
  return <svg className="w-6 h-6 text-gray-700" fill="none" stroke="#191919" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9.5 12 4l9 5.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5Z" /><path d="M9 22V12h6v10" /></svg>;
}
function NetworkIcon() {
  return <svg className="w-6 h-6 text-gray-700" fill="none" stroke="#191919" strokeWidth="2" viewBox="0 0 24 24"><circle cx="7" cy="8" r="4" /><circle cx="17" cy="8" r="4" /><path d="M7 12v6m10-6v6M7 18h10" /></svg>;
}
function JobsIcon() {
  return <svg className="w-6 h-6 text-gray-700" fill="none" stroke="#191919" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>;
}
function MessageIcon() {
  return <svg className="w-6 h-6 text-gray-700" fill="none" stroke="#191919" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="m7 10 5 3 5-3" /></svg>;
}
function BellIcon() {
  return <svg className="w-6 h-6 text-gray-700" fill="none" stroke="#191919" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>;
}
function UserIcon() {
  return <svg className="w-6 h-6 text-gray-700" fill="none" stroke="#191919" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" /><path d="M5.5 21a8.38 8.38 0 0 1 13 0" /></svg>;
}
function GridIcon() {
  return <svg className="w-6 h-6 text-gray-700" fill="none" stroke="#191919" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></svg>;
}
function PremiumIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#F8E8C7" /><path d="M7 17l5-10 5 10H7z" fill="#D4AF37" /></svg>;
} 