
import React from 'react';

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
};

export const BrainIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.97-3.44 2.5 2.5 0 0 1-2.02-3.32A2.5 2.5 0 0 1 4.5 8H6a2.5 2.5 0 0 1 2-4.5ZM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.97-3.44 2.5 2.5 0 0 0 2.02-3.32A2.5 2.5 0 0 0 19.5 8H18a2.5 2.5 0 0 0-2-4.5Z" />
  </svg>
);

export const HeartIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

export const ZapIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export const PhoenixIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4c-3.33 4-8 4-8 10 0 2.2 1.8 4 4 4 2.2 0 4-1.8 4-4 0-5.5-4.5-5.5-4.5-10C7.5 7 12 4 12 4zM16.5 14c0-5.5-4.5-5.5-4.5-10 0 0 4.5 3 4.5 10a4 4 0 0 1-8 0"/>
        <path d="M12 22a4 4 0 0 0 4-4c0-5.5-4.5-5.5-4.5-10" />
    </svg>
);

export const WandIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 4V2"/>
        <path d="M15 8V6"/>
        <path d="M15 12V10"/>
        <path d="M15 16V14"/>
        <path d="M15 20V18"/>
        <path d="M3 12h12"/>
        <path d="m21 12-6-6"/>
        <path d="m21 12-6 6"/>
    </svg>
);

export const TreeIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V10"/>
    <path d="M5 10h14"/>
    <path d="m12 10-4 4-2-2"/>
    <path d="m12 10 4 4 2-2"/>
    <path d="m12 10-4-4-2 2"/>
    <path d="m12 10 4-4 2 2"/>
  </svg>
);
