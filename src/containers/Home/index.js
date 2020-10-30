/**
 * GO Tradie- React Native
 * Buwaneka Sumanasekara <buwaneka@interlective.com>
 */
import { connect } from 'react-redux';


// The component we're mapping to
import HomeScreen from './Home';

// What data from the store shall we send to the component?
const mapStateToProps = (state) => ({
    isRehydrated:state.app.isRehydrated,
   
  
});

// Any actions to map to the component?
const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
