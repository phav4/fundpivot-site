import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-blue-600">FundPivot</h1>
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/fundpivot">FundPivot</Link></li>
          <li><Link to="/auditly">Auditly</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;