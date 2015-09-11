describe('findReplace', function() {
    it("returns single letter user input without changing anything", function() {
        expect(findReplace("j", "j", "j")).to.equal("j");
    });
});
