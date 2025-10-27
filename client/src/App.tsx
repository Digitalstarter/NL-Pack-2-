import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingPhone from "@/components/FloatingPhone";
import Home from "@/pages/Home";
import Assortiment from "@/pages/Assortiment";
import Diensten from "@/pages/Diensten";
import OverOns from "@/pages/OverOns";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import { useScrollToTopOnRouteChange } from "@/hooks/useScrollToTopOnRouteChange";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/assortiment" component={Assortiment} />
      <Route path="/diensten" component={Diensten} />
      <Route path="/over-ons" component={OverOns} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useScrollToTopOnRouteChange();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <ScrollToTop />
        <FloatingPhone />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
