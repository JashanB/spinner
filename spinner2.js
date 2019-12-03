const spin = ['|', '/', '-', '\\', '|', '\n' ];
let timer = 0;
for (let char of spin) {
  timer += 200;
  setTimeout(() => {
    process.stdout.write(`\r${char}`)
  }, timer);
};


