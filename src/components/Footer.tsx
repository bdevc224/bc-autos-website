import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-900 dark:text-white dark:bg-gray-900 w-full py-4 sm:py-6 mt-10">
      <div className="text-center text-sm sm:text-base font-body px-4">
        &copy; {currentYear}{" "}
        <span className="font-semibold">BC Autos</span>. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;