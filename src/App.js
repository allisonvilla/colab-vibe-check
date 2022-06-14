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
    daterType: null,
    daterDesc: null
  };

  const defaultQuiz = {
    // Compatibility questions (q1-q4)
    q1: {
      // These values are set in VibeQuestionComponent.js
      question: null, // Question asked
      answer: null, // User's answer
      type: null, // Dater type the question affected
      show: false, // Whether or not the user chooses to show this answer
      key: 1
    },
    q2: {
      question: null,
      answer: null,
      type: null,
      show: false,
      key: 2
    },
    q3: {
      question: null,
      answer: null,
      type: null,
      show: false,
      key: 3
    },
    q4: {
      question: null,
      answer: null,
      type: null,
      show: false,
      key: 4
    },
    q5: {
      question: null,
      answer: null,
      type: null,
      show: false,
      key: 5
    },
    // Conversation starters (q6-q10)
    q6: {
      question: null,
      answer: null,
      type: null,
      show: false,
      key: 6
    },
    q7: {
      question: null,
      answer: null,
      type: null,
      show: false,
      key: 7
    },
    q8: {
      question: null,
      answer: null,
      type: null,
      show: false,
      key: 8
    },
    q9: {
      question: null,
      answer: null,
      type: null,
      show: false,
      key: 9
    },
    q10: {
      question: null,
      answer: null,
      type: null,
      show: false,
      key: 10
    }
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
