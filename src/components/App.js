
import React, { useState } from 'react';
import './../styles/App.css';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  
  

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => handleTabClick(index)}
            style={{ cursor: 'pointer' }}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

// Usage example
const App = () => {
  const tabs = [
    { title: 'Tab 1', content: 'This is content for Tab 1.' },
    { title: 'Tab 2', content: 'This is content for Tab 2.' },
    { title: 'Tab 3', content: 'This is content for Tab 3.' },
  ];

  return (
    <div>
   
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;