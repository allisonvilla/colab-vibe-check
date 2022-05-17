import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import ErrorBoundary from "component/ErrorBoundary";
import { FullPageSpinner } from "component/Loaders";
import routes from "./routes/routesList";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<FullPageSpinner />}>
          <AppLayout>
            <Routes>
              {routes.map(({ component: Component, ...rest }, index) => (
                <Route element={<Component />} {...rest} key={`app-route-${index}`} />
              ))}
            </Routes>
          </AppLayout>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
