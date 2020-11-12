/**
 * GO Tradie- React Native
 * Buwaneka Sumanasekara <buwaneka@interlective.com>
 */
import { connect } from 'react-redux';


//actions
import * as AppActions from "@redux-states/app/actions";

// The component we're mapping to
import HomeScreen from './Home';

// What data from the store shall we send to the component?
const mapStateToProps = (state) => ({
    isRehydrated:state.app.isRehydrated,
    isLoadingMedicalCenters:state.app.isLoadingMedicalCenters,
    errorMedicalCentersLoad:state.app.errorMedicalCentersLoad,
    MedicalCenters:state.app.MedicalCenters
  
});

// Any actions to map to the component?
const mapDispatchToProps = {
    getAllMedicalCentersAction:AppActions.getAllMedicalCentersAction
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
