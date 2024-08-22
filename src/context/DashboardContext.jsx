import React, { useState, useEffect } from 'react';

const DashboardContext = React.createContext();

const DashboardProvider = ({ children }) => {
  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem('categories');
    return savedCategories ? JSON.parse(savedCategories) : [
      {
        "name": "Category 1",
        "widgets": [
          {
            "id": "widget1",
            "name": "Sales Data",
            "type": "graph",
            "data": {
              "labels": ["January", "February", "March", "April"],
              "values": [65, 59, 80, 81],
              "label": "Monthly Sales",
              "title": "Sales Over Time"
            }
          }
        ]
      },
      {
        "name": "Category 2",
        "widgets": [
          {
            "id": "widget2",
            "name": "Expense Data",
            "type": "graph",
            "data": {
              "labels": ["January", "February", "March", "April"],
              "values": [45, 39, 50, 55],
              "label": "Monthly Expenses",
              "title": "Expenses Over Time"
            }
          }
        ]
      },
      {
        "name": "Category 3",
        "widgets": [
          {
            "id": "widget3",
            "name": "User Engagement",
            "type": "graph",
            "data": {
              "labels": ["Week 1", "Week 2", "Week 3", "Week 4"],
              "values": [120, 150, 180, 200],
              "label": "User Sign-ups",
              "title": "User Engagement Over Weeks"
            }
          }
        ]
      }
    ]
    ;
  });

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  const addWidget = (categoryName, widget) => {
    setCategories((prevCategories) => {
      // const data = prevCategories.categories
      const data = prevCategories
      const updatedCategories = data.map((category) => {
        if (category.name === categoryName) {
          return {
            ...category,
            widgets: [...category.widgets, widget], 
          };
        }
        return category;
      });

      return updatedCategories;
    });
  };

  const removeWidget = (categoryName, widgetId) => {
    setCategories((prevCategories) => {
      const updatedCategories = prevCategories.map((category) => {
        if (category.name === categoryName) {
          return {
            ...category,
            widgets: category.widgets.filter((widget) => widget.id !== widgetId), // Remove the widget by ID
          };
        }
        return category;
      });

      return updatedCategories;
    });
  };

  return (
    <DashboardContext.Provider value={{ categories, addWidget, removeWidget }}>
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContext, DashboardProvider };
