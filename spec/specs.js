describe('findReplace', function() {
    it("returns single letter user input without changing anything", function() {
        expect(findReplace("j", "j", "j")).to.equal("j");
    });

    it("replaces single letter with another letter", function() {
        expect(findReplace("j", "j", "z")).to.equal("z");
    });

    it("replaces a single word in a string", function() {
        expect(findReplace("Hello world", "world", "universe")).to.equal("Hello universe");
    });

    it("replaces multiple words in a string with replacement word", function() {
        expect(findReplace("Jingle bells, jingle bells", "bells", "balls")).to.equal("Jingle balls, jingle balls");
    });

    it("replaces one word with multiple words", function() {
        expect(findReplace("I like candy", "candy", "sex, drugs, and rock and roll")).to.equal("I like sex, drugs, and rock and roll")
    });

    it("replaces only whole word matches", function() {
        expect(findReplace("I took my cat to the cathedral", "cat", "dog")).to.equal("I took my dog to the cathedral");
    });

    it("replaces a word in a string, regardless of punctuation", function() {
        expect(findReplace("Hello world.", "world", "universe")).to.equal("Hello universe.");
    });
});
