// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const StatCard = ({ name, icon: Icon, value, color }) => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 rounded-xl backdrop-blur-md  overflow-hidden shadow-lg border border-gray-700"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm font-medium text-gray-400">
          <Icon size={20} classNmae="mr-2" style={{ color }} />
          {name}
        </span>
        <p className="mt-1 text-3xl font-semibold text-gray-200">{value}</p>
      </div>
    </motion.div>
  );
};

export default StatCard;
