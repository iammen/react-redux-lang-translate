/**
 * Supplant the string surround with {} with a given object
 * 
 * @param {String} str A String
 * @param {Object} obj A given object 
 */
export function supplant(str, obj) {
  for (const prop in obj) {
    str = str.replace(new RegExp('{' + prop + '}', 'g'), obj[prop]);
  }

  return str;
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