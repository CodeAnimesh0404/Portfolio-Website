import React from 'react';
import { Badge } from '@/components/ui/badge';

const SkillBadge = ({ skill, icon: Icon }) => {
  return (
    <Badge 
      variant="secondary" 
      className="px-4 py-2 text-sm font-medium flex items-center gap-2 transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
    >
      {Icon && <Icon className="w-4 h-4" />}
      {skill}
    </Badge>
  );
};

export default SkillBadge;