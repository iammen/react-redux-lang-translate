export function supplant(s, d) {
  for (var p in d) {
    s = s.replace(new RegExp('{' + p + '}', 'g'), d[p])
  }
  return s
}

export function translateKey(path, obj, safe) {
  // Use reduce method to find out a messages matches the given path
  return path.split('.').reduce((previousValue, currentValue) => {
    return !safe ? 
      previousValue[currentValue]
      : previousValue ? previousValue[currentValue] : undefined
  }, obj)
}

export function createHTMLMarkup(html) {
  return { __html: html }
}