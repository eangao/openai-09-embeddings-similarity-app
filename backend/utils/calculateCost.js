//run  -> npm i gpt-3-encoder
// npm install -g nodemon
// run this file using nodemon ->nodemon backend/utils/calculateCost.js

const { encode } = require("gpt-3-encoder");

const calculateCost = (texts) => {
  const totalTokens = texts.reduce((acc, text) => acc + encode(text).length, 0);
  const costPer1000Tokens = 0.0001;
  const cost = ((totalTokens * costPer1000Tokens) / 1000).toFixed(2);
  // const cost = (totalTokens * costPer1000Tokens) / 1000;// 2 decimal but the example is too small so i just remove to see the cost
  return cost;
};

// const texts = [
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
//   "this is a text",
//   "Another example of text",
//   "Some moere test to calculate cost",
// ];

// console.log(calculateCost(texts));

module.exports = calculateCost;
