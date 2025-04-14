import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { CustomCursor } from "./components/CustomCursor";
import { pageTransition } from "./lib/animations";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <CustomCursor />
    <AnimatePresence mode="wait">
      <motion.div
        className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white"
        {...pageTransition}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </motion.div>
    </AnimatePresence>
  </TooltipProvider>
);

export default App;
