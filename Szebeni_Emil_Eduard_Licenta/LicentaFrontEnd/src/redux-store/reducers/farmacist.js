import { CLEAR_CURRENT_FARMACIST, SET_CURRENT_FARMACIST } from "../type";

const farmacistReducer = (state = {}, action) => {
    switch (action?.type) {
        case SET_CURRENT_FARMACIST:
            localStorage.setItem('currentFarmacist', JSON.stringify(action?.payload));
            console.log(action?.payload);
            return action?.payload;
        case CLEAR_CURRENT_FARMACIST:
            localStorage.removeItem('currentFarmacist');
            return null;
        default:
            return (localStorage.getItem('currentFarmacist'));
    };
  };
  
export default farmacistReducer;