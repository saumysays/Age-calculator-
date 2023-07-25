const inputbutton = document.querySelector(".age-dob-input");
const calculatebutton = document.querySelector(".calculate-button");
const ageresult = document.querySelector(".age-result");

calculatebutton.addEventListener("click", () => {
    if(inputbutton.value == ""){
        alert("Please enter your date of birth");
    }else{
        console.log("input",inputbutton.value);
        const dob = new Date(inputbutton.value);
        console.log("dob" , dob);
        const dob_year = dob.getFullYear();
        console.log("dob_year" , dob_year);


        const now = new Date();
        console.log("now" , now);
        const now_year = now.getFullYear();
        console.log("now_year" , now_year);
        const age = now_year - dob_year;
        console.log("age", age);

        ageresult.innerHTML = 'Your age is ${age}';
    }
});