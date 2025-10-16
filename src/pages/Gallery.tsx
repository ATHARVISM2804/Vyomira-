import { useState } from 'react';
import { Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { 
      title: 'Cloud Infrastructure', 
      category: 'Infrastructure',
      imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Advanced cloud architecture designed for enterprise-scale operations with multi-region redundancy.'
    },
    { 
      title: 'Security Dashboard', 
      category: 'Security',
      imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Real-time security monitoring with AI-powered threat detection and automated incident response.'
    },
    { 
      title: 'Analytics Overview', 
      category: 'Analytics',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Comprehensive data visualization and insights platform with predictive analytics capabilities.'
    },
    { 
      title: 'Cost Optimization', 
      category: 'Optimization',
      imageUrl: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'AI-driven cost management tools that automatically identify savings opportunities across cloud services.'
    },
    { 
      title: 'Team Collaboration', 
      category: 'Collaboration',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Integrated team workspace with real-time collaboration features for distributed DevOps teams.'
    },
    { 
      title: 'DevOps Pipeline', 
      category: 'DevOps',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Streamlined CI/CD pipelines with automated testing and deployment for maximum development velocity.'
    },
    { 
      title: 'Multi-Cloud Setup', 
      category: 'Infrastructure',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Unified management interface for AWS, Azure, and GCP resources with centralized policy enforcement.'
    },
    { 
      title: 'Performance Metrics', 
      category: 'Analytics',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Detailed performance monitoring with custom dashboards and intelligent anomaly detection.'
    },
    { 
      title: 'Compliance Reports', 
      category: 'Security',
      imageUrl: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Automated compliance reporting for SOC 2, HIPAA, GDPR, ISO 27001 and other regulatory frameworks.'
    },
    { 
      title: 'AI-Powered Recommendations', 
      category: 'Intelligence',
      imageUrl: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Machine learning algorithms that provide intelligent recommendations for optimizing your cloud infrastructure.'
    },
    { 
      title: 'Disaster Recovery', 
      category: 'Resilience',
      imageUrl: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Comprehensive disaster recovery solutions with automated failover and multi-region backup strategies.'
    },
    { 
      title: 'Serverless Architecture', 
      category: 'Architecture',
      imageUrl: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Modern serverless application architectures that scale automatically and reduce operational overhead.'
    }
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
                {/* Background image with overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={image.imageUrl} 
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-500 mix-blend-overlay"></div>
                </div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold">{image.title}</h3>
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <Maximize2 size={20} />
                      </div>
                    </div>
                    <span className="inline-block text-xs text-cyan-400 glassmorphism px-3 py-1 rounded-full mb-3">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/10 transition-all text-white"
            >
              ✕
            </button>
            
            <img 
              src={images[selectedImage].imageUrl}
              alt={images[selectedImage].title}
              className="w-full object-contain max-h-[80vh]"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="text-2xl font-bold mb-2">{images[selectedImage].title}</h3>
              <p className="text-gray-300 mb-1">{images[selectedImage].description}</p>
              <span className="inline-block text-xs text-cyan-400 glassmorphism px-3 py-1 rounded-full mt-2">
                {images[selectedImage].category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
