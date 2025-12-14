import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EvaluationProvider } from "@/contexts/EvaluationContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { AffirmativeLanguageProvider } from "@/contexts/AffirmativeLanguageContext";
import { NexusMusicProvider } from "@/contexts/NexusMusicContext";
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
import HaikuCuratorPage from "./pages/HaikuCuratorPage";
import EvaluationPage from "./pages/EvaluationPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <NexusMusicProvider>
        <AffirmativeLanguageProvider>
          <EvaluationProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/auth" element={<AuthPage />} />
                  <Route element={<AppLayout />}>
                    <Route path="/" element={<Index />} />
                    <Route path="/evaluation" element={<EvaluationPage />} />
                    <Route path="/results" element={<ProtectedRoute><ResultsPage /></ProtectedRoute>} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/principles" element={<PrinciplesPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/haiku-curator" element={<ProtectedRoute><HaikuCuratorPage /></ProtectedRoute>} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </EvaluationProvider>
        </AffirmativeLanguageProvider>
      </NexusMusicProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;