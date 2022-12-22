export function insertLineBreaks(string) {
  // Split the string into an array of sentences
  let sentences = string.split('. ');

  // Initialize a counter to keep track of the number of sentences processed
  let counter = 0;

  // Initialize an empty result string
  let result = '';

  // Iterate over the array of sentences
  for (let i = 0; i < sentences.length; i++) {
    // Increment the counter
    counter++;

    // Add the current sentence to the result string
    result += sentences[i];

    // If the counter is divisible by 3 or 4, add a line break after the current sentence
    if (counter % 3 === 0 || counter % 4 === 0) {
      result += '.\n';
    } else {
      // Otherwise, add a period and a space to separate the sentences
      result += '. ';
    }
  }

  // Return the result string
  return result;
}
