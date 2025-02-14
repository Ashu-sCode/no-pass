import AddCard from "@/components/AddCard";
import AddPassword from "@/components/AddPassword";
import YourCard from "@/components/YourCard";
import YourPassword from "@/components/YourPassword";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata ={
  title: "No Pass",
  description: "A simple password manager",
}

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      {/* Section for Adding Card & Password */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="shadow-md bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-xl">
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Add a Credit Card
            </h2>
          </CardHeader>
          <CardContent>
            <AddCard />
          </CardContent>
        </Card>

        <Card className="shadow-md bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-xl">
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Add a Password
            </h2>
          </CardHeader>
          <CardContent>
            <AddPassword />
          </CardContent>
        </Card>
      </div>

      {/* Section for Viewing Saved Cards & Passwords */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-md bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-xl">
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Your Saved Cards
            </h2>
          </CardHeader>
          <CardContent>
            <YourCard />
          </CardContent>
        </Card>

        <Card className="shadow-md bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-xl">
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Your Saved Passwords
            </h2>
          </CardHeader>
          <CardContent>
            <YourPassword />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
