import { useNavigate } from 'react-router-dom';
import { useChildStore } from '../stores/childStore';
import { useProgressStore } from '../stores/progressStore';
import './ChildSelector.css';

export function ChildSelector() {
  const navigate = useNavigate();
  const { children, selectChild } = useChildStore();
  const setActiveChild = useProgressStore(state => state.setActiveChild);

  const handleSelectChild = (childId: string) => {
    selectChild(childId);
    setActiveChild(childId);
    // Navigate to home after selecting child
    navigate('/');
  };

  return (
    <div className="child-selector">
      <div className="child-selector-container">
        <h1>Welcome to Your Learning Portal</h1>
        <p className="child-selector-subtitle">Select your profile to continue</p>

        <div className="child-cards">
          {children.map((child) => (
            <button
              key={child.id}
              className="child-card"
              onClick={() => handleSelectChild(child.id)}
            >
              <div className="child-avatar">
                {child.name.charAt(0)}
              </div>
              <h2>{child.name}</h2>
              <p className="child-grade">Grade {child.grade}</p>
            </button>
          ))}
        </div>

        <p className="parent-note">
          Parents: Access the dashboard from the menu after selecting a child
        </p>
      </div>
    </div>
  );
}
