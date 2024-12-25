const getQueryString = (...params) => {
    let str = ''
    for (let [i, param] of params.entries()) {
        str += `p${i + 1}=${param}&`
    }

    return str.slice(0, str.length - 1)
};

export default getQueryString;
