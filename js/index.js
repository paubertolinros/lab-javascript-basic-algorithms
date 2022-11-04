// Iteration 1: Names and Input
// 1.1 - 1.2
const hacker1 = "Ermenegildo";
console.log(`The driver's name is ${hacker1}.`);
// 1.3 - 1.4
const hacker2 = "Eustaquia";
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
// 2.1
function calculateNamesLength (driverName, navigatorName) {
  if (driverName.length > navigatorName.length) {
      return(`The driver has the longest name, it has ${driverName.length} characters`);
  } else if (driverName.length < navigatorName.length) {
      return(`It seems that the navigator has the longest name, it has ${navigatorName.length} characters`)
  } else {
    return(`Wow, you both have equally long names, ${navigatorName.length} characters!`)  
   };
}; 
const NamesLengthResult = calculateNamesLength(hacker1, hacker2);
console.log(NamesLengthResult);

// Iteration 3: Loops
// 3.1
//--- WITHOUT METHOD

function separateCapitalLetters(nameDriver){
  let newCapName = "";
  
  for (i = 0; i < nameDriver.length; i++ ) {
    let separateLetters = nameDriver[i];
    let newSpace = separateLetters + " ";
    let capLetters = newSpace.toUpperCase();
     newCapName += capLetters;
  };
  return newCapName;
    };
  const resultseparateCapitalLetters = separateCapitalLetters(hacker1);
  console.log(resultseparateCapitalLetters);


//--- WITH METHOD

let newNameCap = "";
for (i = 0; i <= hacker1.length; i++ ) {
    let capLetters = hacker1.toUpperCase();
    let capLettersSplit = capLetters.split('');
    let capLettersSpace = capLettersSplit.join (' ');
    newNameCap = capLettersSpace;
};
console.log(newNameCap)

// 3.2
function reverseName (nameNavigator) {
  let newNamereverse = "";
  for (i = nameNavigator.length - 1; i >= 0 ; i--) {
    newNamereverse +=  nameNavigator[i];
    };
  return newNamereverse
  };
  console.log(reverseName(hacker2));

// 3.3
function orderName (name1, name2) {
  if (name1 < name2) {
    return "The driver's name goes first.";
  } else if (name1 > name2) {
    return "Yo, the navigator goes first definitely.";
  } else {
    return"What?! You both have the same name?";
  };
};
console.log(orderName(hacker1, hacker2));

// BONUS

//BONUS 1.1
const loremString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ultrices tortor, eget lacinia nulla. Donec interdum, felis ac lacinia ullamcorper, erat dolor consequat leo, non tempus ante sem ut diam. Praesent pulvinar, nulla nec porttitor consequat, tellus purus cursus nulla, ac hendrerit turpis nibh vitae metus. Sed ut efficitur turpis, eu sagittis nibh. Ut non nulla augue. Proin neque eros, suscipit et metus gravida, imperdiet tincidunt sem. Fusce ut porttitor ligula, ut pharetra arcu. Maecenas ullamcorper viverra quam ut blandit. Duis egestas suscipit quam, id luctus orci feugiat ut. Nullam ut gravida nunc, quis luctus ligula. Nunc vel libero dui. Proin bibendum sodales lorem eu hendrerit. Morbi eget urna id lacus efficitur egestas a at elit. Aenean eleifend diam vel metus tempus, in volutpat metus interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec non orci a justo accumsan consequat. Nunc id tempor leo, in posuere diam. Vivamus efficitur, mi nec luctus ullamcorper, risus lorem posuere sem, convallis faucibus libero nisi sit amet tellus. In id porta ex. Cras lacus lectus, commodo at pulvinar non, finibus ac lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce vitae mi at ex tempor consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla iaculis placerat nulla ut cursus. Ut luctus sapien id lectus suscipit imperdiet. Vivamus gravida bibendum risus, malesuada condimentum tortor. Vivamus egestas nibh sed commodo blandit. Nulla venenatis, lacus quis tristique fermentum, mi mauris venenatis est, id luctus dui nisl eget erat. Nam quis metus in nisi elementum cursus. Vestibulum vulputate leo pellentesque lorem tincidunt, a tristique massa aliquet. Curabitur iaculis scelerisque ipsum, ut elementum mi pretium non."

// BONUS 1.2
function separateWords (str) {
  const separateWordsBox = str.split(' ');
  return separateWordsBox.length;
};
console.log(separateWords(loremString));

// BONUS 1.3
// 1rst function proposal
function countEts(str) {
  let numOfEt=0;
  const separateWords1 = str.split(' ');
  for(i = 0; i <= separateWords1.length; i++ ) {
    const findWord = separateWords1[i]
    if(findWord === "et") {
      numOfEt++  
    };
  };
    return numOfEt
  }
  const resultEt =  countEts(loremString);
  console.log(resultEt);

  // 2nd function proposal
function countNumbersEt(str) {
  let numberOfEt = 0;
  for (let i = 0; i <= str.length; i++) {
    const spaceLetterIndex = str[i - 1];
    const firstLetterIndex = str[i];
    const secondLetterIndex = str[i + 1];
    if(spaceLetterIndex === " " && firstLetterIndex === "e" && secondLetterIndex === "t" ) {
      numberOfEt++ 
    };
  };
    return numberOfEt++;
  }
  const resultOfEts = countNumbersEt(loremString);
  console.log(resultOfEts);

  // BONUS 2

  const phraseToCheck = "step on no pets"

  function checkThePhrase(string) {
    let newPhrase2 = ""

    for (let i = string.length - 1; i >= 0; i--) {
      const rigthToLeft = string[i]
      newPhrase2 += string[i]
    };

    if (phraseToCheck === newPhrase2) {
      return "Yes, is a Palindrome!"
    } else {
      return "Oh, isn't a Palindrome"
    }; 
  };
  console.log(checkThePhrase(phraseToCheck))