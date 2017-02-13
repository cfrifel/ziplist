/*
 * Created by cfrif on 2/6/2017.
 */

const one = [1, 3, 5, 7, 9];
const two = [2, 4, 6, 8, 10];

function zipList(one, two) {
  const result = [];
  for (let i = 0; i < one.length; i++) {
    result.push(one[i], two[i]);
  }
  return result;
}

function zipListTheSimpleWay(one, two) {
  return _.flatten(_.zip(one, two));
}

console.log(zipList(one, two));
console.log(zipListTheSimpleWay(one, two));
