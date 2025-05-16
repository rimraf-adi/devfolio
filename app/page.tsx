import Header from '@/components/ui/header';
import Intro from '@/components/ui/intro';
import Brands from '@/components/ui/about';
import Projects from '@/components/ui/projects';
import Footer from '@/components/ui/footer';
import ExpertiseGrid from '@/components/ui/expertise';
import BlogIntro from '@/components/ui/BlogIntro';
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto p-4 md:p-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          {/* Header Section */}
          <div className="bg-white rounded-3xl shadow-sm">
            <Header />
          </div>

          {/* Intro Section */}
          <div className="bg-white rounded-3xl shadow-sm">
            <Intro />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">  
            <div className="bg-white rounded-3xl shadow-sm md:col-span-1">
              <Brands />
            </div>
            <div className="bg-white rounded-3xl shadow-sm md:col-span-3">
              <Projects />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">

            <div className="bg-white rounded-3xl shadow-sm md:col-span-3">
              <ExpertiseGrid />
            </div>

            <div className="bg-white rounded-3xl shadow-sm flex flex-col justify-center p-6 md:col-span-1">
              <h2 className="text-2xl font-bold mb-2">My Skillset</h2>
              <p className="text-gray-600">
                Here's a snapshot of my core technical skills and areas of expertise, spanning frontend, backend, cloud, and more.
              </p>
            </div>
          </div>
          <BlogIntro />
          <Footer />
        </div>
      </div>
    </main>
  );
}