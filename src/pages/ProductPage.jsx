import React from "react";
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import SalesChannelChart from "../components/overview/SalesChannelChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import ProductsTable from "../components/products/ProductsTable";

const ProductPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Product" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
        {/* sate */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-colls-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Products"
            icon={Package}
            value={1234}
            color="#6366F1"
          />
          <StatCard
            name="Top Selling"
            icon={TrendingUp}
            value={89}
            color="#10B981"
          />
          <StatCard
            name="Low Stock"
            icon={AlertTriangle}
            value={23}
            color="#F59E0B"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={"$543,210"}
            color="#EF4444"
          />
        </motion.div>
        <ProductsTable />

        {/* CHART */}
        <div className="grid grid-col-1 lg:grid-cols gap-8">
          <SalesChannelChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
