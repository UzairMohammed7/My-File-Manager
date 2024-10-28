// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="pt-16"> {/* Ensure no overlap with fixed Navbar */}
//       {/* Layer 1 */}
//       <motion.div
//         className="h-screen flex items-center justify-center bg-gray-200 p-8"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="text-center">
//           <img
//             src="https://via.placeholder.com/300"
//             alt="Layer 1 Image"
//             className="mx-auto mb-4"
//           />
//           <h2 className="text-2xl font-bold mb-4">Explore Password Manager</h2>
//           <Link to="/passwords" className="text-blue-600 underline">
//             Go to Password Manager
//           </Link>
//         </div>
//       </motion.div>

//       {/* Layer 2 */}
//       <motion.div
//         className="h-screen flex items-center justify-center bg-gray-300 p-8"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//       >
//         <div className="text-center">
//           <img
//             src="https://via.placeholder.com/300"
//             alt="Layer 2 Image"
//             className="mx-auto mb-4"
//           />
//           <h2 className="text-2xl font-bold mb-4">Manage Your Todos</h2>
//           <Link to="/todos" className="text-blue-600 underline">
//             Go to Todos
//           </Link>
//         </div>
//       </motion.div>

//       {/* Layer 3 */}
//       <motion.div
//         className="h-screen flex items-center justify-center bg-gray-400 p-8"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.6 }}
//       >
//         <div className="text-center">
//           <img
//             src="https://via.placeholder.com/300"
//             alt="Layer 3 Image"
//             className="mx-auto mb-4"
//           />
//           <h2 className="text-2xl font-bold mb-4">Organize Your Notes</h2>
//           <Link to="/notes" className="text-blue-600 underline">
//             Go to Notes
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Home;

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div
      className="h-screen bg-gray-100 pt-16"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3 p-8">
        {/* First Layer - Password Manager */}
        <motion.div
          className="bg-white p-6 shadow-lg rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://via.placeholder.com/300x200"
            alt="Password Manager"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Manage Passwords</h2>
          <p className="mb-4">Securely store and manage your passwords.</p>
          <Link
            to="/passwords"
            className="text-blue-600 hover:underline"
          >
            Go to Password Manager
          </Link>
        </motion.div>

        {/* Second Layer - Todos */}
        <motion.div
          className="bg-white p-6 shadow-lg rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://via.placeholder.com/300x200"
            alt="Todos"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Manage Todos</h2>
          <p className="mb-4">Organize your tasks efficiently with todos.</p>
          <Link
            to="/todos"
            className="text-blue-600 hover:underline"
          >
            Go to Todos
          </Link>
        </motion.div>

        {/* Third Layer - Notes */}
        <motion.div
          className="bg-white p-6 shadow-lg rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://via.placeholder.com/300x200"
            alt="Notes"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Manage Notes</h2>
          <p className="mb-4">Take notes and keep track of your ideas.</p>
          <Link
            to="/notes"
            className="text-blue-600 hover:underline"
          >
            Go to Notes
          </Link>
        </motion.div>

        {/* Fourth Layer - Contacts */}
        <motion.div
          className="bg-white p-6 shadow-lg rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://via.placeholder.com/300x200"
            alt="Contacts"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Contacts</h2>
          <p className="mb-4">View and manage your contacts.</p>
          <Link to="/contacts" className="text-blue-600 hover:underline">
            Go to Contacts
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
