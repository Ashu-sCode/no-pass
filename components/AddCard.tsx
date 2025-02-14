"use client"; 

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const AddCard = () => {
  const { theme } = useTheme();

  return (
    <Card className="p-6 shadow-md transition-colors duration-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
      <CardHeader>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Add a Credit Card
        </h2>
      </CardHeader>
      <CardContent>
        <Input placeholder="Card Number" className="mb-3 text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700" />
        <Input placeholder="Card Holder Name" className="mb-3 text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700" />
        <Input placeholder="Expiry Date (MM/YY)" className="mb-4 text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700" />
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600">
          Save Card
        </Button>
      </CardContent>
    </Card>
  );
};

export default AddCard;
