import React from 'react';

const Header = ({ companyName, tagline, logoUrl }) => {
  return (
    <header className="w-full bg-black text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={`./logo.png`} alt={`${companyName} Logo`} className="mr-2 h-8" />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{companyName}</h1>
          <p className="text-sm">{tagline}</p>
        </div>
      </div>
      <nav className="space-x-4">
        {/* Add navigation links or buttons here */}
        <a href="/" className="text-sm">Home</a>
        <a href="/intro" className="text-sm">Intro</a>
        <a href="/contact" className="text-sm">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
