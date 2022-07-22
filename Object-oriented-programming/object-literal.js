/* 
    Object literals in javascipt:
*/

 const club = {
    Name: "Arsenal",
    Champions_League_honours:0, 
    Premier_League_honours: 5,
    reg_players: 56,
    nick_name: "Gunners",
    getnick_name: function(){
        return (`This club is also known as  the ${this.nick_name}`);
    },
    contacts: {
        mobile: 454545,
        landline: 57578
    }
};

console.log(club.getnick_name());
console.log(club.contacts.mobile);

/*
    using Object.create() method:
*/

console.log("--------------------------using Object.create() method----------------------------");
const myClub = Object.create(club);
console.log(myClub.Name);

