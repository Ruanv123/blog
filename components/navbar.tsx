import Link from "next/link";
import Themebutton from "./theme-button";

export default function Navbar() {
  return (
    <header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between items-center w-full">
            <Link href="/">
              <h1 className="text-2xl font-medium">
                Ruan <span className="text-teal-500">Dev</span>
              </h1>
            </Link>

            <Themebutton />
          </div>
        </div>
      </div>
    </header>
  );
}
