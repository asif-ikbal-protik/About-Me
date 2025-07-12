import { Switch, Route, Router } from "wouter"; // 1. Import Router from wouter
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// 2. Rename your component to avoid a conflict
function AppRouter() {
  return (
    // 3. Wrap everything in the Router component with the basepath
    <Router basepath="/About-Me">
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter /> {/* 4. Use the new component name here */}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;