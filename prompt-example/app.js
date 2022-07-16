let age = prompt("What is your age?");
alert(`Your age is ${age}`);
if (age > 18){
    swal({
        title: "Great",
        text: "welcome to Lalaland!",
        icon: "success"
    });
} else{
    swal({
        title: "Oops", 
        text: "Unfortunately, you do not qualify mate...",
        icon: "info"
    });
}