/* 
    Write a function that returns a function that can only be called once
    e.g. const myFunc = once(() => {console.log('yo')})
    myFunc() -> 'yo'
    myFunc() -> undefined
    myFunc() -> undefined
*/

const once = (callback) => {
  let called = false;
  return () => {
    if (!called) {
      called = true;
      return callback();
    }
  };
};

const myFunc = once(() => {console.log('yo')})
console.log(myFunc());


/* 
    Write a function that returns a function that take an initial number
    Subsequent calls will add that number to the new number
    e.g. const add2 = addFactory(2)
 
    add2(4) -> 6
    add2(7) -> 9
    add2(3) -> 5
*/

const addFactory = (initialNum) => {
  return (newNum) => {
    return initialNum + newNum;
  }
};

const add2 = addFactory(2);

console.log(add2(4));
console.log(add2(7));
console.log(add2(3));

/* 
    Our person has some sensitive information exposed below
    make `accountBalance` and `bankInfo` private by leveraging closure scope
    for example: 
    personWithPrivateProperties().bankInfo.sensitiveId => undefined
    personWithPrivateProperties().accountBalance => undefined
*/

const personWithPrivateProperties = () => {
  const accountBalance = -5;
  const bankInfo = { name: "Bank of Venezuela", sensitiveId: "BV123" };
  return {
    age: 10,
    job: "Pizza Driver",

    updateBank: () => {
      return bankInfo;
    },
    getBankInfo: () => {
      return bankInfo;
    },
    getAccountBalance: () => {
      return accountBalance;
    },
    updateAccountBalance: () => {
      return accountBalance;
    },
  };
};

const person = personWithPrivateProperties();

//console.log(person.bankInfo.sensitiveId);
//console.log(person.accountBalance);
console.log(person.getBankInfo());
console.log(person.getAccountBalance());

module.exports = {
  once,
  addFactory,
  personWithPrivateProperties,
};
