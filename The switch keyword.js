// A switch statement provides an alternative syntax that is easier to read and write

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
  console.log('You get the gold medal!');
  break;
  case 'second place':
  console.log('You get the silver medal!');
  break;
  case 'third place':
  console.log('You get the bronze medal!');
  break;

  default:
  console.log('No medal awarded.');
  break;
}

// If run the code block, the result will be: You get the gold medal! 
