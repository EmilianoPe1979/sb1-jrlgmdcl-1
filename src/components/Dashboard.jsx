import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Package, Calendar, AlertTriangle, CheckCircle } from "lucide-react";
import { getInventoryItems } from "../services/inventory";
import { getLoans } from "../services/loans";

const StatCard = ({ title, value, icon: Icon, color }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex items-center`}
    >
      <div className={`p-3 rounded-full ${color} mr-4`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </p>
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">
          {value}
        </p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState({
    totalItems: 0,
    availableItems: 0,
    activeLoans: 0,
    overdueLoans: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Obtener datos de inventario
        const inventoryResponse = await getInventoryItems();
        const items = inventoryResponse.data || [];

        // Obtener datos de préstamos
        const loansResponse = await getLoans();
        const loans = loansResponse.data || [];

        // Calcular estadísticas
        const availableItems = items.filter(
          (item) => item.status === "available",
        ).length;
        const activeLoans = loans.filter(
          (loan) => loan.status === "active",
        ).length;
        const overdueLoans = loans.filter(
          (loan) => loan.status === "overdue",
        ).length;

        setStats({
          totalItems: items.length,
          availableItems,
          activeLoans,
          overdueLoans,
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        {t("dashboard")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title={t("totalItems")}
          value={stats.totalItems}
          icon={Package}
          color="bg-blue-500"
        />
        <StatCard
          title={t("availableItems")}
          value={stats.availableItems}
          icon={CheckCircle}
          color="bg-green-500"
        />
        <StatCard
          title={t("activeLoans")}
          value={stats.activeLoans}
          icon={Calendar}
          color="bg-purple-500"
        />
        <StatCard
          title={t("overdueLoans")}
          value={stats.overdueLoans}
          icon={AlertTriangle}
          color="bg-red-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {t("inventoryStatus")}
          </h3>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">
              {t("chartComingSoon")}
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {t("loansTrend")}
          </h3>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">
              {t("chartComingSoon")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
