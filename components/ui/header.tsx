import { Waves } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left section with name and title */}
          <div className="flex flex-col  gap-2">
            <h1 style={{ fontFamily: 'var(--font-antic)' }} className="text-3xl md:text-4xl font-bold tracking-tight">Aditya Kinjawadekar</h1>
            <span style={{ fontFamily: 'var(--font-avenir)' }} className="text-blue-600 font-medium tracking-wide">Developer</span>
          </div>

          {/* Right section with date */}
          <div className="flex items-center gap-4">
            <p style={{ fontFamily: 'var(--font-avenir)' }} className="text-gray-600 tracking-wide">May 15, 2024 – India, 4:37 PM</p>
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
              <Waves className="w-7 h-7 text-blue-600" />
            </div>
          </div>
        </div>

        
        </div>

    </header>
  );
}
