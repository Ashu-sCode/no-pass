import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import ThemeToggle from "@/components/ThemeToggle"; // Import ThemeToggle

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <span>
          <a href="#" className="text-2xl font-bold text-gray-600 dark:text-gray-300">No</a>
          <a href="#" className="text-2xl font-bold text-black dark:text-white">-</a>
          <a href="#" className="text-2xl font-bold text-blue-600">Pass</a>
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900">Services</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900">Contact</a>
        </div>

        {/* Theme Toggle & Authentication */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <SignedOut>
            <SignInButton>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" variant="ghost">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900">Services</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900">Contact</a>
              <ThemeToggle />
              <SignedOut>
                <SignInButton>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Sign In</Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
