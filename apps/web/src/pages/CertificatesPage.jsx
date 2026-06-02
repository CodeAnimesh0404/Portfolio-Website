import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const CertificatesPage = () => {
  const certificates = [
    {
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      date: 'October 2023',
      credentialId: 'AWS-SAA-12345',
      link: '#',
      skills: ['Cloud Architecture', 'AWS', 'Security', 'Scalability'],
      icon: ShieldCheck,
    },
    {
      title: 'Data Science with Python Professional Certificate',
      issuer: 'Broadway Infosys',
      date: 'June 04 2025',
      credentialId: 'B20551000',
      link: '#',
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
      icon: Award,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Certificates - Professional Qualifications</title>
        <meta name="description" content="View my professional certifications, courses, and qualifications." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto"
              >
                <div className="mb-16">
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>
                    <span className="text-balance">Certifications & Awards</span>
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-prose">
                    Continuous learning is a core part of my professional journey. Here are some of the certifications and specialized training I've completed to stay at the forefront of technology and design.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {certificates.map((cert, index) => {
                    const Icon = cert.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="h-full"
                      >
                        <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 bg-card">
                          <CardHeader>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <CardTitle className="text-xl leading-snug mb-2">{cert.title}</CardTitle>
                            <CardDescription className="text-base font-medium text-foreground/80">
                              {cert.issuer}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="flex-1">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                              <Calendar className="w-4 h-4" />
                              <span>Issued {cert.date}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {cert.skills.map((skill, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs font-medium">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter className="pt-6 border-t border-border/50 mt-auto">
                            <Button variant="outline" className="w-full group" asChild>
                              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                View Credential
                                <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </a>
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CertificatesPage;