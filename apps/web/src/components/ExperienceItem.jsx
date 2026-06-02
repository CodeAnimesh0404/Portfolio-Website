import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const ExperienceItem = ({ role, company, period, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background" />
      <div className="flex items-start gap-3 mb-2">
        <div className="p-2 rounded-lg bg-muted">
          <Briefcase className="w-4 h-4 text-muted-foreground" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">{role}</h3>
          <p className="text-sm font-medium text-muted-foreground">{company}</p>
          <p className="text-xs text-muted-foreground mt-1">{period}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mt-3">{description}</p>
    </motion.div>
  );
};

export default ExperienceItem;