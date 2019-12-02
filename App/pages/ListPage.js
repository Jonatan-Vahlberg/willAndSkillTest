import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {getMyPortfolioList} from '../actions';
import PortfolioListItem from '../components/PortfolioListItem';
import Spinner from '../components/Spinner';
import {isUndefiendOrNull} from '../functions';

class ListPage extends React.Component {
  componentDidMount() {
    this.props.getMyPortfolioList(this.props.user.token);
  }

  render() {
    if (
      this.props.portfolios !== null &&
      !isUndefiendOrNull(this.props.portfolios.list)
    ) {
      return <View>{this.renderList()}</View>;
    }
    return (
      <View>
        <Spinner />
      </View>
    );
  }

  renderList = () => {
    const {portfolios} = this.props;

    return (
      <FlatList
        data={portfolios.list}
        keyExtractor={item => item.alias}
        renderItem={({item}) => {
          return <PortfolioListItem key={item.alias} portfolio={item} />;
        }}
      />
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    portfolios: state.portfolios,
  };
};

export default connect(mapStateToProps, {getMyPortfolioList})(ListPage);
