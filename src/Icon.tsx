import React from 'react';

interface IconProps {
  icon: React.ReactNode;
  color?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ icon, color, className }) => {
  return (
    <div className={className} style={{ color: color || 'currentColor' }}>
      {icon}
    </div>
  );
};
