import { getMostCommonWord } from "./mostCommonWord.mjs";

describe("testing mostCommonWord", () => {
  it("should find the most common word in a basic string", () => {
    expect(
      getMostCommonWord("the quick brown fox jumps over the lazy dog"),
    ).toEqual("the");
  });
});
