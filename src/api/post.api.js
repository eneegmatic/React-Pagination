import axios from "axios";
import {post} from '../constant/api'
import {url} from '../utils/baseUrl'

export const postApi = {
    getPost(page){
      return axios.get(url+post.get+`?_page=${page}&_limit=7'`)
    }
}