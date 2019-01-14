const filtered = strings.filter(str => {
  return str.excludes('y');
});

console.log(filtered);
