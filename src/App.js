import { useState } from 'react';
import './App.scss';
import Chapter1 from './articles/first/chapters/first/Chapter1';
import SideBar from './ui/SideBar/SideBar';

const App = () => {
  const [isVisible, setIsVisible] = useState({
    first: false,
    second: false,
    third: false
  });

  return (
    <div className="App">
      <SideBar isVisible={isVisible} />

      <div className="App__main">
        <Chapter1 setIsVisible={setIsVisible} isVisible={isVisible} />
      </div>
    </div>
  );
};

export default App;
