var findReplace = function(string, findWord, replaceWord) {
    var regex = new RegExp("\\b" + findWord + "\\b", 'g');
    var result = string.replace(regex, replaceWord);
    console.log(result);
    return result;
};
