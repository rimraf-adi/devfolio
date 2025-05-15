import { Server, Wifi, Video, Clock, Cpu } from 'lucide-react';

export default function ExpertiseSidebar() {
  return (
    <div className="w-full h-full bg-white rounded-3xl shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-antic)' }}>
        Areas of Expertise
      </h2>
      
      <div className="grid grid-cols-1 gap-4">
        {/* Backend Apps */}
        <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Server className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-semibold" style={{ fontFamily: 'var(--font-antic)' }}>
              Backend Apps
            </h3>
          </div>
        </div>

        {/* WebSockets */}
        <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Wifi className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-semibold" style={{ fontFamily: 'var(--font-antic)' }}>
              WebSockets
            </h3>
          </div>
        </div>

        {/* WebRTC */}
        <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Video className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-semibold" style={{ fontFamily: 'var(--font-antic)' }}>
              WebRTC
            </h3>
          </div>
        </div>

        {/* Real-time Systems */}
        <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Clock className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="font-semibold" style={{ fontFamily: 'var(--font-antic)' }}>
              Real-time Systems
            </h3>
          </div>
        </div>

        {/* MLOps */}
        <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
          <div className="flex items-center gap-3">
            <div className="bg-red-100 p-2 rounded-lg">
              <Cpu className="w-5 h-5 text-red-600" />
            </div>
            <h3 className="font-semibold" style={{ fontFamily: 'var(--font-antic)' }}>
              MLOps
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
} 