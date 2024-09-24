import './Tabs.scss';
import Badge from './Badge';
import { TabItem, TabVariant } from '../../types/tabs';

interface TabProps {
  tab: TabItem,
  selected: boolean;
  variant: TabVariant;
  onClick: () => void;
}

const Tab = ({ tab, selected, variant, onClick } : TabProps) => {
  return (
    <li
      role="tab"
      id={`tab-${tab.id}`}
      aria-selected={selected}
      aria-controls={`panel-${tab.id}`}
      tabIndex={0}
      className={`tab ${variant} ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <span className="tab-label">{tab.label}</span>
      {tab.badge && <Badge {...tab.badge} />} 
    </li>
  );
};

export default Tab;