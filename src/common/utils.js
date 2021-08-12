//防抖
export function debounce(func, delay) {
  // 第一次设置为空   
  let timer = null 
  // 使用闭包防止每次调用时将timer初始化为null
  return function (...args) {   
    // 清除上一次的延时器
    if(timer) clearTimeout(timer)
    // 重新设置新的延时器
    timer = setTimeout(() => {
      //修复函数的this指向
      func.apply(this, args)
    },delay)
  }
}


