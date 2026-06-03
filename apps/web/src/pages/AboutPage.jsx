import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BarChart2, Cpu, TrendingUp, PieChart, MessageCircle, Lightbulb, Users, Rocket, Target } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SkillBadge from '@/components/SkillBadge.jsx';
import ExperienceItem from '@/components/ExperienceItem.jsx';

const AboutPage = () => {
  const skills = [
    { name: 'Data Science', icon: BarChart2 },
    { name: 'Machine Learning', icon: Cpu },
    { name: 'Analytics', icon: TrendingUp },
    { name: 'Data Visualization', icon: PieChart },
    { name: 'Natural Language Processing', icon: MessageCircle },
    { name: 'Statistical Analysis', icon: TrendingUp },
    { name: 'Strategic Planning', icon: Lightbulb },
    { name: 'Team Leadership', icon: Users },
  ];

  const experiences = [
    {
      role: 'Python Intern',
      company: 'Global Tech Solutions',
      period: 'Jun 2019 - Feb 2021',
      description: 'Developed data processing scripts and machine learning models to analyze customer behavior. Created interactive dashboards using Plotly and Dash to visualize key metrics for stakeholders.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About - Portfolio</title>
        <meta name="description" content="Learn about my background, skills, and professional experience in web development and design" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Profile Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="order-2 md:order-1"
                >
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>
                    <span className="text-balance">About Me</span>
                  </h1>
                  <div className="space-y-4 text-base text-muted-foreground leading-relaxed max-w-prose">
                    <p>
                      I'm a data science and machine learning enthusiast with a passion for leveraging data to drive insights and build intelligent solutions.
                    </p>
                    <p>
                      With a strong background in data science and machine learning, I am dedicated to delivering impactful results through innovative approaches and cutting-edge technologies.
                    </p>
                    <p>
                      I specialize in creating data-driven solutions that help businesses make informed decisions. Whether it's building predictive models, developing analytics dashboards, or extracting insights from complex datasets, I am committed to using data to solve real-world problems.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="order-1 md:order-2"
                >
                  <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="/profile-1024.webp 1024w, /profile-640.webp 640w, /profile-320.webp 320w"
                          sizes="(max-width: 768px) 320px, 640px"
                        />
                        <img
                          src="/profile.jpg"
                          alt="Professional headshot"
                          className="w-full h-full object-cover"
                          width="1024"
                          height="1024"
                          loading="eager"
                          decoding="async"
                          fetchPriority="high"
                        />
                      </picture>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="py-20 bg-muted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-balance">
                  Skills & expertise
                </h2>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <SkillBadge skill={skill.name} icon={skill.icon} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl md:text-3xl font-semibold text-foreground mb-12 text-balance"
                >
                  Professional experience
                </motion.h2>
                <div className="space-y-0">
                  {experiences.map((exp, index) => (
                    <ExperienceItem
                      key={index}
                      role={exp.role}
                      company={exp.company}
                      period={exp.period}
                      description={exp.description}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;