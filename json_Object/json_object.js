/*
    JSON is a format used for structuring data so that web applications can communicate with each other:

    JSON.parse(json, function) method - used to parse a json string and returns a json object
    The function can be used to process the result and it is called for each item.
*/

{
    let json = '{"Name": "lenny", "school": "JKUAT"}';
    console.log(JSON.parse(json).Name);
}


{
    let json = {
        Name : "Lenny",
        school : "JKUAT"
    };
    console.log(JSON.stringify(json));
}