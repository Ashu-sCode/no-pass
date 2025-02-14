"use client";

import { useTheme } from "next-themes";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const YourCard = () => {
  const { theme } = useTheme();

  return (
    <Card className="p-4 shadow-md transition-colors duration-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
      <CardHeader>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Your Saved Cards</h2>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-400">No cards saved yet.</p>
      </CardContent>
    </Card>
  );
};

export default YourCard;
