import {request} from './request'

export function getDetail(iid) {
  return request({
    url: 'detail',
    params: {
      iid
    }
  })
}

export function getRecommends() {
  return request({
    url: 'recommend'
  })
}

export class GoodsBaseInfo {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goods = shopInfo.cGoods
  }
}