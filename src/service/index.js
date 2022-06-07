import request from "./request";

export function get_alllist(params) {
  //请求全部数据
  return request({
    url: "/list",
    params
  });
}