// Check if the third element in process.argv exists
const arg = process.argv[2];

if (arg !== undefined) {
  console.log(arg);
} else {
  console.log('No argument');
}
