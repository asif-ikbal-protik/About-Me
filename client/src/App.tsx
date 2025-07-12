import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {/*
          The Router component tells all child routes to work from this base path.
          This is the standard fix for deploying to a sub-folder like /About-Me/.
        */}
        <Router base="/About-Me">
          <Switch>
            <Route path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;