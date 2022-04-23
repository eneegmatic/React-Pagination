import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    pending: false,
    totalPage:0,
    data: []
}

const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{
        startPending : (state) => {
            state.pending = true
        },
        stopPending: (state) => {
            state.pending = false
        },
        postData: (state, {payload}) => {
            state.data = payload
        },
        setTotalPage: (state ,{payload}) => {
            state.totalPage = payload
        }
    }
})
export const { startPending, stopPending, postData,setTotalPage} = postSlice.actions
export default postSlice.reducer