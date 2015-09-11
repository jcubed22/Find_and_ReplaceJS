var findReplace = function(string, findWord, replaceWord) {
    var result = string.replace(new RegExp("\\b" + findWord + "\\b", 'g'), replaceWord);
    return result;
};

$(function() {
    $("form#replacer").submit(function(event) {
        var string = $("input#string").val();
        var findWord = $("input#findWord").val();
        var replaceWord = $("input#replaceWord").val();

        var output = findReplace(string, findWord, replaceWord);

        $(".input_string").empty();
        $(".output").empty();
        $(".input_string").text(string);
        $(".output").text(output);
        $("#result").show();
        event.preventDefault();
    });
});
