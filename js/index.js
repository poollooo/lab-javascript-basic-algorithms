// Iteration 1: Names and Input
const hacker1 = "aaaaa";
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "aaaa";
console.log(`The navigator's name is ${hacker2}`)

//
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops


let uppercaseDriver;
uppercaseDriver = hacker1.toUpperCase();
console.log(uppercaseDriver)
const driverSpace = uppercaseDriver.split('').join(' ');
console.log(driverSpace);

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

const driverReverse = reverseString(hacker2).toLowerCase();

console.log(driverReverse);

hacker1.localeCompare(hacker2);

function compareName(name1, name2) {
    if (name1.localeCompare(name2) === -1) {
        console.log(`The driver's name goes first.`)
    }
    else if (name1.localeCompare(name2) === 1) {
        console.log(`Yo, the navigator goes first definitely.`)
    }
    else if (name1.localeCompare(name2) === 0) {
        console.log(`What?! You both have the same name?`)
    }
}

console.log(compareName(hacker1, hacker2));

// function nameOrder(hacker1, hacker2) {
//     if (hacker1.length === hacker2.length) {
//         for (let i = 0; i <= hacker1.length - 1; i++) {
//             if (hacker1[i] < hacker2[i]) {
//                 console.log(`The driver's name goes first.`)
//             } else if (hacker2[i] < hacker1[i]) {
//                 console.log(`Yo, the navigator goes first definitely.`)
//             } else if (hacker1[i] === hacker2[i]) {
//                 console.log('What?! You both have the same name?')
//             }
//         }
//     }
//     else if (hacker1.length > hacker2.length) {
//         for (let i = 0; i <= hacker1.length - 1; i++) {
//             let hacker2Extra = hacker2.splice(0, 0, '');

//             console.log(`${hacker2Extra}`)

//             if (hacker1[i] < hacker2[i]) {
//                 console.log(`The driver's name goes first.`)
//             } else if (hacker2[i] < hacker1[i]) {
//                 console.log(`Yo, the navigator goes first definitely.`)
//             } else if (hacker1[i] === hacker2[i]) {
//                 console.log('What?! You both have the same name?')
//             }
//             console.log(`${i}`)
//         }
//     }
// }


// Bonus 1
const loremParagraphe = `Lorem ipsum dolor etet etet et et et sit amet, consectetur adipiscing elit. Praesent vel purus tincidunt, porta ante sit amet, vestibulum orci. Vestibulum tempor rutrum diam ut congue. Cras non imperdiet ante. Integer aliquet enim lorem, vitae consectetur eros cursus quis. Suspendisse potenti. Sed eu pharetra orci. Aliquam auctor elementum nunc et facilisis.`

function numberOfWords(text) {
    let counter = 0;

    for (let i = 0; i <= text.length - 1; i++) {
        if (text[i] === ` ` && text[i + 1] !== ` `) {
            counter++;
        }
    }
    counter++;
    console.log(`There are ${counter} words in this paragraph.`);
}

console.log(numberOfWords(loremParagraphe));

// function isEt(text) {
//     for (let i = 0; i <= text.length; i++) {
//         if (text[i] === `e` && text[i + 1] !== `t`) {
//             return true;
//         }
//     }
// }

function numberOfEt(text) {
    let wordCounter = 0;

    for (let i = 0; i <= text.length - 1; i++) {
        if ((text[i] === `e` && text[i + 1] !== `t`) && (text[i - 1] === " " && text[i + 2] === " ")) {
            wordCounter++;
        }
    }
    console.log(`There are ${wordCounter} of 'et' words`)
}

console.log(numberOfEt(loremParagraphe));