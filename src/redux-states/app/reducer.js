/**
 * GO Tradie- React Native
 * Buwaneka Sumanasekara <buwaneka@interlective.com>
 */



// Set initial state

export const initialState = {
    isRehydrated: false,//should false
    isLoadingTest:false,
    errorTest:""
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case "APP_STATE_LOADED":
            return {
                ...state,
                isRehydrated: true
        };
        case "APP_API_TEST_LOADING":
            return {
                ...state,
                isLoadingTest: action.isLoading,
                errorTest: action.error ? action.error : ""
        };
        default:
            return state;
    }
}
