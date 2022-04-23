
import { postApi } from '../api/index'
import { startPending, stopPending, postData ,setTotalPage} from '../store/postSlice'

export const getPost = (page) => async (dispatch) => {
    try {
        dispatch(startPending())
        const response = await postApi.getPost(page)
        const data = await response.data
        dispatch(postData(data))
        dispatch(setTotalPage(response.headers['x-total-count']))
    }catch (e){
        console.log(e)
    }finally {
        dispatch(stopPending())
    }
}
