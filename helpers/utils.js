export const convertCharacter = (str, replacer, toReplaced) => {
    return str.replace(/,/g, '-').replace(' ','-');
}