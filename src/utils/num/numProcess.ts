//数据格式处理，如 2000 => 2k
export const numProcess = (num: number): string => {
  let res = num + ''
  if (res.length < 4) return res

  res = (num / 1000).toFixed(1)

  res[res.length - 1] === '0' && (res = res.slice(0, -2))

  return res + 'k'
}