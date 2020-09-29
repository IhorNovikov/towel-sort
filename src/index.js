// You should implement your task here.

module.exports = towelSort = (matrix) => 
!matrix ? [] : matrix.map((i,ind)=> ind%2!=0 ? i.sort((a,b)=> b-a) : i).flat()
