function tellFortune(numChildren, partnerName, geoLocation, jobTitle) {
  var fortune = "You will be a " + jobTitle + " in " + geoLocation
    + ", and married to " + partnerName + " with " + numChildren + " kids.";

  console.log(fortune);

}

tellFortune(1, "Lyna", "Waterloo", "Barista");

tellFortune(2, "Yana", "Toronto", "Software King");

tellFortune(3, "Kaelyn", "Toronto", "Entrepeneur");
