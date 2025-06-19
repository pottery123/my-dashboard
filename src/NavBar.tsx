import React from 'react';

const NavBar: React.FC = () => {
  return (
    <header className="bg-white text-blue p-6 w-full fixed top-0 left-0 z-10">
      <h1 className="text-3xl font-bold">My Employees</h1>
    </header>
  );
};

export default NavBar;