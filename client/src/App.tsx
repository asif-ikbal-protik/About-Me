import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
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
        <Router hook={useHashLocation}>
          <Switch>
            <Route path="/" component={Home} />
            {/* The :rest path will match anything else and show the NotFound component */}
            <Route path="/:rest*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;