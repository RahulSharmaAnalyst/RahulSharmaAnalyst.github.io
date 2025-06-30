
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Download } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Sonia Vihar, Delhi, India',
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      title: 'Contact Number',
      content: '+91 9368070740',
      link: 'tel:+91 9368070740',
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'rahulsharma2152001@gmail.com',
      link: 'mailto:rahulsharma2152001@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: Download,
      title: 'Download Resume',
      content: 'Resume Link',
      link: '/CV_Rahul_Sharma.pdf',
      color: 'text-purple-500'
    }
  ];

  // const socialLinks = [
  //   { icon: Youtube, href: 'https://www.youtube.com/@RishabhMishraOfficial', label: 'YouTube' },
  //   { icon: Linkedin, href: 'https://www.linkedin.com/in/rishabhnmishra/', label: 'LinkedIn' },
  //   { icon: Twitter, href: 'https://twitter.com/rishabhnmishra', label: 'Twitter' },
  //   { icon: Facebook, href: 'https://twitter.com/rishabhnmishra', label: 'Facebook' },
  //   { icon: Instagram, href: 'https://www.instagram.com/rishabhnmishra/', label: 'Instagram' }
  // ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold text-muted-foreground/20 mb-4">Contact</h1>
          <h2 className="text-4xl font-bold text-foreground mb-6 -mt-8">Contact Me</h2>
          <p className="text-lg text-foreground/70">
            Below are the details to reach out to me!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className={`w-8 h-8 ${info.color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="text-accent hover:text-accent/80 transition-colors duration-300 font-medium break-words text-sm leading-relaxed"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-foreground/70 break-words text-sm leading-relaxed">{info.content}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Question CTA */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Have a <span className="text-accent">Question?</span>
            </h3>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full text-lg font-semibold">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCTiBSPlr1AjInIlYImHj7jNavIaXzfF7g7WUmqEpRi2CiyA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                Click Here
              </a>
            </Button>
          </div>
        </div>

        {/* Social Links */}
        {/* <div className="text-center animate-fade-in">
          <p className="text-foreground/70 mb-6 text-lg">Find me on</p>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white hover:scale-110 transition-all duration-300 hover:shadow-lg"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ContactSection;
