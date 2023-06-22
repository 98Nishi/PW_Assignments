// 1. Count the occurrences.
// You are building a word count generator that will take a large string of text as input and output the words and
// the number of times they are present in the string. Your task is to write a function that can count the occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can assume that the string only contains alphabetic characters and spaces.


function occurCount(str) {
  
    const words = str.split(" ");
    const count_map = new Map();
  
    for (let i = 0; i <= words.length-1; i++) {
      const count = words[i];
      
        if (count_map.has(count)) {
            count_map.set(count, count_map.get(count) + 1);
        }
        else {
            count_map.set(count, 1);
        }
    }

    return count_map;
}

const occur_words = occurCount("The big secret in life is that there is no secret. Whatever your goal, you can get there if you are willing to work.");
console.log(occur_words); 