import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import BarChart from 'recharts/lib/chart/BarChart';
import Bar from 'recharts/lib/cartesian/Bar';
import XAxis from 'recharts/lib/cartesian/XAxis';
import Tooltip from 'recharts/lib/component/Tooltip';

function SimpleLineChart(props) {
  return (
    <ResponsiveContainer width="99%" height={225}>
      <BarChart data={props.data}>
        <XAxis dataKey="name"/>
        <Tooltip/>
        <Bar dataKey="Type" stackId="a" fill="#17729D" />
        <Bar dataKey="OtherType" stackId="a" fill="#17729D80" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;