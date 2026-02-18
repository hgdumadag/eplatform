import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useChildStore } from './stores/childStore';
import { useUserStore } from './stores/userStore';
import { useProgressStore } from './stores/progressStore';
import { useAssignmentStore } from './stores/assignmentStore';
import { Layout } from './components/Layout';
import { Login } from './components/Login';
import { ChildSelector } from './components/ChildSelector';
import { LessonList } from './components/LessonList';
import { LessonViewer } from './components/LessonViewer';
import { ExamViewer } from './components/ExamViewer';
import { ParentDashboard } from './components/ParentDashboard';
import { ContentUpload } from './components/ContentUpload';
import './App.css';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { currentUser } = useUserStore();
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}

function ParentProtectedRoute({ children }: { children: React.ReactNode }) {
  const { currentUser } = useUserStore();
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  if (currentUser.role !== 'parent' && currentUser.role !== 'admin') {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
}

function ChildSelectedRoute({ children }: { children: React.ReactNode }) {
  const { currentUser } = useUserStore();
  const { activeChild } = useChildStore();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // Children auto-select their child, but parents might not have one selected
  if ((currentUser.role === 'parent' || currentUser.role === 'admin') && !activeChild) {
    return <Navigate to="/select-child" replace />;
  }

  return <>{children}</>;
}

function App() {
  const { currentUser, isAuthReady, initializeAuth } = useUserStore();
  const { children, activeChild, loadChildren, selectChild } = useChildStore();
  const { setActiveChild, loadChildProgress } = useProgressStore();
  const { loadAssignments } = useAssignmentStore();

  useEffect(() => {
    void initializeAuth();
  }, [initializeAuth]);

  useEffect(() => {
    if (!currentUser) {
      return;
    }
    void loadChildren(currentUser.id, currentUser.role);
  }, [currentUser, loadChildren]);

  useEffect(() => {
    if (!currentUser || currentUser.role !== 'child' || !currentUser.assignedChildId) {
      return;
    }
    selectChild(currentUser.assignedChildId);
    setActiveChild(currentUser.assignedChildId);
  }, [currentUser, selectChild, setActiveChild]);

  useEffect(() => {
    if (children.length === 0) {
      useAssignmentStore.setState({ assignments: {} });
      return;
    }
    void loadAssignments(children.map((child) => child.id));
  }, [children, loadAssignments]);

  useEffect(() => {
    if (!activeChild?.id) {
      return;
    }
    void loadChildProgress(activeChild.id);
  }, [activeChild, loadChildProgress]);

  if (!isAuthReady) {
    return <div className="loading">Loading session...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />

        {/* Parent-only routes */}
        <Route
          path="/select-child"
          element={
            <ParentProtectedRoute>
              <ChildSelector />
            </ParentProtectedRoute>
          }
        />

        <Route
          path="/parent/dashboard"
          element={
            <ParentProtectedRoute>
              <Layout>
                <ParentDashboard />
              </Layout>
            </ParentProtectedRoute>
          }
        />

        <Route
          path="/parent/upload"
          element={
            <ParentProtectedRoute>
              <Layout>
                <ContentUpload />
              </Layout>
            </ParentProtectedRoute>
          }
        />

        {/* Main app routes - require authentication and active child */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ChildSelectedRoute>
                <Layout>
                  <LessonList />
                </Layout>
              </ChildSelectedRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/lesson/:grade/:subject/:quarter/:topicName"
          element={
            <ProtectedRoute>
              <ChildSelectedRoute>
                <Layout>
                  <LessonViewer />
                </Layout>
              </ChildSelectedRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/exam/:grade/:subject/:quarter/:topicName"
          element={
            <ProtectedRoute>
              <ChildSelectedRoute>
                <Layout>
                  <ExamViewer />
                </Layout>
              </ChildSelectedRoute>
            </ProtectedRoute>
          }
        />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
