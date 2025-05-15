import Header from '@/components/ui/header';
import Intro from '@/components/ui/intro';
import Brands from '@/components/ui/brands';
import Projects from '@/components/ui/projects';
import Footer from '@/components/ui/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Grid Container */}
      <div className="max-w-[1400px] mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
          {/* Header Section - Spans full width */}
          <div className="md:col-span-6 bg-white rounded-3xl shadow-sm">
            <Header />
          </div>

          {/* Intro Section - Spans full width */}
          <div className="md:col-span-6 bg-white rounded-3xl shadow-sm">
            <Intro />
          </div>

          {/* Brands Section - Spans 2 columns */}
          <div className="md:col-span-2 bg-white rounded-3xl shadow-sm">
            <Brands />
          </div>

          {/* Projects Section - Spans 4 columns */}
          <div className="md:col-span-4 bg-white rounded-3xl shadow-sm">
            <Projects />
          </div>

          {/* Footer - Fixed at bottom */}
          <Footer />
        </div>
      </div>
    </main>
  );
}
