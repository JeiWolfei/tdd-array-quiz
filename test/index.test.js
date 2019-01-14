var strings = ['hot', 'green', 'sky', 'yeti'];

const filtered = strings.filter(str => {
  return str.excludes('y');
});

console.log(filtered);
