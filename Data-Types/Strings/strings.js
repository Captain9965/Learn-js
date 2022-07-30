/*
    String():
    converts the value of an object into a string value:


*/

{
    let name1 = Boolean(0);
    let name2 = Boolean(1);

    console.log(String(name1));
    console.log(String(name2));
}

console.log("----------------------- string instance properties:---------------------------------");
{
    let string1 = "Lenny Weda Orengo";

    /*
        get the length of the string with sring.length property
    */
    console.log(string1.length);

}

/*
    string methods:
    1. string.anchor(): -> deprecated
    2. string.charAt(index): -> returns the characte at the index given as the argument..
        returns an empty string when out of range 
    3. string.charCodeAt(index)-> returns a unicode between 0 and 65K instead..returns NaN when 
        out of range.
    4. string.codePointAt(index)-> returns the codepoint( a non-negative integer value )..returns
        undefined if there is no character at that point.
    5. string.concat(string1, string2,...)-> 
        used to join 2 or more strings..
    6. string.endsWith(searchstring, length)->
        returns true if the searchstring, which is to be searched at the end of the string matches
        the string and the length is the length of the given string from the beginning to be searched for
    7. string.fromCharCode(code1, code2,..)->
        returns a string from the UTF-16 code sequence provided
    8. string.fromCodePoint(codepoint1, codepoint2,...)->
        returns a string from the ASCII sequence provided
    9. string.includes(searchString, start)->
        returns true of false depending on whether the string contains the searchString
        starts indicates where the search should begin
        will return false when the idex given is greater than the length of the string..
    10. string.indexOf(searchString, start)->
        returns the index of the first occurrence of the searchString in the base string, from the start index specified
        The return value is -1 if not found
    11. string.lastIndexOf(searchString, start)->
        returns the index of the last occurence of the searchString in the base string from the start index specified
        The return value is -1 if not found
    12. string.localeCompare(compareString)->
        returns a positive number if the reference string is lexigographically greater than the compare string 
        and a negative if it is smaller and a zero if they are the same.
    13. string.match(RegExp)->
        used to search a string for a match against any regular expression
        returns either Null or an array containing the matched items, one for each match..
    14. string.normalize([form])->
        used to get a unicode normalization of a given input string..
    15. string.padEnd(targetLength, padString)->
        the targetlength is the desired string length...and if it is smaller than the original string, the
        original string is returned.

        the padString is the string to be padded. If it is too long, it is truncated.
    16. string.padStart()-> 
        similar to padEnd() only that it pads from left to right..
    17. string.repeat(count)->
        used to create a new string with count number of copies of the string in which it is called
    18. string.replace| replaceAll(A, B)->
        used to return a new string with some part of the original string with a regular expression(A) or a string(B)
        replaceAll() replaces all occurrences of the regex or the substring.
    19. string.search(regex)->
        used to search for a match for a given regex in a string..
        It returns the index of the first match, -1 if there is no match.
    20. string.slice(startingIndex, endingIndex)->
        returns a slice of a part of a given input string
        starting index: from which the string should be started
        ending index: before which index the string should be included..
    21. string.split(seperator, limit)->
        returns an array of substrings from the string on which it is called split by the provided seperator
        the limit is the upper limit of the splits to be found..
    22. string.startsWith(searchString, start)->
        used to check whether the string begins with the searchString or not.
        returns true of false
        The start argument determines where the search will start.
    23. string.subStr(start, length)->
        returns the specifed number of characters from the specified index from a given string
        The length is the number of characters from the start index to be extracted. the whole string is 
        extracted if undefined.
    24. string.substring(startIndex, endIndex)->
        returns the substring made up of characters between the start and end indices.
    25. toLowerCase()->
        returns a new string in which all the characters are on lower case
    26. toUpperCase()->
        returns a new string in which all the characters are in upper case
    27. string.toString()->
        returns  a new string representation of the string which called it
    28. string.trim()-> 
        returns a new string without leading or trailing whitespaces
    29. string.trimStart()/trimEnd()->
        returns a new string without the leading and trailing whitespaces respectively
    30. string.valueOf()->
        returns a string which represents the value of the string object..
*/
console.log("-------------------------using string.match()----------------------------");

//gi indicates that we should get all possible combinations and the case insensitive match
console.log("lennyLENNYorengoweda is coming today".match(/lenny/gi));

console.log("--------------------------- using string.replace and replaceAll()-------------");
{
    let string = "Lenny Lenny Weda Orengo";
    console.log(string.replace(/Lenny/, "Japheth"));
    //replaceAll()
    console.log(string.replaceAll(/Lenny/ig, "Japheth"));
}
console.log("---------------------- using string.split()-------------------------------");
{
    let string = "I am going, to the marketplace";
    console.log(string.split(","));

}