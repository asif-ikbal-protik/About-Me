import { Switch, Route, Router, useLocation } from "wouter"; // 1. Import useLocation
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function AppRouter() {
  const [location] = useLocation();

  // Add the ': string' type annotation here
  const nested = (path: string) => `${location}${path}`.replace(/\/+/g, "/");

  return (
    <Switch>
      <Route path={nested("/")} component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;