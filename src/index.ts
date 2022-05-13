import { isRef, unref } from 'vue'
import { isObject } from '@vueuse/core'

export function deepUnref(val: any) {
  const checkedVal: any = isRef(val) ? unref(val) : val

  if (!isObject(checkedVal))
    return checkedVal

  if (Array.isArray(checkedVal))
    return unrefArray(checkedVal)

  return unrefObject(checkedVal)
}

function smartUnref(val: any) {
  if (val !== null && !isRef(val) && typeof val === 'object')
    return deepUnref(val)

  return unref(val)
}

function unrefArray(arr: []) {
  // eslint-disable-next-line no-console
  console.log('unreffing array', arr)
  arr.map(smartUnref)
}

function unrefObject(obj: object) {
  const unreffed = {}

  Object.keys(obj).forEach((key) => {
    unreffed[key] = smartUnref(obj[key])
  })

  return unreffed
}
