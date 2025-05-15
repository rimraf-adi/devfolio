import { Building2, Rocket, Briefcase, Factory } from 'lucide-react';

const brands = [
  { name: 'CoreOS', icon: Building2 },
  { name: 'Euphoria', icon: Rocket },
  { name: 'Acme Co.', icon: Briefcase },
  { name: 'TechCorp', icon: Factory },
];

export default function Brands() {
  return (
    <section className="w-full h-full p-6 md:p-8">
      <div className="h-full flex flex-col">
        <h2 className="text-2xl font-bold mb-8 tracking-tight">
          <span style={{ fontFamily: 'var(--font-antic)' }}>Brands</span> I've worked with
        </h2>
        <div className="grid grid-cols-2 gap-6 items-center justify-items-center flex-grow">
          {brands.map((brand) => {
            const Icon = brand.icon;
            return (
              <div
                key={brand.name}
                className="flex flex-col items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors p-4 bg-gray-50 rounded-2xl w-full"
              >
                <Icon className="w-12 h-12" />
                <span style={{ fontFamily: 'var(--font-avenir)' }} className="text-sm font-medium tracking-wide">{brand.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 