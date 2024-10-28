import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-5">
      <h1 className="text-darkpurple font-bold text-center text-2xl">Your Files Manager</h1>
      <motion.div className="container gap-8 mx-auto py-14 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">
        {/* First Layer - Password Manager */}
        <motion.div
          className="bg-white p-6 shadow-lg rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="Password Manager"
            className="w-full h-50 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Manage Passwords</h2>
          <p className="mb-4">Securely store and manage your passwords.</p>
          <Link to="/passwords" className="text-blue hover:underline">
            Go to Password Manager
          </Link>
        </motion.div>

        {/* Second Layer - Todos */}
        <motion.div
          className="bg-white p-6 shadow-lg rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://img.freepik.com/premium-vector/checklist-complete-project-task-accomplish-work-checkmark_980117-4411.jpg?semt=ais_hybrid"
            alt="Todos"
            className="w-full h-50 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Manage Todos</h2>
          <p className="mb-4">Organize your tasks efficiently with todos.</p>
          <Link to="/todos" className="text-blue hover:underline">
            Go to Todos
          </Link>
        </motion.div>

        {/* Third Layer - Notes */}
        <motion.div
          className="bg-white p-6 shadow-lg rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://img.freepik.com/premium-vector/successful-…tanding-proudly_1324816-16390.jpg?semt=ais_hybrid"
            alt="Notes"
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Manage Notes</h2>
          <p className="mb-4">Take notes and keep track of your ideas.</p>
          <Link to="/notes" className="text-blue hover:underline">
            Go to Notes
          </Link>
        </motion.div>

        {/* Fourth Layer - Contacts */}
        <motion.div
          className="bg-white p-6 shadow-lg rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://thumbs.dreamstime.com/b/young-man-cartoon-…-vector-illustration-graphic-design-140683189.jpg"
            alt="Contacts"
            className="w-full h-50 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Manage Contacts</h2>
          <p className="mb-4">View and manage your contacts.</p>
          <Link to="/contacts" className="text-blue hover:underline">
            Go to Contacts
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
