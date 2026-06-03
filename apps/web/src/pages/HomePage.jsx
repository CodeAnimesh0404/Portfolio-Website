import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';

const HomePage = () => {
  const projects = [
    {
      image: 'https://www.news-medical.net/image-handler/picture/2021/11/shutterstock_1668552160.jpg',
      title: 'COVID-19 Classification',
      description: 'Created a model to classify and predict COVID-19 cases based on various input features.',
      tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
    },
    {
      image: 'https://sdbi.in/wp-content/uploads/2023/05/Tata-IP-2023-Machine-learning-Predictive-Analysis.png',
      title: 'IPL Win Prediction',
      description: 'A project aimed at predicting the outcomes of IPL matches using machine learning techniques.',
      tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
    },
    {
      image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Sentiment Analysis',
      description: 'Developed a sentiment analysis application that classifies sentiments from textual data using machine learning.',
      tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio - Animesh Acharya</title>
        <meta name="description" content="Professional portfolio showcasing my information and my work in data science and machine learning." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=1200&q=80"
                srcSet="https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=1200&q=80 1200w, https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=1600&q=80 1600w"
                sizes="100vw"
                alt="Creative workspace with modern design elements"
                className="w-full h-full object-cover"
                width="1600"
                height="900"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75" />
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6" style={{letterSpacing: '-0.02em'}}>
                  <span className="text-balance">Data Science and Machine Learning Enthusiast</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-prose">
                  Passionate about leveraging data to drive insights and build intelligent solutions.
                </p>
                <Link to="/portfolio">
                  <Button size="lg" className="group transition-all duration-200 active:scale-[0.98]">
                    View My Work
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Intro Section */}
          <section className="py-20 bg-muted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 text-balance">
                  Building machine learning models and analytics dashboards to solve real-world problems
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-prose">
                  I specialize in creating data-driven solutions that help businesses make informed decisions. With a strong background in data science and machine learning, I am dedicated to delivering impactful results through innovative approaches and cutting-edge technologies.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-col items-start"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 mb-4">
                      <BarChart2 className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Data Science</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Leveraging statistical methods and algorithms to extract insights from data.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col items-start"
                  >
                    <div className="p-3 rounded-xl bg-accent/10 mb-4">
                      <TrendingUp className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Analytics</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Transforming data into actionable insights and visualizations.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col items-start"
                  >
                    <div className="p-3 rounded-xl bg-secondary/10 mb-4">
                      <Zap className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Strategy</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Thoughtful planning and execution to ensure projects meet business goals.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-10">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-primary">Recent Technical Projects</p>
                    <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                      Three recent projects that showcase my technical skills.
                    </h2>
                  </div>
                  <Link to="/portfolio">
                    <Button variant="outline" size="lg">
                      View all projects
                    </Button>
                  </Link>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                  {projects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                  ))}
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

export default HomePage;