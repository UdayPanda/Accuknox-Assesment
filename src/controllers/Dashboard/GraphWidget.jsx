import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const GraphWidget = ({ widgetData }) => {
  const data = {
    labels: widgetData.labels,
    datasets: [
      {
        label: widgetData.label,
        data: widgetData.values,
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ],
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
        position: 'right',
      },
      title: {
        display: true,
        text: widgetData.title,
      },
    },
  };

  // Calculate total sales  
  const totalSales = widgetData.values.reduce((acc, value) => acc + value, 0);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'relative', width: '200px', height: '200px' }}>
        <Doughnut data={data} options={options} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#333',
        }}>
          ${totalSales}
        </div>
        <div
          className='text-lg'
          style={{
            position: 'absolute',
            top: '65%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#333',
          }}
        >Total</div>
      </div>
      <div style={{ marginLeft: '20px', textAlign: 'left' }}>
        {widgetData.values.map((value, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                backgroundColor: data.datasets[0].backgroundColor[index],
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                marginRight: '8px',
              }}
            />
            <span>{`${widgetData.labels[index]}: ${value}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphWidget;