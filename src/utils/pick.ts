/**
 * pick props from object
 */
export function pick<T>(names: string[], obj: any, ret: T): T {

  for (let i = 0; i < names.length; i++) {
    let name = names[i]

    if (name in obj) {
      ret[name] = obj[name]
    }
  }

  return ret
}

export const pickArray = (names, arr = [], sameKey = 'code') => {
  let resultArr = []

  for (let i = 0; i < names.length; i++) {
    let name = names[i]
    let sameItem = arr.find(r => r[sameKey] === name)

    if (sameItem) {
      resultArr.push(sameItem)
    }
  }

  return resultArr
}
