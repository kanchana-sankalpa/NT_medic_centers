/**
 * GO Tradie- React Native
 * Buwaneka Sumanasekara <buwaneka@interlective.com>
 */
import { connect } from 'react-redux';


//actions
import * as TestActions from "@redux-states/app/actions";

// The component we're mapping to
import HomeScreen from './Home';

// What data from the store shall we send to the component?
const mapStateToProps = (state) => ({
    isRehydrated:state.app.isRehydrated,
    isLoadingTest:state.app.isLoadingTest,
    errorTest:state.app.errorTest
  
});

// Any actions to map to the component?
const mapDispatchToProps = {
    testAPI:TestActions.testAPI
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
