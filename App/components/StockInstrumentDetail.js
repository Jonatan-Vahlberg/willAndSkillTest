import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {isUndefiendOrNull} from '../functions';
import Yield from './Yield';
import LineChartComponent from './LineChart';

class StockInstrumentDetail extends React.Component {
  render() {
    const {
      price_close,
      price_open,
      price_high,
      price_low,
      price_today,
      week_52_high,
      week_52_low,
    } = this.props.instrument;

    return (
      <View>
        <Text>
          Price Close vs Open: {price_close} / {price_open}
        </Text>
        <Text>
          Price Low vs High: {price_low} / {price_high}
        </Text>
        {week_52_high && week_52_low && (
          <Text>
            End of year Low vs High: {week_52_low} / {week_52_high}
          </Text>
        )}
        <Text>Price Today: {price_today}</Text>
        {this.renderYeilds(this.props.instrument)}
      </View>
    );
  }

  renderYeilds(instrument) {
    const {yieldContainerBox, yieldBox} = this.generateStyles();
    return (
      <View>
        <Text>Yields in:</Text>
        <View style={yieldContainerBox}>
          <View style={yieldBox}>
            <Yield name="1d" value={instrument.yield_1d} color="#e6194B" />
            <Yield name="1w" value={instrument.yield_1w} color="#469990" />
            <Yield name="1m" value={instrument.yield_1m} color="#f58231" />
            <Yield name="3m" value={instrument.yield_3m} color="#800000" />
            <Yield name="6m" value={instrument.yield_6m} color="#3cb44b" />
          </View>
          <View style={yieldBox}>
            <Yield name="1y" value={instrument.yield_1y} color="#4363d8" />
            <Yield name="2y" value={instrument.yield_2y} color="#911eb4" />
            <Yield name="3y" value={instrument.yield_3y} color="#aaffc3" />
            <Yield name="5y" value={instrument.yield_5y} color="#f032e6" />
            <Yield name="total" value={instrument.yield_ty} color="#000075" />
          </View>
        </View>
        {/*<View>
          <Text>Graph representaion</Text>
          <LineChartComponent
            instrumentData={instrument}
            width={Dimensions.get('window').width - 20}
            height={Dimensions.get('screen').height / 3}
          />
        </View>
        
            this did not work unfourtunatly

        */}
      </View>
    );
  }

  generateStyles = () => {
    return StyleSheet.create({
      yieldContainerBox: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
      },
      yieldBox: {
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
    });
  };
}

export default StockInstrumentDetail;
