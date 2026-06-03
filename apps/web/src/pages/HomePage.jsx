import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const HomePage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      toast({
        title: 'Message sent',
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const projects = [
    {
      year: '2025',
      category: 'Python, AI & Medical',
      title: 'COVID-19 Classification',
      description: 'Built a predictive model to classify COVID-19 patient outcomes using structured medical and epidemiological data.',
      highlights: [
        { label: 'Predictive', value: 'Case outcomes' },
        { label: 'Deployment', value: 'Ready model pipeline' },
      ],
      icon: BarChart2,
    },
    {
      year: '2024',
      category: 'Sports Analytics & Machine Learning',
      title: 'IPL Win Prediction',
      description: 'Designed an outcome prediction engine for IPL matches by combining team metrics, historical results, and advanced feature engineering.',
      highlights: [
        { label: 'Analytics', value: 'Match predictions' },
        { label: 'Insights', value: 'Winning trends' },
      ],
      icon: TrendingUp,
    },
    {
      year: '2024',
      category: 'NLP & Sentiment Analysis',
      title: 'Sentiment Analysis',
      description: 'Created a sentiment classifier that evaluates textual feedback to help businesses understand user sentiment at scale.',
      highlights: [
        { label: 'Text', value: 'Sentiment classification' },
        { label: 'Automation', value: 'Pipeline scoring' },
      ],
      icon: Zap,
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
                      Recent technical projects with data-driven impact.
                    </h2>
                  </div>
                  <Link to="/portfolio">
                    <Button variant="outline" size="lg">
                      View all projects
                    </Button>
                  </Link>
                </div>

                <div className="space-y-8">
                  {projects.map((project, index) => {
                    const Icon = project.icon;
                    const topOffsets = ['lg:top-24', 'lg:top-28', 'lg:top-32'];
                    return (
                      <div
                        key={project.title}
                        className={`group sticky ${topOffsets[index]} bg-card rounded-[2rem] p-8 md:p-12 border border-border shadow-sm hover:shadow-2xl hover:border-rose-200 dark:hover:border-rose-300 transition-all duration-500 transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/90 hover:to-rose-100/80 dark:hover:from-slate-900/80 dark:hover:to-rose-950/60 cursor-pointer`}
                      >
                        <div className="flex flex-col lg:flex-row justify-between gap-8">
                          <div className="max-w-3xl">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 text-sm text-muted-foreground">
                              <span className="inline-flex items-center gap-2 bg-muted text-foreground px-3 py-1 rounded-full font-medium">
                                {project.year}
                              </span>
                              <span className="font-medium text-foreground/70">{project.category}</span>
                            </div>

                            <h3 className="text-3xl md:text-4xl text-foreground font-semibold mb-6 group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-base text-muted-foreground leading-relaxed mb-8">
                              {project.description}
                            </p>

                            <div className="flex flex-wrap gap-12 text-foreground/70 dark:text-foreground/70">
                              {project.highlights.map((highlight) => (
                                <div key={highlight.value} className="transition-transform duration-300 group-hover:translate-x-2">
                                  <div className="text-lg font-semibold text-primary">{highlight.label}</div>
                                  <div className="text-sm text-muted-foreground mt-1">{highlight.value}</div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex-shrink-0 rounded-full bg-muted p-5 shadow-sm border border-gray-200 transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                            <Icon className="h-8 w-8" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-20 bg-muted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
              >
                <div className="mb-10">
                  <p className="text-sm uppercase tracking-[0.3em] text-primary">Contact Me</p>
                  <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                    Have a project or question? Send me a message.
                  </h2>
                  <p className="text-lg text-foreground/80 leading-relaxed max-w-prose mt-4">
                    Send your details below and I’ll reach out shortly with next steps.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-[2rem] p-8 shadow-sm border border-border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="text-foreground dark:text-foreground placeholder:text-foreground/60 dark:placeholder:text-foreground/60"
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="text-slate-50 placeholder:text-slate-400 dark:text-slate-50 dark:placeholder:text-slate-400"
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this about?"
                          className="text-slate-50 placeholder:text-slate-400 dark:text-slate-50 dark:placeholder:text-slate-400"
                      />
                      {errors.subject && (
                        <p className="text-sm text-destructive">{errors.subject}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={6}
                          className="text-slate-50 placeholder:text-slate-400 dark:text-slate-50 dark:placeholder:text-slate-400 resize-none"
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full md:w-auto transition-all duration-200 active:scale-[0.98]"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </motion.div>
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