import { useState } from 'react';
import { Home } from './components/containers/Home/Home';
import { MenuContext } from './contexts/MenuContext';


function App() {
  const [menuItems, setMenuItems] = useState({ items: [] });

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems }}>
      <Home />
    </MenuContext.Provider>

  );
}

export default App;
