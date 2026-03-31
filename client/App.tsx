import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Suspense, lazy } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

// Lazy load other pages for performance
const NotFound = lazy(() => import("./pages/NotFound"));
const OProjeKtu = lazy(() => import("./pages/OProjeKtu"));
const Program = lazy(() => import("./pages/Program"));
const Rezultati = lazy(() => import("./pages/Rezultati"));
const Partneri = lazy(() => import("./pages/Partneri"));
const Galerija = lazy(() => import("./pages/Galerija"));
const Kontakt = lazy(() => import("./pages/Kontakt"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-gray-600 font-semibold">Učitavanje...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/o-projektu" element={<OProjeKtu />} />
            <Route path="/program" element={<Program />} />
            <Route path="/aktivnosti" element={<Program />} />
            <Route path="/rezultati" element={<Rezultati />} />
            <Route path="/novosti" element={<Rezultati />} />
            <Route path="/partneri" element={<Partneri />} />
            <Route path="/galerija" element={<Galerija />} />
            <Route path="/kontakt" element={<Kontakt />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

let root: ReturnType<typeof createRoot> | null = null;

function render() {
  const rootElement = document.getElementById("root");
  if (!rootElement) return;

  if (!root) {
    root = createRoot(rootElement);
  }
  root.render(<App />);
}

render();

// Handle Vite HMR
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    render();
  });
}
