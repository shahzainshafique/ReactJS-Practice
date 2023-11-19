const InitialState = {
    userName:'',
}
const userReducer=(state=InitialState,action)=>
{
    switch(action.type){
        case 'SET_USER_NAME':
            return {...state, userName:action.payload};

        default:return state;
    }
}
export default userReducer;