
import React from 'react';

const iconProps = {
  className: "w-7 h-7",
  strokeWidth: 2,
};

export const LightbulbIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69a.75.75 0 01.819.162l1.305 1.305a.75.75 0 01-.256 1.285 10.5 10.5 0 01-3.163.69A10.5 10.5 0 0112 21c-5.798 0-10.5-4.702-10.5-10.5 0-1.79.448-3.47 1.256-4.943L2.718 3.528a.75.75 0 011.285-.256l1.305 1.305c.245-.245.54-.45.86-.632zM15 6a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const TargetIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a12.012 12.012 0 00-5.84-2.56v4.82m5.84 0l-1.13-1.13m1.13 1.13l1.13 1.13m-2.26 0l-1.13-1.13m1.13 1.13l-1.13 1.13M12 21a9 9 0 110-18 9 9 0 010 18z" />
  </svg>
);

export const ThumbsDownIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.95a.75.75 0 0 1 .999.054l2.25 2.5a.75.75 0 0 1-.554 1.246H10.5v1.5a.75.75 0 0 1-1.5 0v-1.5H8.25a.75.75 0 0 1-.554-1.246l2.25-2.5a.75.75 0 0 1 .104-.108Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5v-1.5h3.375a.75.75 0 0 1 .554 1.246l-2.25 2.5a.75.75 0 0 1-1.154-.054l-.5-1.5a.75.75 0 0 0-1.4.12l-1.25 5.25a.75.75 0 0 0 .614.861l9.167 2.112a.75.75 0 0 0 .862-.614l1.25-5.25a.75.75 0 0 0-.12-1.4l-1.5-.5a.75.75 0 0 0-.554.054l-2.5 2.25a.75.75 0 0 1-1.246-.554V10.5Z" />
    </svg>
);


export const WrenchIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.726 1.216-1.007a7.5 7.5 0 00-4.242-4.243c-.282.476-.623.9-1.007 1.216L9.42 9.42m2 5.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.42 9.42l-5.877 5.877A2.652 2.652 0 013 17.25l5.877-5.877m0 0l2.496 3.03" />
  </svg>
);
