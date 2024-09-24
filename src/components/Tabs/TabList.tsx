import { useState } from 'react';
import './Tabs.scss'
import Tab from './Tab';
import { TabItem, TabVariant } from '../../types/tabs';


interface TabListProps {
  tabs: TabItem[]; 
  variant: TabVariant;
}

const TabList = ({ tabs, variant }: TabListProps) => {

  const [activeTab, setActiveTab] = useState<number>(1);

  // Function to handle tab click
  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  return (

    <div className={`tabs`}>
      <ul role="tablist" aria-label="Sample Tabs" className="tab-list">
        {tabs.map(tab => (
            <Tab key={tab.id}
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
