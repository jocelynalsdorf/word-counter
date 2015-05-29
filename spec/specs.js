 describe('wordCount', function() {

  it("returns a count and list of words", function() {
    expect(wordCount("It is a mad mad mad world")).to.equal(["3:a", "2:word", "2:repeated", "1:this", "1:is"]);
  });
});
