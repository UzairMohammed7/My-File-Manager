import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PasswordManager from './components/PasswordManager';
import Todos from './components/Todos';
import Notes from './components/Notes';
import Contacts from './components/contacts';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/passwords" element={<PasswordManager />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};

export default App;
