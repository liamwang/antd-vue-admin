export function trimLeft(str: string, chars = ' ') {
  return str.replace(new RegExp('^[' + chars + ']+'), '')
}

export function trimRight(str: string, chars = ' ') {
  return str.replace(new RegExp('[' + chars + ']+$'), '')
}

export function trim(str: string, chars = ' ') {
  return trimRight(trimLeft(str, chars), chars)
}

export function queryString(params: any) {
  if (!params) return ''
  if (typeof params === 'object') {
    return Object.keys(params)
      .map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
      })
      .join('&')
  }
  return params
}
