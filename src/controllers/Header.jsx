import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DashboardContext } from '../context/DashboardContext';

const Header = ({ onLogout, onSearch }) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const { categories } = useContext(DashboardContext);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    const results = categories.filter((category) => {
      const categoryMatch = category.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      const widgetMatch = category.widgets.some((widget) =>
        widget.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      return categoryMatch || widgetMatch;
    });
  
    onSearch(results);
  };
  

  const renderBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb text-gray-600 flex items-start justify-center text-xs">
          <li className="breadcrumb-item">
            <Link to="/">Home &gt; </Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            return (
              <li key={to} className={`breadcrumb-item ${index === pathnames.length - 1 ? 'active' : ''}`}>
                {index === pathnames.length - 1 ? (
                  " > " + value.charAt(0).toUpperCase() + value.slice(1) 
                ) : (
                  <Link to={to}>{value.charAt(0).toUpperCase() + value.slice(1)}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  };

  return (
    <header className="m-0 flex items-center justify-between p-4 bg-white text-gray-600">
      <div>{renderBreadcrumbs()}</div>

      <form onSubmit={handleSearchSubmit} className="flex items-center h-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="px-2 py-1 outline-none bg-slate-200 text-xs text-black rounded-l"
        />
        <button type="submit" className="px-2 py-1 text-xs text-white bg-blue-500 hover:bg-blue-700 rounded-r">
          Search
        </button>
      </form>

      <div className="flex items-center">
        <button className="px-2 py-1 text-xs text-white bg-green-500 hover:bg-green-700 rounded mr-2">
          User
        </button>
        <button onClick={onLogout} className="px-2 py-1 text-white text-xs bg-red-500 hover:bg-red-700 rounded">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
