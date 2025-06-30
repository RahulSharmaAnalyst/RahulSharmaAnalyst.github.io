
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Digital Music Store Data Analysis using SQL',
      description: 'Analyzed music store data using advanced SQL queries to identify gaps and increase the business growth.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop',
      link: 'https://github.com/rishabhnmishra/SQL_Music_Store_Analysis/blob/main/Music_Store_Query.sql',
      tech: ['SQL', 'Data Analysis', 'Business Intelligence']
    },
    {
      title: 'Data Analysis using Python Project for Beginners',
      description: 'Performed exploratory data analysis on diwali sales data using Python to improve the customer experience.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      link: 'https://github.com/rishabhnmishra/Python_Diwali_Sales_Analysis/blob/main/Diwali_Sales_Analysis.ipynb',
      tech: ['Python', 'Pandas', 'Matplotlib', 'EDA']
    },
    {
      title: 'Power BI Sales Dashboard Project for Beginners',
      description: 'Designed a power bi dashboard for Madhav Store to track and analyze the online sales data across India.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      link: 'https://github.com/rishabhnmishra/Madhav_Store_Analysis_PowerBI/blob/main/Madhav%20Store%20dashboard.jpg',
      tech: ['Power BI', 'Data Visualization', 'DAX']
    },
    {
      title: 'Sales Forecast - Time Series Forecasting',
      description: 'Used multiple machine learning models to forecast sales (retail store) and performed time series analysis.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      link: 'https://github.com/rishabhnmishra/sales_forecasting/tree/main',
      tech: ['Python', 'Time Series', 'Machine Learning', 'Forecasting']
    },
    {
      title: 'Customer Segmentation using Clustering Model',
      description: 'Developed a ML model to give various recommendations of financial products & services on target customer groups.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop',
      link: 'https://github.com/rishabhnmishra/customer_segmentation/blob/main/Customer_Segmentation-final.ipynb',
      tech: ['Python', 'Clustering', 'Machine Learning', 'Customer Analytics']
    }
  ];

  const stats = [
    { number: 7, label: 'Achievements' },
    { number: 10, label: 'Projects' },
    { number: 25, label: 'Mentored Students' },
    { number: 150, label: 'Cups of Coffee' }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold text-muted-foreground/20 mb-4">Projects</h1>
          <h2 className="text-4xl font-bold text-foreground mb-6 -mt-8">Projects</h2>
          <p className="text-lg text-foreground/70 max-w-2.5xl mx-auto">
            Below are the sample Data Analytics projects on SQL, Python, Power BI & ML.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-primary">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Project
                    </a>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-accent mb-2">
                {stat.number}+
              </div>
              <div className="text-foreground/60 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center section-gradient rounded-3xl p-12 animate-fade-in">
          <h3 className="text-3xl font-bold text-white mb-4">
            More projects on <span className="text-accent">Github</span>
          </h3>
          <p className="text-white/90 text-lg mb-8">
            I love to solve business problems & uncover hidden data stories
          </p>
          <Button asChild className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 rounded-full text-lg">
            <a href="https://github.com/RahulSharmaAnalyst" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
