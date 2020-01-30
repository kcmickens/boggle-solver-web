const functions = require('./bogglesolver.js');
grid = [["A", "B", "C", "D"], 
["E", "F", "G", "H"], 
["I", "J", "K", "L"], 
["A", "B", "C", "D"]];
dict = ["ABEF", "AFJIEB", "DGKD", "DGKA"];

test('Functional Test', () => {
    expect(functions.findAllSolutions(grid, dict)).toStrictEqual(["ABEF", "AFJIEB", "DGKD"]);
  });
grid1 = [["A", "B", "C"], 
["E", "F", "G"], 
["I", "J", "Z"], 
["A", "B", "C"]];
dict1 = ["ABC", "B", "C", "AFC", "ICG","CJGFEIA"];
test('Shorter Dictionary Words Test', () => {
  expect(functions.findAllSolutions(grid1, dict1)).toStrictEqual(["ABC", "AFC", "ABC","CJGFEIA"]);
});
grid2 = [["A", "B", "C"], 
["E", "F", "G"], 
["I", "J", "Z"] 
["A", "B", "C"]];
dict2 = [];
test('Empty Dictionary Test', () => {
  expect(functions.findAllSolutions(grid2, dict2)).toStrictEqual("Invalid Grid");
});
grid3 = [];
dict3 = [];
test('Empty Dictionary and Grid Test', () => {
  expect(functions.findAllSolutions(grid3, dict3)).toStrictEqual("Invalid Grid");
});
grid4 = [["A", "B", "C", "D"], 
["E", "F", "G", ""], 
["I", "J", "K", "L"], 
["A", "B", "C", "D"]];
dict4 = ["ABEF", "AFJIEB", "DGKD", "DGKA"];
test('Traversing Test', () => {
  expect(functions.findAllSolutions(grid4, dict4)).toStrictEqual(["ABEF", "AFJIEB", "DGKD"]);
});
