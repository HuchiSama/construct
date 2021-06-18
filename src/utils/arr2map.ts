
// interface arrType {
//   children?: Array<arrType>,
//   id?: string,
//   code?: string
// }

// interface resultType {

// }

const arr2map = (arr:Array<any>, key = 'id', valueKey = '') => {
  let result = {} as any

  arr.map((item: any) => {
    if (item.children && item.children.length) {
      Object.assign(result, arr2map(item.children, key, valueKey))
    } else {
      result[item[`${key}`]] = valueKey ? item[`${valueKey}`] : item
    }
  })

  return result
}

export default arr2map
