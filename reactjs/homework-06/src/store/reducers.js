import { TOGLE_NAME_VISIBLE, CHECKBOX_MARKED } from "./types"

const initialState = {
  nameVisible: true,
  user: {
    id: "test",
    firstName: "Test user",
    },
  checkBoxMarked: false
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGLE_NAME_VISIBLE:
      return {
        ...state,
        nameVisible: !state.nameVisible,
      }
    case CHECKBOX_MARKED:
      console.log(state.checkBoxMarked);
      return {
        ...state,
        checkBoxMarked: !state.checkBoxMarked
      }
    default:
      return state
  }
}