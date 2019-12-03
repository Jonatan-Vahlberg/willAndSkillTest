import React from 'react';
import {View, Text, Dimensions, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {isUndefiendOrNull, breakoutTime, breakoutDate} from '../functions';
import {getSelectedPortfolio, deselectPortfolio} from '../actions';
import Spinner from '../components/Spinner';
import Position from '../components/Position';
import PageComponent from '../components/PageComponent';

const {width} = Dimensions.get('window');

class DetailPage extends React.Component {
  componentDidMount() {
    const {
      token,
      portfolioStub: {alias},
    } = this.props;
    this.props.getSelectedPortfolio(token, alias);
  }

  componentWillUnmount() {
    this.props.deselectPortfolio();
  }

  render() {
    const {portfolioStub, portfolio} = this.props;
    const selectedPortfolio = isUndefiendOrNull(portfolio)
      ? portfolioStub
      : portfolio;
    const {
      alias,
      provider,
      kind,
      total_value,
      market_value,
      cash,
      account_number,
      currency,
      created_at,
    } = selectedPortfolio;

    const {container} = this.generateStyles();

    return (
      <PageComponent>
        <View style={container}>
          <Text>Account number: {account_number}</Text>
          <Text>
            {provider} {kind}
          </Text>
          <Text>
            Value: {cash} {currency}
          </Text>
          <Text>Total value: {total_value}</Text>
          <Text>Market value: {market_value}</Text>
          <Text>
            Portfolio created: {breakoutDate(created_at)}{' '}
            {breakoutTime(created_at)}
          </Text>
          <Text>Positions</Text>
        </View>
        {portfolio !== null ? (
          this.renderDetailData()
        ) : (
          <View>
            <Spinner />
          </View>
        )}
      </PageComponent>
    );
  }

  renderDetailData() {
    const {positions} = this.props.portfolio;
    const {} = this.generateStyles();
    return (
      <React.Fragment>
        <ScrollView>
          {positions.length > 0 ? (
            positions.map((position, index) => (
              <Position key={index} {...position} />
            ))
          ) : (
            <Text>No positions in this portfolio</Text>
          )}
        </ScrollView>
      </React.Fragment>
    );
  }

  generateStyles = () => {
    return StyleSheet.create({
      container: {
        width,
        backgroundColor: '#fff',
        borderBottomColor: 'rgba(0,0,0,0.5)',
        borderBottomWidth: 1.8,
        paddingBottom: 10,
      },
    });
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.user.token,
    portfolio: state.portfolios.selectedPortfolio,
  };
};

export default connect(mapStateToProps, {
  getSelectedPortfolio,
  deselectPortfolio,
})(DetailPage);
