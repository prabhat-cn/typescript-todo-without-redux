import React, { FC } from 'react';

let name: string;
// if number or string add union |
let age: number | string;
let isStudent: boolean;
// string of array
let hobbies: string[];
// tuple
let role: [number, string];

// if type does not know
let personNameType: unknown;

// object
type Person = {
  name: string;
  // if optional age
  age?: number;
};
// let person: Object;
let person: Person = {
  name: 'Prabhat',
  // age: 27,
};
// Array of object
let lotsOfPeople: Person[];

function printName(name: string) {
  console.log('PrintName', name);
}
printName('Rahul');

// return type void
let funPrintName: (name: string) => void;

// never fun type
let funPersonName: (name: string) => never;

interface newPerson {
  name: string;
  age?: number;
}

interface Guy extends newPerson {
  profession: string;
}
type X = {
  a?: string;
  b?: number;
};

type Y = X & {
  c: string;
  d: boolean;
};

let z: Y = {
  c: 'Check Type',
  d: true,
};

// login: {
//   [k: string]: string | Function
//   uname: string
//   passw: string
//   logIn: Function
// }
const Tutorial: FC = () => {
  return <div>Tutorial for React Typescript Without Redux</div>;
};

export default Tutorial;
