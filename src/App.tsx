import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// ¡CAMBIO CLAVE AQUÍ! Usamos HashRouter para que la app se adapte al entorno
import { HashRouter, Routes, Route } from "react-router-dom"; 
import { EvaluationProvider } from "@/contexts/EvaluationContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { AffirmativeLanguageProvider } from "@/contexts/AffirmativeLanguageContext";
import { AppLayout } from "@/components/AppLayout";
import { ProtectedRoute } from "@/components/ProtectedRoute";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ResultsPage from "./pages/ResultsPage";
import AboutPage from "./pages/AboutPage";
import PrinciplesPage from "./pages/PrinciplesPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import AuthPage from "./pages/AuthPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <AffirmativeLanguageProvider>
        <EvaluationProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {/* ¡CAMBIO CLAVE AQUÍ! */}
            <HashRouter> 
            <Routes>
              <Route path="/auth" element={<AuthPage />} />
              <Route element={<AppLayout />}>
                <Route path="/" element={<Index />} />
                <Route path="/results" element={<ProtectedRoute><ResultsPage /></ProtectedRoute>} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/principles" element={<PrinciplesPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
            </HashRouter>
          </TooltipProvider>
        </EvaluationProvider>
      </AffirmativeLanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;