export default function findAllSolutions(grid, dict){
  if(grid==null||dict==null||grid.length<1||dict.length<1)
    return "Invalid Grid";
  for(var row = 0;row<grid.length;row++)
    for(var col = 0;col<grid[0].length;col++)
      if((grid[row][col]!=="Qu"&&grid[row][col].length>1))
        return "Invalid Grid";
  var myTrie = createTrieTree(dict);
  var solutions = findGridSolutions(grid, myTrie, createVisited(grid));
  if(solutions==="")
    return "No Solutions";
  return solutions;
};
let Node = function() {
	this.keys = new Map();
	this.end = false;
	this.setEnd = function() {
		this.end = true;
	};
	this.isEnd = function() {
		return this.end;
	};
};
let Trie = function(){
  this.root = new Node();
    this.add = function(input, node = this.root){
    if(input.length===0){
      node.setEnd();
      return;
    }else if(!node.keys.has(input[0])){
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
    else{
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  };
  this.checkForValidWord = function(word){
    let node = this.root;
    while(word.length>1)
      if(!node.keys.has(word[0]))
      return false;
      else{
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
  };
this.isValidPrefix = function(prefix){
  let node = this.root;
  return prefix.split('').every(letter => {
    if(!node.keys.has(letter))
      return false;
    node = node.keys.get(letter);
    return true;
  })
}
};
function createTrieTree(dict){
  var myTrie = new Trie();
  for(var i = 0; i < dict.length; i++)
      if(dict[i].length>2)
        myTrie.add(dict[i]);
  return myTrie;
};
function createVisited(grid){
  var visited= [];
  var temp = [];
  for(var i = 0;i<grid.length;i++){
    for(var x = 0; x<grid[0].length;x++){
      temp.push(false);
    }
    visited.push(temp);
    temp = [];
  }
  return visited;
};
function traverseGrid(myTrie, row, col, grid, visited, solutions, newWord){
  if(row<0||col<0||row>=grid.length||col>=grid[0].length||visited[row][col]||grid[row][col]==="")
    return;
  newWord+=grid[row][col].toLowerCase();
  if(!myTrie.isValidPrefix(newWord))
    return;
  if(myTrie.checkForValidWord(newWord))
    solutions.push(newWord);
  visited[row][col]=true; //set current space on the grid to be visited
  //recursively visits each neighboring space that is less than one space from current
  traverseGrid(myTrie, row-1, col, grid, visited, solutions, newWord);
  traverseGrid(myTrie, row+1, col, grid, visited, solutions, newWord);
  traverseGrid(myTrie, row, col+1, grid, visited, solutions, newWord);
  traverseGrid(myTrie, row, col-1, grid, visited, solutions, newWord);
  traverseGrid(myTrie, row-1, col+1, grid, visited, solutions, newWord);
  traverseGrid(myTrie, row+1, col+1, grid, visited, solutions, newWord);
  traverseGrid(myTrie, row-1, col-1, grid, visited, solutions, newWord);
  traverseGrid(myTrie, row+1, col-1,  grid, visited, solutions, newWord);
  visited[row][col]=false;
};
function findGridSolutions(grid, myTrie, visited){
  var solutions = [];
  for(var i = 0; i < grid.length;i++)
    for(var x = 0; x < grid[0].length;x++)
        traverseGrid(myTrie, i, x, grid, visited, solutions,"");
  return solutions;
};
//exports.findAllSolutions=findAllSolutions;
