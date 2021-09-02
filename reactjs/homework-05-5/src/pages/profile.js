import { Checkbox, FormControlLabel } from "@material-ui/core"
import { useCallback } from "react";
// import { Provider } from "react-redux"
import { useDispatch, useSelector } from "react-redux"
import { toggleBoxChecking } from "../store/profile"
import {store} from "../store";

export const Profile = ()=>{
    // const dispatch = useDispatch();
    
    
    // const checkboxCheck = useCallback(() => { 
    // //   console.log("checkBoxMarked", store.getState().checkBoxMarked);
    //   dispatch(checkBoxMarked);
    //   }, [dispatch]);
    const dispatch = useDispatch()

    const handleBoxCheck = ()=>{
      //toggleBoxChecking
      
      dispatch(toggleBoxChecking())
    }
    const isChecked = useSelector(state => state.profile.boxChecked);
    return (

        <div>
            <h1>User profile</h1>
            <FormControlLabel
              value="end"
              control={<Checkbox 
                color="primary" 
                onChange={handleBoxCheck}
                checked={isChecked}
              />}
              label="Checkbox for fun"
              labelPlacement="end"
            />
            
        </div>
    )
  }