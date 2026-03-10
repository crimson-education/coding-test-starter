import { getMostCommonWord } from "./mostCommonWord.mjs";

describe("testing mostCommonWord", () => {
  it("should do something useful", () => {
    expect(
      getMostCommonWord("the quick brown fox jumps over the lazy dog"),
    ).toEqual("the");
  });
});
