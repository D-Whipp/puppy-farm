// module.exports = (template, dog) => {
//   let output = template.replace(/{%DOGBREED%}/g, dog.dogBreed);
//   output = output.replace(/{%IMAGE%}/g, dog.image);
//   output = output.replace(/{%PRICE%}/g, dog.cost);
//   output = output.replace(/{%FROM%}/g, dog.origin);
// };

module.exports = (template, puppyData) => {
  let output = template.replace(/%DOGBREED%/g, puppyData.dogBreed);
  output = output.replace(/{%IMAGE%}/g, puppyData.image);
  output = output.replace(/{%ORIGIN%}/g, puppyData.origin);
  output = output.replace(/{%OTHER_NAMES%}/g, puppyData.otherNames);
  output = output.replace(/{%TEMPERAMENT%}/g, puppyData.temperament);
  output = output.replace(/{%DEMEANOR%}/g, puppyData.demeanor);
  output = output.replace(/{%FAMILY_DOG%}/g, puppyData.familyDog);
  output = output.replace(/{%COST%}/g, puppyData.cost);
  output = output.replace(/{%CARD_DESCRIPTION%}/g, puppyData.description);
  output = output.replace(/{%ID%}/g, puppyData.id);

  // if (!puppyData.familyDog)
  //   output = output.replace(/{%FAMILY_DOG%}/g, "not a family dog");

  return output;
};
