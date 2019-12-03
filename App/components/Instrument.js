import React from 'react';
import {View, Text} from 'react-native';
import InstrumentHeader from './InstrumnetHeader';
import StockInstrumentDetail from './StockInstrumentDetail';

class Instrument extends React.Component {
  render() {
    return (
      <View>
        <InstrumentHeader instrument={this.props.instrument} />
        {this.renderInstrumentDetail(this.props.instrument)}
      </View>
    );
  }

  renderInstrumentDetail(instrument) {
    const kind = `${instrument.kind}`;
    switch (kind.toLowerCase()) {
      case 'stock':
        return <StockInstrumentDetail instrument={instrument} />;
      default:
        return null;
    }
  }
}

export default Instrument;
