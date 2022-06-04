import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import ErrorBoundary from "components/ErrorBoundary";
import { FullPageSpinner } from "components/Loaders";
import routes from "./routes/routesList";

export const UserContext = React.createContext();
UserContext.displayName = "UserContext";

function App() {
  const defaultUser = {
    name: `Onyinye`,
    age: 24,
    showResults: true,
    quizComplete: false
  };

  const defaultQuiz = {
    daterType: null,
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    // Questions 5-10 are the only ones that may get shown on user's profile
    q5: null,
    q6: null,
    q7: null,
    q8: null,
    q9: null,
    q10: null
  };

  const [userData, setUserData] = React.useState(defaultUser);
  const [quizData, setQuizData] = React.useState(defaultQuiz);

  return (
    <UserContext.Provider value={{ userData, setUserData, quizData, setQuizData }}>
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
    </UserContext.Provider>
  );
}

export default App;
