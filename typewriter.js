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

