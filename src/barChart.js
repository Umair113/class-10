import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.5)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.6)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [33, 44, 55, 66, 77, 88, 99]
    },
    {
        label: 'My Second dataset',
        backgroundColor: 'rgba(0,217,255,0.5)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgb(17,101,135,0.6)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [99,88,77, 66, 55, 44, 33 ]
      }
  ]
};

function BarChart(){
    return (
      <div>
        <h2>Bar Example (custom size)</h2>
        <Bar
          data={data}
          width={100}
          height={250}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
    
} 
export default BarChart;