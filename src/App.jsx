import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PasswordManager from './components/PasswordManager';
import Todos from './components/Todos';
import Notes from './components/Notes';
import Contacts from './components/contacts';
import {motion} from 'framer-motion'
const App = () => {
  return (
    <motion.div 
      className="min-h-screen bg-lightpurple"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/passwords" element={<PasswordManager />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </motion.div>
  );
};

export default App;
