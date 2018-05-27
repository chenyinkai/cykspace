/**
 * 时间戳转时间格式
 *
 * @param  {date, type} 时间戳, 格式类型
 * @return {date} 返回 yyyy-mm-dd 或者 mm-dd
 */
export const formatTime = (date, type) => {
  if (type === 'yyyy-mm-dd') {
    return `${new Date(date).getFullYear()}-${(new Date(date).getMonth() + 1) < 10 ? ('0' + (new Date(date).getMonth() + 1)) : (new Date(date).getMonth() + 1)}-${(new Date(date).getDate()) < 10 ? ('0' + new Date(date).getDate()) : new Date(date).getDate()}`
  } else {
    return `${(new Date(date).getMonth() + 1) < 10 ? ('0' + (new Date(date).getMonth() + 1)) : (new Date(date).getMonth() + 1)}-${(new Date(date).getDate()) < 10 ? ('0' + new Date(date).getDate()) : new Date(date).getDate()}`
  }
}
