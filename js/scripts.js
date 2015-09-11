var findReplace = function(string, findWord, replaceWord) {
    var regex = new RegExp(findWord, 'g');
    var result = string.replace(regex, replaceWord);
    return result;
};
