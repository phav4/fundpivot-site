import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          FundPivot & Auditly
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/fundpivot" className="text-gray-700 hover:text-blue-600">FundPivot</Link>
          <Link to="/auditly" className="text-gray-700 hover:text-blue-600">Auditly</Link>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link to="/" className="block text-gray-700 py-2">Home</Link>
          <Link to="/fundpivot" className="block text-gray-700 py-2">FundPivot</Link>
          <Link to="/auditly" className="block text-gray-700 py-2">Auditly</Link>
          <Link to="#contact" className="block text-gray-700 py-2">Contact</Link>
        </div>
      )}
    </header>
  );
}