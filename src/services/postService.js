
import { postApi } from '../api/index'
import { startPending, stopPending, postData ,setTotalPage} from '../store/postSlice'


export const getPost = (page) => async (dispatch) => {
    try {
        dispatch(startPending())
        const response = await postApi.getPost(page)
        const data = await response.responseData
        dispatch(postData(data))
        dispatch(setTotalPage(response.responseHeaders['x-total-count']))
    }catch (e){
        console.log(e)
    }finally {
        setTimeout(() => {
            dispatch(stopPending())
        },300)
    }
}
