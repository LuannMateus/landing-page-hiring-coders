import { useState } from 'react';
import Home from './pages/Home';
import './style/global.scss';

const App = () => {
  const [toggle, setToggle] = useState(true);

  const toggleTheme = () => {
    setToggle(!toggle);

    if (toggle) {
      return 'DARK';
    } else {
      return 'LIGHT';
    }
  };

  return (
    <div className="App">
      <Home theme={toggleTheme} />
    </div>
  );
};

export default App;
