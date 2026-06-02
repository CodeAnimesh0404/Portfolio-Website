import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';

const PortfolioPage = () => {
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
        <title>Portfolio - My Work</title>
        <meta name="description" content="Explore my portfolio of data science and machine learning projects" />
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
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>
                  <span className="text-balance">Selected work</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-prose">
                  A collection of projects that showcase my skills and experience in data science and machine learning. Each project highlights my ability to apply data-driven solutions to real-world problems.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
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

export default PortfolioPage;