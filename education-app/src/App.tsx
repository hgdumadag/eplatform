import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useChildStore } from './stores/childStore';
import { Layout } from './components/Layout';
import { ChildSelector } from './components/ChildSelector';
import { LessonList } from './components/LessonList';
import { LessonViewer } from './components/LessonViewer';
import { ExamViewer } from './components/ExamViewer';
import { ParentDashboard } from './components/ParentDashboard';
import './App.css';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { activeChild } = useChildStore();

  if (!activeChild) {
    return <Navigate to="/select-child" replace />;
  }

  return <>{children}</>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Child selection - no layout */}
        <Route path="/select-child" element={<ChildSelector />} />

        {/* Main app routes - with layout and protection */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout>
                <LessonList />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/lesson/:grade/:subject/:quarter/:topicName"
          element={
            <ProtectedRoute>
              <Layout>
                <LessonViewer />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/exam/:grade/:subject/:quarter/:topicName"
          element={
            <ProtectedRoute>
              <Layout>
                <ExamViewer />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/parent/dashboard"
          element={
            <Layout>
              <ParentDashboard />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
