import { CLEAR_CURRENT_DOCTOR, SET_CURRENT_DOCTOR } from "../type";

const doctorReducer = (state = {}, action) => {
    switch (action?.type) {
        case SET_CURRENT_DOCTOR:
            localStorage.setItem('currentDoctor', JSON.stringify(action?.payload));
            console.log(action?.payload);
            return action?.payload;
        case CLEAR_CURRENT_DOCTOR:
            localStorage.removeItem('currentDoctor');
            return null;
        default:
            return (localStorage.getItem('currentDoctor'));
    };
  };
  
export default doctorReducer;