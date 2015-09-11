describe('findReplace', function() {
    it("returns single letter user input without changing anything", function() {
        expect(findReplace("j", "j", "j")).to.equal("j");
    });

    it("replaces single letter with another letter", function() {
        expect(findReplace("j", "j", "z")).to.equal("z");
    });
});
