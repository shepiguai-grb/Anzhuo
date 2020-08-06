// 过滤价格，保留两位小数
export const filterPrice = (price) => {
    return price.toFixed(2)
}

// 过滤时间，把时间戳转换成   年-月-日
export const filterTime = (time) => {
    let date = new Date(time)
    let year = date.getFullYear()
    let month = (date.getMonth() + 1 + "").padStart(2, '0')
    let day = (date.getDate() + "").padStart(2, "0")
    return `${year}-${month}-${day}`
}