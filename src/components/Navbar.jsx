import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="bg-phanton p-5 w-full flex justify-between items-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Link to="/"><h1 className="text-white font-bold text-lg">File Manager</h1></Link>
      <div className="space-x-4">
        <Link to="/passwords" className="text-white">Passwords</Link>
        <Link to="/todos" className="text-white">Todos</Link>
        <Link to="/notes" className="text-white">Notes</Link>
        <Link to="/contacts" className="text-white">Contacts</Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
