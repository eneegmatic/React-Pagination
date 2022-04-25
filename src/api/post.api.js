import { post } from "../constant/index";
import { getRequest } from "../utils/axios";

const get = (page) => {
  return getRequest(post.get, `?_page=${page}&_limit=7'`);
};

export const postApi = {get}