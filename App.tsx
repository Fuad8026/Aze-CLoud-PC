/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Server, Cpu, MonitorPlay } from 'lucide-react';

const TelegramIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.29-.48.79-.74 3.08-1.34 5.14-2.23 6.17-2.66 2.95-1.23 3.56-1.44 3.96-1.45.09 0 .28.02.41.11.11.08.15.19.16.27-.01.04-.01.13-.02.2z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
  </svg>
);

const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0f172a_0%,#030712_100%)]" />
      
      {/* Glowing Orbs */}
      <motion.div 
        animate={{ 
          x: [0, 50, -20, 0],
          y: [0, -30, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[15%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-teal-500/10 rounded-full blur-[100px]"
      />
      <motion.div 
        animate={{ 
          x: [0, -60, 30, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-purple-600/10 rounded-full blur-[120px]"
      />

      {/* Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0" />
            <stop offset="50%" stopColor="#2dd4bf" stopOpacity="1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="line-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
            <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Animated lines */}
        <motion.path 
          d="M-100,200 C300,300 400,100 800,200 S1200,300 1600,100" 
          fill="none" 
          stroke="url(#line-grad-1)" 
          strokeWidth="1.5"
          strokeDasharray="150 300"
          animate={{ strokeDashoffset: [450, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M1600,600 C1200,500 1100,700 700,600 S300,500 -100,700" 
          fill="none" 
          stroke="url(#line-grad-2)" 
          strokeWidth="1.5"
          strokeDasharray="100 250"
          animate={{ strokeDashoffset: [-350, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M200,-100 C300,300 100,500 400,900" 
          fill="none" 
          stroke="url(#line-grad-1)" 
          strokeWidth="1"
          strokeDasharray="80 200"
          animate={{ strokeDashoffset: [280, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Grid pattern */}
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

const FeatureCard = ({ icon, title, glowColor }: { icon: React.ReactNode, title: string, glowColor: string }) => {
  return (
    <motion.div 
      whileHover={{ 
        y: -8, 
        scale: 1.05,
        boxShadow: `0 15px 35px -5px ${glowColor}`
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group flex flex-col items-center text-center p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm overflow-hidden hover:border-white/20 hover:bg-white/[0.04] transition-colors duration-300"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)` }}
      />
      <div className="mb-6 p-4 rounded-full bg-white/[0.03] border border-white/[0.05] relative z-10 group-hover:scale-110 transition-transform duration-300 group-hover:border-white/20">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-200 relative z-10 group-hover:text-white transition-colors duration-300">{title}</h3>
    </motion.div>
  );
};

const SocialButton = ({ href, icon, label, glowClass, bgClass }: { href: string, icon: React.ReactNode, label: string, glowClass: string, bgClass: string }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center justify-center w-16 h-16 rounded-2xl border backdrop-blur-md transition-all duration-300 ${bgClass} ${glowClass}`}
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans overflow-hidden relative flex flex-col selection:bg-teal-500/30">
      <BackgroundEffects />

      {/* Header Logo & Navigation */}
      <header className="relative z-20 w-full p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-display font-black tracking-tighter flex items-center gap-2"
        >
          <span className="text-white">Aze</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">Cloud</span>
        </motion.div>

        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-6 text-sm font-medium text-gray-400"
        >
          <a href="#community" className="hover:text-white transition-colors">Community</a>
        </motion.nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-6 pb-12">
        {/* Hero Section */}
        <motion.div 
          id="hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-20 mt-8 md:mt-0 pt-10"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-sm">
            High-Performance <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-purple-500 drop-shadow-[0_0_20px_rgba(45,212,191,0.2)]">
              Cloud Gaming
            </span>
            <br className="hidden md:block" /> for Azerbaijan
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Play AAA games on any device, with low latency. <br className="hidden md:block" />
            <span className="text-teal-400 font-medium inline-block mt-4 px-5 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/20 shadow-[0_0_15px_rgba(45,212,191,0.15)]">Starting soon!</span>
          </p>
        </motion.div>

        {/* Mid Section - Features */}
        <motion.div 
          id="features"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full pt-10"
        >
          <FeatureCard 
            icon={<Server className="w-8 h-8 text-teal-400" />}
            title="AWS-based, low-latency infrastructure"
            glowColor="rgba(45,212,191,0.15)"
          />
          <FeatureCard 
            icon={<Cpu className="w-8 h-8 text-purple-400" />}
            title="NVIDIA GPU-optimized performance"
            glowColor="rgba(168,85,247,0.15)"
          />
          <FeatureCard 
            icon={<MonitorPlay className="w-8 h-8 text-teal-400" />}
            title="Play directly on browser"
            glowColor="rgba(45,212,191,0.15)"
          />
        </motion.div>
      </main>

      {/* Footer Section */}
      <footer id="community" className="relative z-20 bg-[#020408]/80 backdrop-blur-xl border-t border-white/5 py-10 px-6 mt-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="flex space-x-6 mb-6">
            <SocialButton 
              href="https://t.me/azecloudgamingpc" 
              icon={<TelegramIcon />} 
              label="Telegram" 
              glowClass="shadow-[0_0_15px_rgba(45,212,191,0.4)] hover:shadow-[0_0_25px_rgba(45,212,191,0.8)]"
              bgClass="bg-teal-500/10 border-teal-500/30 text-teal-400"
            />
            <SocialButton 
              href="https://discord.gg/2EtfKNzJs" 
              icon={<DiscordIcon />} 
              label="Discord" 
              glowClass="shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]"
              bgClass="bg-purple-500/10 border-purple-500/30 text-purple-400"
            />
          </div>
          <p className="text-gray-500 text-xs md:text-sm tracking-widest uppercase font-semibold mb-6">
            Join our early adopters community!
          </p>
          <p className="text-gray-600 text-xs">
            &copy; 2026 AzeCloud
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
