import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Hero: FC = memo(() => (
  <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat" 
    style={{ backgroundImage: 'url("https://ik.imagekit.io/sackoba/MainBuildingWithGround.jpg?updatedAt=1734610625018")' }}>

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/50" />
    
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-primary-600/80 to-primary-700/70" /> 
    
    <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
      <motion.img 
        src="https://ik.imagekit.io/sackoba/logos/sackoba-qatar-logo.png?updatedAt=1735206623574"
        alt="SACKOBA Logo"
        className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-6 relative
          filter brightness-110 contrast-110"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.7
        }}
      />
      
      <motion.h1 
        className="text-3xl md:text-5xl lg:text-6xl font-normal text-white mb-4 font-['UnifrakturMaguntia'] tracking-wide flex flex-col hero-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <span>St. Anthony's College</span>
        <span>Old Boys' Association - Qatar</span>
      </motion.h1>

      <motion.p 
        className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 hero-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        Since 2009
      </motion.p>

      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <Link 
          to="/about"
          className="inline-block px-8 py-3 bg-white text-[#000000] font-semibold rounded-full hover:bg-[#B1B3CE] hover:text-white transition-all relative 
          before:content-[''] before:absolute before:-inset-[2px] before:bg-gradient-to-r before:from-[#541D67] before:to-[#B62D71] before:rounded-full before:-z-10
          hover:transform hover:scale-105 hover:shadow-lg"
        >
          Learn More
        </Link>
      </motion.div>
    </div>
  </section>
));
