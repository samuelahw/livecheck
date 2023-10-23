export const getStringFromLocalStorage = () => {
    return localStorage.getItem("streamerListString")
}

export const setStringForLocalStorage = (string) => {
    localStorage.setItem("streamerListString", string)
}

export const makeStringToList = (string) => {
    if (string !== null)
        return string.split(",")
}

export const makeListToString = (list) => {
    return list.toString()
}