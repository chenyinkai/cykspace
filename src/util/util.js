export const formatTime = (date, type) => {
  if (type === 'yyyy-mm-dd') {
    return `${new Date(date).getFullYear()}-${(new Date(date).getMonth() + 1) < 10 ? ('0' + (new Date(date).getMonth() + 1)) : (new Date(date).getMonth() + 1)}-${(new Date(date).getDate()) < 10 ? ('0' + new Date(date).getDate()) : new Date(date).getDate()}`
  } else {
    return `${(new Date(date).getMonth() + 1) < 10 ? ('0' + (new Date(date).getMonth() + 1)) : (new Date(date).getMonth() + 1)}-${(new Date(date).getDate()) < 10 ? ('0' + new Date(date).getDate()) : new Date(date).getDate()}`
  }
}
