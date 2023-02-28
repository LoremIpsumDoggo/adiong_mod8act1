var ppic;
var fname;
var gender;
var username;
var desc;
var year;
var age;
var source;


//Prompt: Please enter your full name:
fname = prompt("Please enter your full name:");

//Prompt: Please enter your username:
username = prompt("Please enter your username:");


//INPUT STAGE//


/*
Confirm:
What is your gender?
Press OK if you are Male
Cancel if Female
*/
if(confirm("What is your gender?\nPress [OK] if you are Male.\n[Cancel] if Female.")) {
    //IF OK
    gender = "MALE";
}
else {
    //IF CANCEL
    gender = "FEMALE";
}

//Alert: Your profile gender is set to MALE/FEMALE
alert("Your profile gender is set to " + gender);

//Prompt: Please type a brief description of yourself
desc = prompt("Please type a brief description of yourself.");

//Prompt: Please enter your Birth Year:
year = prompt("Please enter your Birth Year:")

//Confirm: Do you want to use a custom profile picture?
if(confirm("Do you want to use a custom profile picture?")) {
    //IF OK

    //Prompt: Please enter the file name of the picture. (ex. wow.jpg)
    //Picture uploaded: "lorem.png"
    source = prompt("Please enter the file name of the picture. (ex. wow.jpg)");

    //Alert: Profile picture has been updated.
    alert("Profile picture has been updated.");
}
else {
    //IF CANCEL
    
    //Alert: No image has been set.
    alert("No image has been set.");

    //Set image source to default source.
    source = "prof.png";
}


//DISPLAY STAGE//

document.getElementById("fname").innerHTML = fname;

if(gender == 'MALE') {
    document.getElementById("gender").innerHTML = "M";
}
else {
    document.getElementById("gender").innerHTML = "F";
}

document.getElementById("username").innerHTML = username;

document.getElementById("desc").innerHTML = desc;

document.getElementById("year").innerHTML = year;

document.getElementById("age").innerHTML = (2023 - year);

document.getElementById("ppic").src = source;