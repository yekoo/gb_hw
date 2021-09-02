export const logger = (store)=>(next)=>(action)=>{
    // console.log("Text Logger - prev:",store.getState())
    console.log("Text Logger - type:",action)
    const result = next(action);
    // console.log("Text Logger - next: ",store.getState())

    return result;
}
