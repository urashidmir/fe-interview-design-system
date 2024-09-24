import { useState, useEffect } from 'react';
import './Tabs.scss'
import Tab from './Tab';
import { TabItem, TabVariant } from '../../types/tabs';


interface TabListProps {
  tabs: TabItem[]; 
  variant: TabVariant;
}

const TabList = ({ tabs, variant }: TabListProps) => {

  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);
  const [focusedTab, setFocusedTab] = useState<number>(tabs[0].id);

  // Function to handle tab click
  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    const currentIndex = tabs.findIndex(tab => tab.id === focusedTab);
    let newFocusedTabIndex = currentIndex;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      newFocusedTabIndex = (currentIndex + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      newFocusedTabIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      newFocusedTabIndex = 0;
    } else if (e.key === 'End') {
      newFocusedTabIndex = tabs.length - 1;
    } else if (e.key === 'Enter' || e.key === ' ') {
      setActiveTab(focusedTab); 
    }

    setFocusedTab(tabs[newFocusedTabIndex].id);
  };

  useEffect(() => {
    const focusedTabElement = document.querySelector(`[data-tab-id="${focusedTab}"]`);
    if (focusedTabElement) {
      (focusedTabElement as HTMLElement).focus();
    }
  }, [focusedTab]);

  return (

    <div className={`tabs`}>
      <ul 
          role="tablist" 
          aria-label={`Tablist-${variant}`} 
          className="tab-list" 
          onKeyDown={handleKeyDown}
      >
        {tabs.map(tab => (
            <Tab 
              key={tab.id}
              tab={tab}
              onClick={() => handleTabClick(tab.id)}
              selected={activeTab === tab.id ? true : false}
              variant={variant}
            />
        ))}

      </ul>
    </div>

  );
};

export default TabList;
