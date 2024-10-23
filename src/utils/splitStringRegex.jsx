function splitWordsAndCharacters(text) {
  return text.split(" ").map((word) => word.split(""));
}

export default splitWordsAndCharacters;
