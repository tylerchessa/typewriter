const sentence = "hello there from lighthouse labs";


const typewriter = (inputString) => {
  let time = 1000;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time);
    time += 100;
  } 
  setTimeout(() => {
    console.log("\n");
  }, time);
};

typewriter(sentence)





// const sentence = "hello there from lighthouse labs";
// let time = 0;
// for (const char of sentence) {
//   setTimeout(() => {
//     if (sentence[-1] === char) {
//       console.log("sentence[-1]", sentence[-1]);
//       process.stdout.write(`${char} \n`);
//     }
//     process.stdout.write(char);
//   }, time);
//   time += 50;
// }