import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function Teams() {
  const team = [
    {
      name: 'Alex Rivera',
      role: 'Chief Executive Officer',
      bio: '15+ years building enterprise cloud solutions',
      avatar: '👨‍💼',
      social: { linkedin: '#', twitter: '#', email: 'alex@vyomira.com' }
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Technology Officer',
      bio: 'Former AWS Solutions Architect, Cloud expert',
      avatar: '👩‍💻',
      social: { linkedin: '#', twitter: '#', email: 'priya@vyomira.com' }
    },
    {
      name: 'Marcus Thompson',
      role: 'VP of Engineering',
      bio: 'Led DevOps teams at Fortune 500 companies',
      avatar: '👨‍💻',
      social: { linkedin: '#', twitter: '#', email: 'marcus@vyomira.com' }
    },
    {
      name: 'Sophie Chen',
      role: 'Head of Security',
      bio: 'Cybersecurity specialist, CISSP certified',
      avatar: '👩‍💼',
      social: { linkedin: '#', twitter: '#', email: 'sophie@vyomira.com' }
    },
    {
      name: 'James Anderson',
      role: 'Head of Product',
      bio: 'Product visionary with SaaS expertise',
      avatar: '👨‍💼',
      social: { linkedin: '#', twitter: '#', email: 'james@vyomira.com' }
    },
    {
      name: 'Nina Patel',
      role: 'Chief Design Officer',
      bio: 'Award-winning UX designer',
      avatar: '👩‍🎨',
      social: { linkedin: '#', twitter: '#', email: 'nina@vyomira.com' }
    },
    {
      name: 'Robert Kim',
      role: 'VP of Sales',
      bio: 'Enterprise sales leader, 10+ years',
      avatar: '👨‍💼',
      social: { linkedin: '#', twitter: '#', email: 'robert@vyomira.com' }
    },
    {
      name: 'Maria Garcia',
      role: 'Head of Customer Success',
      bio: 'Passionate about client relationships',
      avatar: '👩‍💼',
      social: { linkedin: '#', twitter: '#', email: 'maria@vyomira.com' }
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
              Meet the <span className="text-gradient">Minds</span> Behind Vyomira
            </h1>
            
            <div className="relative z-10 px-6 py-8 rounded-2xl bg-gradient-to-b from-blue-950/30 to-transparent border border-white/5">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 font-light">
                A passionate team of DevOps engineers, cloud architects, and security experts driven
                by <span className="font-medium text-blue-400">one goal</span> — to make your cloud 
                <span className="font-medium"> secure, compliant, and efficient</span>.
              </p>
              
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto my-6 rounded-full"></div>
              
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light">
                Each team member brings hands-on experience from 
                <span className="font-medium text-blue-400"> AWS, GCP</span>, and enterprise 
                <span className="font-medium text-cyan-400"> DevSecOps</span> environments — 
                combining technical depth with strategic insight.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="group glassmorphism rounded-2xl p-8 hover:glassmorphism-strong transition-all duration-500 hover:scale-105 text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="w-24 h-24 mx-auto mb-6 glassmorphism-strong rounded-full flex items-center justify-center text-5xl group-hover:scale-110 transition-all duration-300">
                  {member.avatar}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">{member.name}</h3>
                <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm mb-6">{member.bio}</p>

                <div className="flex gap-3 justify-center">
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 glassmorphism rounded-full flex items-center justify-center hover:bg-white/10 transition-all group/icon"
                  >
                    <Linkedin size={16} className="group-hover/icon:text-blue-400 transition-colors" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 glassmorphism rounded-full flex items-center justify-center hover:bg-white/10 transition-all group/icon"
                  >
                    <Twitter size={16} className="group-hover/icon:text-blue-400 transition-colors" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 glassmorphism rounded-full flex items-center justify-center hover:bg-white/10 transition-all group/icon"
                  >
                    <Mail size={16} className="group-hover/icon:text-blue-400 transition-colors" />
                  </a>
                </div>
              </div>
            ))}
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
