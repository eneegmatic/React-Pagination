import {post} from '../constant/index'
import { getRequest } from '../utils/axios'

export const postApi = {
    getPost(page){
      return getRequest(post.get,`?_page=${page}&_limit=7'`)
    }
}