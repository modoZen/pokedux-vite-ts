export const logger = (store:any) => (next:any) => (action:any) =>{
    console.log(action)
    next(action)
}

export const featuring = (store:any) => (next:any) => (actionInfo:any) =>{
    const featured = [{ name: 'Arturo'}, ...actionInfo.action.payload]
    const updatedActionInfo = {...actionInfo, action: {
        ...actionInfo.action,
        payload: featured
    }}
    next(updatedActionInfo)
}