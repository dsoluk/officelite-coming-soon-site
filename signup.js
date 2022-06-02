
// Validation / Error Handling on Form
// --------------------------------------
function checkEmpty (enteredID, enteredValue) {
    if (enteredValue !== "" && enteredValue !== null) {
        // console.log("Is NOT empty");
        return false;
    } else {
        // console.log("Value is empty so mark as red");
        return true;
    }
};

function ValidateEmail(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
        console.log("Valid email address!");
        return true;
    }
    else
    {
    console.log("You have entered an invalid email address!");
    // document.form1.text1.focus();
    return false;
    }
};

//checkEmpty once submit button is clicked
let submitBtn = document.querySelector('#submit');
// console.log(submitBtn);

submitBtn.addEventListener("click", function(e) {
    console.log("The target is: " + e.target);

    e.preventDefault();

    //check Name is not empty
    let enteredName = document.querySelector("#name");
    // console.log(enteredName.classList);
    checkEmpty(enteredName.id, enteredName.value) ?
        enteredName.classList.add("clr-error", "border-err") :
        console.log("enteredName is not Empty");

    //check Email is not empty and valid pattern
    let enteredEmail = document.querySelector("#email");

        checkEmpty(enteredEmail.id, enteredEmail.value);

        ValidateEmail(enteredEmail.value);



})











// const changeSelected = (e) => {
//     const $select = document.querySelector('#mySelect');
//     $select.value = 'free'
//   };
  
//   document.querySelector('.changeSelected').addEventListener('click', changeSelected);