
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const ResumeSection = () => {
  const experiences = [
    {
      period: '2021-Present',
      title: 'Senior Data Analyst',
      company: 'Merkle',
      description: 'Merkle, a leading CXM and media company with over 10K+ professionals globally. It\'s a part of Dentsu International.',
      achievements: [
        'Analysed ad campaigns, clickstream, and customer surveys data, identified an increasing demand and launched a strategic product line.',
        'Developed time series forecasting models to predict sales and optimize marketing budgets, got model performance of 92%.',
        'Designed and executed A/B tests, performed rigorous statistical analysis. Led to 20% MoM increase in the conversion rate.'
      ]
    },
    // {
    //   period: '2018-2021',
    //   title: 'Senior Data Analyst',
    //   company: 'iQuanti',
    //   description: 'iQuanti is a data-driven digital marketing analytics and solutions company, helps top 100 global brands.',
    //   achievements: [
    //     'Performed in-depth market research and analysis to create online pages. Resulted in ~100% website growth and 30% increase in conversion rate YoY.',
    //     'Delivered multiple training and mentorship sessions on analytical tools like SQL, MS Excel, Power BI, Tableau and Python.',
    //     'Performed migration and enhancements for merchandising dashboard, involved data integration and its feature improvement.'
    //   ]
    // }
  ];

  const education = [
    {
      period: '2019-2024',
      title: 'Bachelor of Computer Application',
      institution: 'Indira Gandhi National Open University',
      grade: 'Second class distinction'
    },
    {
      period: '2019-2021',
      title: 'Advance Diploma In Computer Engineering (ADCE)',
      institution: 'Indian Institute of Computer Science',
      grade: 'First class distinction'
    },
    {
      period: '2018-2019',
      title: 'Higher Secondary School',
      institution: 'Govt Boys Senior Secondary School, Delhi',
      grade: 'First class distinction'
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold text-muted-foreground/20 mb-4">Resume</h1>
          <h2 className="text-4xl font-bold text-foreground mb-6 -mt-8">Resume</h2>
          <p className="text-lg text-foreground/70 max-w-6xl mx-auto">

            Seasoned Aspiring Data Analyst with 1+ years of experience driving business strategies
            through data-driven insights. Proven expertise in data science, statistical analysis,
             Data Cleaning, Processing, Visualization, Reporting and project management.

          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center">
            <span className="w-12 h-1 bg-accent mr-4"></span>
            Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg animate-fade-in">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <span className="inline-block bg-accent text-primary px-4 py-1 rounded-full text-sm font-semibold mb-3">
                      {exp.period}
                    </span>
                    <h4 className="text-xl font-bold text-foreground mb-1">{exp.title}</h4>
                    <p className="text-accent font-semibold mb-3">{exp.company}</p>
                    <p className="text-foreground/70 mb-4">{exp.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-foreground/80 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center">
            <span className="w-12 h-1 bg-accent mr-4"></span>
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg animate-fade-in">
                <CardContent className="p-8">
                  <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-3">
                    {edu.period}
                  </span>
                  <h4 className="text-xl font-bold text-foreground mb-1">{edu.title}</h4>
                  <p className="text-accent font-semibold mb-3">{edu.institution}</p>
                  <p className="text-foreground/70">Grade: {edu.grade}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Download CV Button */}
         <div className="text-center animate-fade-in">
          <a
            href="/CV_Rahul_Sharma.pdf"
            download
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
