export default function Intro() {
  return (
    <section className="w-full p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hello, I'm <span style={{ fontFamily: 'var(--font-antic)' }} className="text-blue-600">Aditya</span> – 
            <span style={{ fontFamily: 'var(--font-antic)' }}> Building</span> Digital Solutions!
          </h2>
          <p style={{ fontFamily: 'var(--font-avenir)' }} className="text-lg text-gray-600 max-w-2xl leading-relaxed tracking-wide">
            As a <span style={{ fontFamily: 'var(--font-antic)' }} className="font-medium">developer</span>, I create efficient and scalable solutions that solve real-world problems. 
            Let's collaborate to bring your ideas to life!
          </p>
          <div style={{ fontFamily: 'var(--font-avenir)' }} className="inline-block bg-blue-50 text-blue-600 px-6 py-3 rounded-full text-sm font-medium tracking-wide">
            Open for <span style={{ fontFamily: 'var(--font-antic)' }} className="font-medium">opportunities</span> and collaborations
          </div>
        </div>
      </div>
    </section>
  );
}
