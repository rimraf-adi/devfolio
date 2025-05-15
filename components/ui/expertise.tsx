import { Server, Wifi, Video, Clock, Cpu } from 'lucide-react';

export default function ExpertiseGrid() {
  return (
    <section className="w-full h-auto grid grid-rows-3 md:grid-rows-2 md:grid-cols-3 gap-4 md:gap-6 my-4 md:my-6">
      {/* Backend Apps */}
      <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col flex-1">
        <Server className="w-8 h-8 text-gray-500 mb-2" />
        <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-antic)' }}>
          Backend Apps
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-avenir)' }}>
          Building robust, maintainable backend services with a focus on simplicity, reliability, and scalability.
        </p>
      </div>
      {/* WebSockets */}
      <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col flex-1">
        <Wifi className="w-8 h-8 text-gray-500 mb-2" />
        <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-antic)' }}>
          WebSockets
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-avenir)' }}>
          Enabling real-time, bidirectional communication for interactive and collaborative applications.
        </p>
      </div>
      {/* WebRTC */}
      <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col flex-1">
        <Video className="w-8 h-8 text-gray-500 mb-2" />
        <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-antic)' }}>
          WebRTC
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-avenir)' }}>
          Powering peer-to-peer audio, video, and data streaming for seamless real-time experiences.
        </p>
      </div>
      {/* Real-time Systems */}
      <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col flex-1">
        <Clock className="w-8 h-8 text-gray-500 mb-2" />
        <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-antic)' }}>
          Real-time Systems
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-avenir)' }}>
          Architecting systems for instant data flow, low latency, and high availability.
        </p>
      </div>
      {/* MLOps */}
      <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col flex-1">
        <Cpu className="w-8 h-8 text-gray-500 mb-2" />
        <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-antic)' }}>
          MLOps
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-avenir)' }}>
          Streamlining machine learning workflows from development to production for impactful, scalable solutions.
        </p>
      </div>
    </section>
  );
} 