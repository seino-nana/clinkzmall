import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url: '/home/data',
    //params对应的是对象类型,type返回类型page返回页数
    params: {
      type,
      page
    }
  })
}