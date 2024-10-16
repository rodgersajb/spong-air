function splitStringRegex(string) {
  return string.split("").map((char) => (char === " " ? "\u00A0" : char)); 
}

export default splitStringRegex;
