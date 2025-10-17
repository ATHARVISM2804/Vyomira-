

export default function Teams() {
  const team = [
    {
      name: 'Rohit Kumar',
      role: 'Founder / Solution Architect / Senior DevSecOps Engineer',
      bio: 'Rohit is the driving force behind Vyomira\'s vision to make cloud infrastructure more secure, compliant, and cost-efficient. With over 9 years of hands-on experience in DevOps, DevSecOps, and Cloud Architecture, he has led multiple large-scale deployments and compliance transformations across fintech, SaaS, and enterprise environments.',
      skills: 'AWS, GCP, Azure, Kubernetes (EKS), Terraform, Ansible, Jenkins, ArgoCD, Security Compliance (PCI DSS, ISO 27001, SOC2), Cloud Cost Optimization, Python Automation',
      avatar: '👨‍💼',
      email: 'rohit@vyomira.com'
    },
    {
      name: 'Anil',
      role: 'Senior DevOps Engineer',
      bio: 'Anil brings deep technical expertise in infrastructure automation, container orchestration, and monitoring. He ensures Vyomira\'s projects run on secure, scalable, and high-performance environments — driving operational efficiency for every client deployment.',
      skills: 'CI/CD Pipelines, Kubernetes, Docker, Helm, Terraform, GitHub Actions, Prometheus, Grafana, AWS Infrastructure Management, Automation Scripting',
      avatar: '👨‍💻',
      email: 'anil@vyomira.com'
    },
    {
      name: 'Parna',
      role: 'Digital Marketing Lead',
      bio: 'Parna leads Vyomira\'s digital presence — building awareness, engagement, and credibility through strategic content and brand storytelling. Her goal is to make Vyomira a recognizable name among enterprises seeking secure and optimized cloud solutions.',
      skills: 'Content Strategy, Social Media Marketing, SEO, LinkedIn Branding, Campaign Management, Analytics, Graphic Design (Canva / Adobe Suite)',
      avatar: '👩‍💼',
      email: 'parna@vyomira.com'
    },
    {
      name: 'Nisha',
      role: 'Business Development Lead',
      bio: 'Nisha drives Vyomira\'s growth engine, developing client relationships and partnerships across the cloud and DevOps ecosystem. She focuses on connecting with forward-thinking organizations that value innovation, efficiency, and compliance.',
      skills: 'Lead Generation, CRM Management, Partnership Development, Client Communication, Proposal Writing, Strategic Sales Outreach',
      avatar: '👩‍💼',
      email: 'nisha@vyomira.com'
    },
    {
      name: 'Madhumidha',
      role: 'Client Success Associate',
      bio: 'Madhumidha ensures every Vyomira client experiences smooth onboarding and continuous success. She bridges the gap between technical delivery and customer satisfaction, helping clients extract maximum value from Vyomira\'s products and services.',
      skills: 'Customer Relationship Management, Onboarding & Support, Process Optimization, Feedback Analysis, Communication & Coordination',
      avatar: '👩‍💼',
      email: 'madhumidha@vyomira.com'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-crosses opacity-[0.08]"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mb-20 text-center mx-auto animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-10 leading-tight">
              Meet the <span className="text-gradient">Leadership Team</span>
            </h1>
            
            <div className="relative z-10 px-6 py-8 rounded-2xl bg-gradient-to-b from-blue-950/30 to-transparent border border-white/5">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 font-light">
                At Vyomira, our strength lies in the expertise and passion of a small but powerful team. 
                Each of us leads a key function — from engineering and security to growth and customer success — 
                ensuring that every client receives end-to-end excellence across the cloud journey.
              </p>
              
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto my-6 rounded-full"></div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="group glassmorphism rounded-2xl p-8 hover:glassmorphism-strong transition-all duration-500 hover:scale-105 text-center animate-fade-in-up flex flex-col h-full"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="w-24 h-24 mx-auto mb-6 glassmorphism-strong rounded-full flex items-center justify-center text-5xl group-hover:scale-110 transition-all duration-300">
                  {member.avatar}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">{member.name}</h3>
                <p className="text-blue-400 text-sm mb-5">{member.role}</p>
                
                <div className="mb-5 p-3 bg-black/30 rounded-lg">
                  <p className="text-xs text-cyan-300 font-medium uppercase tracking-wider mb-2">Skills</p>
                  <p className="text-gray-400 text-sm">{member.skills}</p>
                </div>
                
                <div className="flex-grow">
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-300 italic leading-relaxed px-6 py-8 rounded-2xl bg-gradient-to-b from-blue-950/30 to-transparent border border-white/5">
              Together, we are building Vyomira into a trusted name in DevOps, Cloud Security, and Cost Optimization — empowering organizations to operate smarter, safer, and faster in the cloud.
            </p>
          </div>

          <div className="glassmorphism rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Join Our Team</h3>
            <p className="text-gray-400 mb-8">
              We're looking for talented cloud engineers, security specialists, and DevOps experts
              who are passionate about building the future of cloud management.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 animate-glow"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
