import { TOGLE_NAME_VISIBLE, BOX_CHECKED } from "./types"

export const toggleNameVisible = () => ({ type: TOGLE_NAME_VISIBLE })
export const toggleBoxChecking = () => {
    console.log("Box checking toggle - A C T I O N !");
    return { type: BOX_CHECKED }
}