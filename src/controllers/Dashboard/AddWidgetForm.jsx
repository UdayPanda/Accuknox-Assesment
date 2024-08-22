import React, { useState, useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';

const AddWidgetForm = ({closeForm}) => {
  const { addWidget } = useContext(DashboardContext);
  const [categoryName, setCategoryName] = useState('');
  const [widgetName, setWidgetName] = useState('');
  const [widgetType, setWidgetType] = useState('graph');
  const [widgetData, setWidgetData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = {
      id: Date.now().toString(), 
      name: widgetName,
      type: widgetType,
      data: widgetData ? JSON.parse(widgetData) : {},
    };

    addWidget(categoryName, newWidget);

    setCategoryName('');
    setWidgetName('');
    setWidgetType('graph');
    setWidgetData('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 p-4 border border-gray-300 rounded-lg">
      <button onClick={closeForm} className='absolute top-10 right-10'>X</button>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Category Name:</label>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Widget Name:</label>
        <input
          type="text"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Widget Type:</label>
        <select
          value={widgetType}
          onChange={(e) => setWidgetType(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        >
          <option value="graph">Graph</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Widget Data (JSON format):</label>
        <textarea
          value={widgetData}
          onChange={(e) => setWidgetData(e.target.value)}
          placeholder='{"key": "value"}'
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
        Add Widget
      </button>
    </form>
  );
};

export default AddWidgetForm;
