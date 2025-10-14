import { useState } from 'react';
import { Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { title: 'Cloud Infrastructure', category: 'Infrastructure' },
    { title: 'Security Dashboard', category: 'Security' },
    { title: 'Analytics Overview', category: 'Analytics' },
    { title: 'Cost Optimization', category: 'Optimization' },
    { title: 'Team Collaboration', category: 'Collaboration' },
    { title: 'DevOps Pipeline', category: 'DevOps' },
    { title: 'Multi-Cloud Setup', category: 'Infrastructure' },
    { title: 'Performance Metrics', category: 'Analytics' },
    { title: 'Compliance Reports', category: 'Security' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-crosses opacity-[0.08]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mb-16 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Project <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              Explore our showcase of innovative cloud solutions, security implementations,
              and success stories from enterprises worldwide.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] glassmorphism rounded-2xl overflow-hidden cursor-pointer hover:glassmorphism-strong transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
                onClick={() => setSelectedImage(idx)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Maximize2 size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <span className="text-sm text-gray-400 glassmorphism px-3 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 glassmorphism-strong animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full aspect-video glassmorphism-strong rounded-2xl p-8">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 glassmorphism rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
            >
              ✕
            </button>
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">{images[selectedImage].title}</h3>
                <p className="text-gray-400">Full image preview</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
