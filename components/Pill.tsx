
import React from 'react';

interface PillProps {
  text: string;
  color?: 'purple' | 'yellow';
}

const Pill: React.FC<PillProps> = ({ text, color = 'purple' }) => {
  const colorClasses = {
    purple: 'bg-violet-200 text-violet-800 border-violet-300',
    yellow: 'bg-yellow-200 text-yellow-800 border-yellow-300',
  };

  return (
    <span className={`px-4 py-1.5 text-base font-semibold rounded-full border ${colorClasses[color]}`}>
      {text}
    </span>
  );
};

export default Pill;
