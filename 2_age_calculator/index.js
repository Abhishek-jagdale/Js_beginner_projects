//step 1 Selecting elements to perform operations 
const buttonEl = document.getElementById("btn");

const birthdayEl = document.getElementById("birthday");
const result = document.getElementById("result")
// now applying event listener on button
buttonEl.addEventListener("click",()=>{
  // getting the birthday Value.
  const birthdayValue = birthdayEl.value;
  //  using conditions to apply calculatefn() and add alert on invalid input 
  if(birthdayValue === ""){
    alert("Enter your age plzzzz")
  }
  else{
      //  calling Calculate age function 
    let exactAge =    getAge(birthdayValue);
      result.textContent = `You are ${exactAge} ${exactAge>1 ? "years" : "year"} Old`;
  }
})
// creating function to get the exact age 

function getAge(birthdayValue){
  // this gives us complete time data 
  const currentDate = new Date();
  // console.log(currentDate)
  const birthdayDate = new Date(birthdayValue);
  // now to get the only year we have getYear function
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();

  // getting the month for exact age 
  const month =  currentDate.getMonth() - birthdayDate.getMonth()
  // console.log(month)
  //  now using conditon to check the has'nt occured or not do change the age 
  if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
    age--;
  }
  return age;


}



// || (OR): The condition inside the if statement is true if either of the two parts (month < 0 or (month === 0 && currentDate.getDate() < birthdayDate.getDate())) is true. This checks if the birthday has not yet occurred this year due to either month or date.

// && (AND): The second part of the condition (month === 0 && currentDate.getDate() < birthdayDate.getDate()) is only true if both the current month is the birth month and the current date is before the birthday. This ensures we correctly adjust the age only if the birthday hasn't yet occurred this month.