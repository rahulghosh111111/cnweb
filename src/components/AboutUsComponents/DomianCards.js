import React from 'react';
import Link from 'next/link';
import { 
  BrainCircuit, 
  Code, 
  LineChart, 
  AppWindow, 
  Database, 
  ShieldCheck,
  Shield, 
  Cloud,
  ArrowUpRight,
  LayoutGrid,
  Settings,
  SquareCode,
  WifiHigh,
  Sparkles,
  Smartphone,
  Users,
  ClipboardList
} from 'lucide-react';

const DomainCard = ({ domain }) => {
  const getIcon = () => {
    switch(domain.icon) {
      case 'BrainCircuit': return <BrainCircuit className="w-8 h-8" />;
      case 'LineChart': return <LineChart className="w-8 h-8" />;
      case 'Code': return <Code className="w-8 h-8" />;
      case 'AppWindow': return <AppWindow className="w-8 h-8" />;
      case 'Database': return <Database className="w-8 h-8" />;
      case 'ShieldCheck': return <ShieldCheck className="w-8 h-8" />;
      case 'Shield': return <Shield className="w-8 h-8" />;
      case 'Cloud': return <Cloud className="w-8 h-8" />;
      case 'LayoutGrid': return <LayoutGrid className="w-8 h-8" />;
      case 'Settings': return <Settings className="w-8 h-8" />;
      case 'SquareCode': return <SquareCode className="w-8 h-8" />;
      case 'WifiHigh': return <WifiHigh className="w-8 h-8" />;
      case 'Smartphone': return <Smartphone className="w-8 h-8" />;
      case 'Users': return <Users className="w-8 h-8" />;
      case 'ClipboardList': return <ClipboardList className="w-8 h-8" />;
      default: return <Code className="w-8 h-8" />;
    }
  };

  return (
    <div className="group h-full">
      <div className="relative h-full flex flex-col bg-[#121111] overflow-hidden rounded-xl shadow-sm 
                   border border-gray-100/5 dark:border-gray-800/40 transition-all duration-300
                   hover:shadow-xl hover:shadow-[#fa5935]/5 hover:border-gray-700/30 dark:hover:border-gray-700/50
                   transform hover:-translate-y-1">
        
        {/* Top section with icon and decorative elements */}
        <div className={`relative px-6 pt-6 pb-8 ${domain.colors.topBg}`}>
          {/* Circle decorations */}
          <div className={`absolute -right-6 -top-6 w-20 h-20 rounded-full ${domain.colors.circle1}`}></div>
          <div className={`absolute right-12 top-12 w-8 h-8 rounded-full ${domain.colors.circle2}`}></div>
          
          {/* Domain icon with highlighting */}
          <div className="relative">
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#1a1616] to-[#0c0c0c] ${domain.colors.iconText}`}>
              {getIcon()}
            </div>
            <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1.5 
                           ${domain.colors.iconShadow} rounded-full blur-md`}></div>
          </div>
        </div>
        
        {/* Content section */}
        <div className="flex-1 px-6 pb-6 pt-4">
          <h3 className={`text-xl font-bold text-gray-100 dark:text-white mb-2 
                        transition-colors duration-300 ${domain.colors.titleHover}`}>
            {domain.title}
          </h3>
          
          <p className="text-gray-400 dark:text-gray-300 text-sm mb-4">
            {domain.description}
          </p>
          
          {/* Technologies section */}
          {domain.technologies && (
            <div className="mb-5">
             
              <div className="flex flex-wrap gap-2">
                {domain.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className={`text-xs font-medium px-2.5 py-1 rounded-full 
                              border border-[#fa5935]/30 text-[#fa5935]/80
                              transition-all duration-300 cursor-default`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Apply now button with simple hash link */}
          <div className="mt-auto pt-1">
            <Link 
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-300 dark:text-white 
                        transition-colors duration-300 group-hover:text-[#fa5935] dark:group-hover:text-[#fa5935] 
                        relative">
              <span className='text-base'>Apply now</span>
              <div className={`ml-2 p-1 rounded-full ${domain.colors.btnBg} ${domain.colors.btnBgHover}
                             transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-0.5`}>
                <ArrowUpRight className={`w-3.5 h-3.5 ${domain.colors.btnIcon}`} />
              </div>
              
              {/* Fixed animated underline */}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${domain.colors.underline}
                             group-hover:w-full transition-all duration-300 ease-in-out`}></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainCard;
