import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, MapPin, Calendar, GraduationCap, Languages, Mail , BarChart3, Award ,Globe } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'SQL', percentage: 85 },
    { name: 'Python', percentage: 85 },
    { name: 'Microsoft Excel', percentage: 90 },
    { name: 'Statistical Analysis', percentage: 85 },
    { name: 'Data Visualization', percentage: 90 },
    { name: 'Generative AI', percentage: 80 }
  ];

  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Delhi, India' },
    { icon: Calendar, label: 'Experience', value: '1 Years of Experience' },
    { icon: GraduationCap, label: 'Education', value: 'Bachelor of Computer Science' },
    { icon: Languages, label: 'Languages', value: 'English, Hindi' },
    { icon: Mail, label: 'Email', value: 'rahulsharma2152001@gmail.com' }
  ];

  const professionalSkills = [
    { category: 'Domain Expertise', items: 'Retail, Ecommerce, Banking, Healthcare' },
    { category: 'BI Tools', items: 'Microsoft Power BI, Looker & Tableau' },
    { category: 'Technical Skills', items: 'AWS, SQL, Excel, Git, Python' },
    { category: 'Digital Marketing', items: 'Google Analytics' },
    { category: 'Interests', items: 'Traveling, Photography, Gaming, Learning' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 lg:py-20 bg-gradient-to-br from-background via-background to-secondary/10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-foreground/70 text-lg max-w-6xl mx-auto">
            A dedicated aspiring data analyst, driven by the power of data to solve problems. I specialize in <b><i> Analytics </i></b>, creating clear <b><i> Visualizations </i></b> and crafting <b><i> Data Driven </i></b>narratives, always seeking to turn Raw information into strategic value.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Profile Section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl mx-auto mb-6 ring-4 ring-accent/20">
                    <img 
                      src="/lovable-uploads/345f97e9-82b4-4ed3-a690-98a9b0a18c76.png" 
                      alt="Rahul Sharma"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-0">Rahul Sharma</h3>
                  <p className="text-accent font-semibold text-lg mb-6">Data Analyst</p>
                  <div className="space-y-3 mb-6">
                    {personalInfo.map((info, index) => (
                      <div key={index} className="flex items-center justify-center gap-3 text-foreground/80">
                        <info.icon className="w-4 h-4 text-accent" />
                        <span className="text-sm">{info.value}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="bg-primary hover:bg-primary/90 w-full rounded-full">
                    <a href="https://www.linkedin.com/in/rahulsharma521/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            
            <div className="lg:col-span-2 space-y-8">
              {/* About Description */}
              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-accent mb-6 flex items-center gap-3">
                    <BarChart3 className="w-6 h-6" />
                    Professional Profile
                  </h3>
                  <p className="text-foreground/90 leading-relaxed text-lg mb-9">
                    I'm an aspiring data analyst dedicated to solving real-world problems by extracting meaningful patterns and intelligence, accompanied by a
                    bachelor's degree in computer science. My expertise encompasses comprehensive analytics, creating clear and impactful visualizations, and crafting data-driven narratives from
                    raw information. I am passionate about transforming insights into strategic value.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Applied data analysis skills across diverse projects, including e-commerce sales & supply chain optimization and bank loan campaign analysis,
                     to drive strategic insights and improve efficiency.
                  </p>
                </CardContent>
              </Card>

              {/* Technical Skills */}
              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-accent mb-6">Core Technical Skills</h3>
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground text-lg">{skill.name}</span>
                          <span className="text-accent font-bold text-lg">{skill.percentage}%</span>
                        </div>
                        <div className="w-full bg-muted/20 rounded-full h-3 overflow-hidden shadow-inner">
                          <div 
                            className="h-full bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full transition-all duration-[2000ms] ease-out shadow-lg animate-pulse"
                            style={{ 
                              width: isVisible ? `${skill.percentage}%` : '0%',
                              transitionDelay: `${index * 500}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Professional Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalSkills.map((skillGroup, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-accent mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    {skillGroup.category}
                  </h4>
                  <p className="text-foreground/90 leading-relaxed text-sm">
                    {skillGroup.items}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
