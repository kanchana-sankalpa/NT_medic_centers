/**
 * GO Tradie- React Native
 * Buwaneka Sumanasekara <buwaneka@interlective.com>
 */



// Set initial state

export const initialState = {
    isRehydrated: false,//should false
    isLoadingMedicalCenters:false,
    errorMedicalCentersLoad:"",
    MedicalCenters:[]
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case "APP_STATE_LOADED":
            return {
                ...state,
                isRehydrated: true
        };

        case "APP_MEDICAL_CENTERS_LOADING":
            return {
                ...state,
                isLoadingMedicalCenters: action.isLoading,
                errorMedicalCentersLoad: action.error ? action.error : ""
        };
        case "APP_MEDICAL_CENTERS_SET":
            return {
                ...state,
                MedicalCenters: action.data,
        };
        default:
            return state;
    }
}
