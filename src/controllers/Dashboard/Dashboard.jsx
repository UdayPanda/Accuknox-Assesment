import React, { useContext, useState } from 'react';  
import { DashboardContext } from '../../context/DashboardContext';  
import GraphWidget from './GraphWidget';  
import AddWidgetForm from './AddWidgetForm';  
import NavButtons from '../NavButtons';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {  
  const { categories, removeWidget } = useContext(DashboardContext);  
  const categoryList = categories;  

  if (!categoryList || !Array.isArray(categoryList)) {  
    return <div>Loading...</div>;  
  }  

  const [addWidget, setAddWidget] = useState(false);  

  return (  
    <>  
      <div className="dashboard p-4 bg-slate-200">  
        <NavButtons setAddWidget={setAddWidget} /> 

        {categoryList.map((category) => (  
          <div key={category.name} className="category mb-6">  
            <h2 className="text-lg text-gray-600 font-semibold mb-4">{category.name}</h2>  
            <div className="widgets grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">  
              {category.widgets.map((widget) => (  
                <div key={widget.id} className="widget bg-white p-4 border rounded-lg shadow-lg">  
                  <h3 className="text-sm text-gray-600 font-semibold mb-2">{widget.name}</h3>  
                  {widget.type === 'graph' && (  
                    <GraphWidget widgetData={widget.data} />  
                  )}  
                  <button  
                    onClick={() => removeWidget(category.name, widget.id)}  
                    className="mt-4 text-red-400 font-semibold hover:text-red-500"  
                  >  
                    <FontAwesomeIcon icon={faTrash}/>
                  </button>  
                </div>  
              ))}  
              <div className='relative flex items-start justify-center h-80 overflow-y-scroll bg-white p-4 border border-gray-300 rounded-lg'>  
                <button onClick={() => setAddWidget((prev) => !prev)} className="bg-gray-200 text-gray-600 mt-24 px-2 py-1 rounded-md hover:bg-gray-100">Add Widget</button>  
              </div>  
            </div>  
          </div>  
        ))}  

        <div className={`${addWidget ? 'block' : 'hidden'} absolute top-10 rounded-lg left-1/2 bg-white`}>  
          <AddWidgetForm closeForm = {() => setAddWidget(false)}/>  
        </div>  
      </div>  
    </>  
  );  
};  

export default Dashboard;