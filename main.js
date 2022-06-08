// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
const validateCred = arr => {

    //step 1 = push every other digit from right to new array
    let toDouble = [];
    const newArr = arr.reverse();
    for (let i = 1; i < newArr.length; i += 2) {
        toDouble.push(newArr[i])
    };
    
    //step 2 - double each digit -if more than 9 take away 9
    let doubled = [];
    toDouble.forEach(num => {
        if (num * 2 > 9) {
            doubled.push(num = num * 2 - 9);
        } else { doubled.push(num = num * 2) }
    })
    //step 3 - put other digits into new array
    let notDoubled = [];
    for (let j = 0; j < newArr.length; j += 2) {
        notDoubled.push(newArr[j])
    };
    // step 4 - add two arrays together and mudulo by 10, if 0, valid.
    const sum1 = doubled.reduce((a, b) => a + b, 0);
    const sum2 = notDoubled.reduce((c, d) => c + d, 0);
    if ((sum1 + sum2) % 10 === 0) {
        return 'valid';
    } else {
        return 'invalid';
    }
}
//TEST
/* console.log(valid1) // should print valid
console.log(invalid1) // should print invalid*/

//Next Stage
//find invalid cards from batch and add to new array
let invalidCards = [];
const findInvalidCards = nestArr => {

    for (let e = 0; e < nestArr.length; e++) {
        if (validateCred(nestArr[e]) === 'invalid') {
            invalidCards.push(nestArr[e].reverse());
        }
    };
return invalidCards;
    
};

//Next Stage - give array of companies distributing invalid cards - companies not repeated

const idInvalidCardCompanies = invalidNumArray => {
    let companies = [];

    for (let t = 0; t < invalidNumArray.length; t++) {
        switch (invalidNumArray[t][0]) {
            case 3: if (companies.indexOf('Amex') === -1) {
                companies.push('Amex')
            };
                break;
            case 4: if (companies.indexOf('Visa') === -1) {
                companies.push('Visa')
            };
                break;
            case 5: if (companies.indexOf('Mastercard') === -1) {
                companies.push('Mastercard')
            };
                break;
            case 6: if (companies.indexOf('Discover') === -1) {
                companies.push('Discover')
            };
                break;
            default: console.log ('Company not found');
        }
    }
    return companies;
}







console.log(idInvalidCardCompanies(batch));







