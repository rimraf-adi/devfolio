import Header from '@/components/ui/header';
import Intro from '@/components/ui/intro';
import Brands from '@/components/ui/brands';
import Projects from '@/components/ui/projects';
import Footer from '@/components/ui/footer';
import ExpertiseGrid from '@/components/ui/expertise';
import ExpertiseSidebar from '@/components/ui/expertise-sidebar';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Grid Container */}
      <div className="max-w-[1400px] mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 md:gap-6">
          {/* Main Content - Spans 5 columns */}
          <div className="md:col-span-5 grid grid-cols-1 gap-4 md:gap-6">
            {/* Header Section */}
            <div className="bg-white rounded-3xl shadow-sm">
              <Header />
            </div>

            {/* Intro Section */}
            <div className="bg-white rounded-3xl shadow-sm">
              <Intro />
            </div>

            {/* Brands Section */}
            <div className="bg-white rounded-3xl shadow-sm">
              <Brands />
            </div>

            {/* Projects Section */}
            <div className="bg-white rounded-3xl shadow-sm">
              <Projects />
            </div>

            {/* Expertise Grid Section */}
            <div className="bg-white rounded-3xl shadow-sm">
              <ExpertiseGrid />
            </div>

            {/* Footer */}
            <Footer />
          </div>

          {/* Sidebar - Spans 2 columns */}
          <div className="md:col-span-2 sticky top-8 h-[calc(100vh-4rem)]">
            <ExpertiseSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}