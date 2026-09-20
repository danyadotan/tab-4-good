import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useThemeSync from '@/hooks/useThemeSync';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
// Add page imports here
import Home from '@/pages/Home';
import FAQ from '@/pages/FAQ';
import UseCases from '@/pages/UseCases';
import Glossary from '@/pages/Glossary';
import ExecutiveSummary from '@/pages/ExecutiveSummary';
import InvestorQA from '@/pages/InvestorQA';
import StrategyOverview from '@/pages/StrategyOverview';
import OperationalRoadmap from '@/pages/OperationalRoadmap';
import Integrations from '@/pages/Integrations';
import Privacy from '@/pages/Privacy';

const PublicApp = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
      >
        <Routes location={location}>
          {/* Add your page Route elements here */}
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/executive-summary" element={<ExecutiveSummary />} />
          <Route path="/investor-qa" element={<InvestorQA />} />
          <Route path="/strategy-overview" element={<StrategyOverview />} />
          <Route path="/roadmap" element={<OperationalRoadmap />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};


function App() {
  useThemeSync();

  return (
    <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <PublicApp />
        </Router>
        <Toaster />
    </QueryClientProvider>
  )
}

export default App