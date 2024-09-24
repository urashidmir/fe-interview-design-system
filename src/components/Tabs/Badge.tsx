import './Badge.scss'; 
import { BadgeItem } from '../../types/tabs';

const Badge = ( {label, variant}: BadgeItem) => {
  return (
    <span className={`badge ${variant}`}
      aria-label={`${label} ${variant}`}
    >
      {label}
    </span>
  );
};

export default Badge;
