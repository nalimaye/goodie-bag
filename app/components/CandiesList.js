import React from 'react';
import { connect } from 'react-redux';
import { thunkToGetCandiesCreator } from '../reducers/index';
import { List } from './utils';
import CandyItem from './CandyItem';

const mapStateToProps = state => {
  return { candies: state.candies };
};

const mapDispatchToProps = dispatch => {
  return {
    thunkToGetCandiesCreator: () => dispatch(thunkToGetCandiesCreator()),
  };
};

class CandiesList extends React.Component {
  componentDidMount() {
    this.props.thunkToGetCandiesCreator();
  }

  render() {
    const { candies } = this.props;
    return (
      <div>
        <List
          forEachOfThese={candies}
          doThis={candy => (
            <div key={candy.id}>
              <CandyItem candy={candy} />
            </div>
          )}
          unlessEmpty={() => <div>Where are the Candies?!?</div>}
        />
      </div>
    );
  }
}

const ConnectedCandiesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CandiesList);

export default ConnectedCandiesList;
