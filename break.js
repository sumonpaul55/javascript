const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num in number) {
  //in give index
  let values = number[num];
  //   console.log(values); //output is 1,2,3,4,5 //first print and than break
  if (values >= 4) {
    // break;
    continue;
  }
  console.log(values); //1,2,3,4 cause break down ago
}
