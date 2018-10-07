module.exports = function longestConsecutiveLength(array) {
  // your solution here
  if (array.length == 0) return 0;

  let longest = 1;
  let set = new Set(array);

  for (let number of set.values()) {
      let compared = number - 1,
          streak = 1;
      while (set.has(compared)) {
          set.delete(compared);
          compared--;
          streak++;
      }
      compared = number + 1;
      while (set.has(compared)) {
          set.delete(compared);
          compared++;
          streak++;
      }
      longest = (streak > longest) ? streak : longest;
  }
  return longest;
}
