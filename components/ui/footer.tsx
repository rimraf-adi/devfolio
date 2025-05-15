import { Home, Briefcase, FolderGit2, Mail } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', href: '#' },
  { icon: Briefcase, label: 'Service', href: '#' },
  { icon: FolderGit2, label: 'Project', href: '#' },
  { icon: Mail, label: 'Contact', href: '#' },
];

export default function Footer() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
      <div className="flex justify-around items-center h-20 px-4 max-w-[1400px] mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              <Icon className="w-6 h-6 mb-1" />
              <span style={{ fontFamily: 'var(--font-avenir)' }} className="text-xs tracking-wide">
                {item.label === 'Project' ? (
                  <span style={{ fontFamily: 'var(--font-antic)' }} className="font-medium">{item.label}</span>
                ) : (
                  item.label
                )}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
