import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import Index from "./pages/Index.tsx";
import CV from "./pages/CV.tsx";
import Projets from "./pages/Projets.tsx";
import MapPage from "./pages/MapPage";
import NotFound from "./pages/NotFound.tsx";
import { Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;