function generateProficiencyTag(language, proficiency) {
  const logos = {
    swift: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "react native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "c++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
  };

  // Validate inputs
  const langKey = language.toLowerCase();
  if (!logos[langKey]) {
    return `Error: Language "${language}" not supported.`;
  }
  if (!Number.isInteger(proficiency) || proficiency < 1 || proficiency > 10) {
    return `Error: Proficiency must be an integer between 1 and 10.`;
  }

  // Generate stars for proficiency
  const stars = "★".repeat(proficiency);
  const padding = " ".repeat(12 - language.length); // Align language names
  return `<img src="${logos[langKey]}" width="20" height="20" /> ${language}${padding}|${stars} ${proficiency}/10`;
}

// Example usage:
// console.log(generateProficiencyTag("Swift", 5));
// console.log(generateProficiencyTag("Java", 7));
