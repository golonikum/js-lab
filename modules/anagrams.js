/**
 * Algorithm for counting anagrams in string with O(N) run time.
 */

let str = 'адрес карп кума куст кусты мир мука парк фывфывф рим среда стук рост сорт трос';

function findAnagram(s, separator=' ') {
    let words = s.split(separator);
    let map = Object.create(null);

    words.forEach(word => {
        let azWord = word.split('').sort().join('');
        if (azWord in map) {
            map[azWord].push(word);
        } else {
            map[azWord] = [word];
        }
    });

    return Object.keys(map).map(key => map[key]).filter(a => a.length > 1);
}
console.log(findAnagram(str));