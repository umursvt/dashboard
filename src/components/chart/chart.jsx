import React from 'react';
import './chart.scss';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Chart = () => {
  const data = [
    { name: 'January', Total: 1200 },
    { name: 'February', Total: 900 },
    { name: 'March', Total: 2500 },
    { name: 'April', Total: 1600 },
    { name: 'May', Total: 800 },
    { name: 'June', Total: 2100 },
    { name: 'July', Total: 1200 },
  ];

  return (
    <div className="chart">
      <div className="title">
        <p>Last six months</p>
      </div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <XAxis dataKey="name" stroke="gray" />

          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
