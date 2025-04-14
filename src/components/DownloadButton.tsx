import { motion } from "framer-motion";
import { useState } from "react";

const ResumeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className="group-hover:translate-y-[-2px] transition-transform"
  >
    <path
      d="M20 7H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="11"
      r="2"
      strokeWidth="1.5"
    />
    <path
      d="M8 17h8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface DownloadButtonProps {
  initialCount?: number;
  resumeUrl: string;
}

export const DownloadButton = ({ initialCount = 17, resumeUrl }: DownloadButtonProps) => {
  const [downloadCount, setDownloadCount] = useState(initialCount);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleDownload = async () => {
    try {
      // Increment the counter with animation
      setIsAnimating(true);
      setDownloadCount(prev => prev + 1);

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Stuti_Dutta_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset animation state after a delay
      setTimeout(() => setIsAnimating(false), 1000);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  return (
    <motion.button
      onClick={handleDownload}
      className="btn-outline w-full sm:w-auto flex items-center gap-2 group relative overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <ResumeIcon />
      Download Resume
      <motion.span
        className="absolute -right-2 -top-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
        animate={{
          scale: isAnimating ? [1, 1.2, 1] : 1,
          rotate: isAnimating ? [0, 10, -10, 0] : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        {downloadCount}
      </motion.span>
    </motion.button>
  );
}; 