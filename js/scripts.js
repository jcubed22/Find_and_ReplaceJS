var findReplace = function(string, findWord, replaceWord) {
    var regex = new RegExp(findWord + 'gi');
    string.replace(regex, replaceWord);
    return string;
};
