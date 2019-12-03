import React from 'react';
import {isUndefiendOrNull} from '../functions';
import {LineChart} from 'react-native-chart-kit';

const DATA_TYPES = [
  'yield_1d',
  'yield_1w',
  'yield_1m',
  'yield_3m',
  'yield_6m',
  'yield_1y',
  'yield_2y',
  'yield_3y',
  'yield_5y',
  'yield_ty',
];

class LineChartComponent extends React.Component {
  render() {
    const {instrumentData, width, height} = this.props;
    let labels = [];
    const dataValues = DATA_TYPES.map(type => {
      if (!isUndefiendOrNull(instrumentData[type])) {
        return instrumentData[type];
      }
    }).filter(value => !isUndefiendOrNull(value));

    labels = DATA_TYPES.filter(
      type => !isUndefiendOrNull(instrumentData[type]),
    ).map(type => type.substr(6));
    const data = {
      labels,
      datasets: [{data: dataValues}],
    };

    const chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: '#08130D',
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
    };
    return (
      <LineChart
        data={data}
        width={width}
        height={height}
        chartConfig={chartConfig}
      />
    );
  }
}

export default LineChartComponent;
