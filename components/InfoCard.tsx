import React from 'react';

interface InfoCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'yellow';
}

const InfoCard: React.FC<InfoCardProps> = ({ title, icon, children, className = '', variant = 'default' }) => {
  const variantStyles = {
    default: {
      bg: 'bg-white/40',
      border: 'border-white/20',
      iconColor: 'text-violet-600',
      titleColor: 'text-slate-800',
    },
    yellow: {
      bg: 'bg-yellow-100/60',
      border: 'border-yellow-200/60',
      iconColor: 'text-yellow-900',
      titleColor: 'text-yellow-950',
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className={`${styles.bg} ${styles.border} backdrop-blur-md rounded-3xl p-4 md:p-6 shadow-lg flex flex-col ${className}`}>
      <div className="flex items-center mb-3 md:mb-4">
        {icon && <div className={`${styles.iconColor} mr-3`}>{icon}</div>}
        <h3 className={`text-lg md:text-xl font-bold ${styles.titleColor}`}>{title}</h3>
      </div>
      <div className="flex-grow text-base md:text-lg">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;