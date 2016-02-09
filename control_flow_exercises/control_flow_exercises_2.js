function helloWorld(languageCode) {
  if (languageCode === "DE") {
    return "Hallo Welt";
  }

  else if (languageCode === "FR") {
    return "Bonjour le monde";
  }

  else {
    return "Hello, world";
  }
}

console.log(helloWorld("EN"));
console.log(helloWorld("DE"));
console.log(helloWorld("FR"));
