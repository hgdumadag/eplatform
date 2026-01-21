import { type ReactNode, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useChildStore } from '../stores/childStore';
import { useUserStore } from '../stores/userStore';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { activeChild } = useChildStore();
  const { currentUser, canSwitchChildren, logout } = useUserStore();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleSwitchChild = () => {
    navigate('/select-child');
    setShowMenu(false);
  };

  const handleParentDashboard = () => {
    navigate('/parent/dashboard');
    setShowMenu(false);
  };

  const handleUploadContent = () => {
    navigate('/parent/upload');
    setShowMenu(false);
  };

  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>📚 Education Platform</h1>
          </Link>
          <div className="header-right">
            {currentUser && (
              <>
                <span className="user-info">
                  {currentUser.name}
                  {activeChild && ` → ${activeChild.name} (Grade ${activeChild.grade})`}
                </span>
                <button
                  className="menu-button"
                  onClick={() => setShowMenu(!showMenu)}
                  aria-label="Menu"
                >
                  ☰
                </button>
                {showMenu && (
                  <div className="dropdown-menu">
                    {canSwitchChildren() && (
                      <button onClick={handleSwitchChild}>Switch Child</button>
                    )}

                    {currentUser.role === 'parent' && (
                      <>
                        <button onClick={handleParentDashboard}>Parent Dashboard</button>
                        <button onClick={handleUploadContent}>Upload Content</button>
                      </>
                    )}

                    <button onClick={() => { logout(); navigate('/login'); }}>
                      Logout
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </header>
      <main className="main-content">{children}</main>
    </div>
  );
}
