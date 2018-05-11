const snakeToLowerCamel = (text) => {
    return text.replace(/[-_](.)/g, (match, group1) => group1.toUpperCase())
}

const jsonKeyToLowerCamel = (obj) => {
    if (!typeof (obj) === 'object' || typeof (obj) === 'string' || typeof (obj) === 'number' || typeof (obj) === 'boolean') {
        return obj;
    }

    if (obj instanceof Array) {
        for (let i in obj) {
            obj[i] = jsonKeyToLowerCamel(obj[i]);
        }
        return obj
    }

    let keys = Object.keys(obj);
    let lowKey = ""
    for (let i in keys) {
        lowKey = snakeToLowerCamel(keys[i]);
        if (lowKey == keys[i]) {
            obj[lowKey] = jsonKeyToLowerCamel(obj[keys[i]]);
            continue
        } else {
            obj[lowKey] = jsonKeyToLowerCamel(obj[keys[i]]);
            delete obj[keys[i]]
        }
    }
    return obj
}

module.exports.snakeToLowerCamel = snakeToLowerCamel
module.exports.jsonKeyToLowerCamel = jsonKeyToLowerCamel
