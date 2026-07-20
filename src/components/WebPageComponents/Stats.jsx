import React, { useState } from 'react';
import statsBg1 from '../../assets/image 13.png';
import statsBg2 from '../../assets/image 14.png';
import howAreWeDoingIcon from '../../assets/icons/HowAreWeDoing.png';

export default function Stats() {
  const [projectsCount, setProjectsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Targets
  const targetProjects = 48;
  const targetSatisfaction = 100;

  const triggerAnimation = () => {
    if (hasAnimated) return;
    setHasAnimated(true);

    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setProjectsCount(Math.min(Math.round((targetProjects / steps) * currentStep), targetProjects));
      setSatisfactionCount(Math.min(Math.round((targetSatisfaction / steps) * currentStep), targetSatisfaction));
      
      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepTime);
  };

  const handleCardClick = () => {
    if (!hasAnimated) {
      triggerAnimation();
    } else {
      if (projectsCount === targetProjects) {
        setProjectsCount(prev => prev + 1);
      }
    }
  };

  return (
    <section className="py-16 px-[5%] bg-light-bg text-center">
      <h2 className="text-3xl md:text-[2.2rem] font-extrabold mb-12 text-slate-900 flex items-center justify-center gap-3">
        <img src={howAreWeDoingIcon} alt="" className="w-9 h-9 object-contain" />
        How are we doing?{' '}
        <span 
          className="font-script text-orange-500 text-2xl sm:text-3xl cursor-pointer hover:text-orange-500/80 ml-2 transition-colors duration-300 select-none normal-case font-normal"
          onClick={triggerAnimation}
          title="Click to animate counter metrics!"
        >
          Click to find out
        </span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
        {/* Projects Done */}
        <div 
          className="h-[200px] sm:h-[250px] rounded-2xl overflow-hidden relative bg-cover bg-center flex items-center justify-between p-5 sm:p-10 text-white shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer select-none group" 
          style={{ backgroundImage: `url(${statsBg1})` }}
          onClick={handleCardClick}
          title={hasAnimated ? "Click to increment projects done!" : "Click to find out!"}
        >
          <div className="absolute inset-0 bg-blue-900/45 z-10"></div>
          <div className="relative z-20 flex flex-col items-start max-w-[45%]">
            <h3 className="text-lg sm:text-[1.8rem] font-bold leading-snug text-left">Projects Completed</h3>
          </div>
          <div className="relative z-20 flex items-center gap-2 sm:gap-6">
            <svg 
              className="w-8 h-8 sm:w-14 sm:h-14 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shrink-0"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#F87400" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
              <path d="M9 18h6"/>
              <path d="M10 22h4"/>
            </svg>
            <span className="text-4xl sm:text-7xl lg:text-8xl font-extrabold leading-none text-orange-500">{projectsCount}</span>
          </div>
        </div>

        {/* Customer Satisfaction */}
        <div 
          className="h-[200px] sm:h-[250px] rounded-2xl overflow-hidden relative bg-cover bg-center flex items-center justify-between p-5 sm:p-10 text-white shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer select-none group" 
          style={{ backgroundImage: `url(${statsBg2})` }}
          onClick={handleCardClick}
          title={hasAnimated ? "Satisfaction count!" : "Click to find out!"}
        >
          <div className="absolute inset-0 bg-orange-500/35 z-10"></div>
          <div className="relative z-20 flex flex-col items-start max-w-[45%]">
            <h3 className="text-lg sm:text-[1.8rem] font-bold leading-snug text-left">Customer's Satisfied</h3>
          </div>
          <div className="relative z-20 flex items-center gap-2 sm:gap-6">
            <svg 
              className="w-8 h-8 sm:w-14 sm:h-14 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shrink-0"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#001186" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
              <line x1="9" x2="9.01" y1="9" y2="9"/>
              <line x1="15" x2="15.01" y1="9" y2="9"/>
            </svg>
            <span className="text-4xl sm:text-7xl lg:text-8xl font-extrabold leading-none text-blue-700">{satisfactionCount}%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
