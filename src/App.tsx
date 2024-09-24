import TabList from './components/Tabs/TabList';
import { getMockTabs } from './mocks/tabs';
import { TabVariant } from './types/tabs';


const App = () => {


  return (
    <div>
      <h2>Pill Variant (Desktop)</h2>
      <TabList tabs={ [...getMockTabs]  } variant={TabVariant.Pill} />
      <h2>Underline Variant (Desktop)</h2>
      <TabList tabs={ [...getMockTabs]  } variant={TabVariant.Underline} />     
    </div>
  );
};

export default App;