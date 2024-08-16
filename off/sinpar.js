function deepClone(obj) {
    if (typeof obj !== 'object') return obj;
    var clone = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            clone[key] = deepClone(obj[key]);
        } else {
            clone[key] = obj[key];
        }
    }
    return clone;
}
