import { TOGLE_NAME_VISIBLE, BOX_CHECKED } from "./types"

const initialState = {
  nameVisible: true,
  user: {
    id: "test",
    firstName: "Test user",
  },
  boxChecked: false
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGLE_NAME_VISIBLE:
      return {
        ...state,
        nameVisible: !state.nameVisible,
      }
    case BOX_CHECKED:
      return {
        ...state,
        boxChecked: !state.boxChecked
      }
    default:
      return state
  }
}