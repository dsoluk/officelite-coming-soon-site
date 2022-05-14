
// Validation / Error Handling on Form
// --------------------------------------
function checkEmpty (enteredID, enteredValue) {
    if (enteredValue !== "" && enteredValue !== null) {
        console.log("Is NOT empty")
        return true
    } else {
        console.log("Value is empty so mark as red")
        return `
            <input type="text" id="${enteredID}" name="${enteredID}" placeholder="${enteredValue}"
                class="clr-error border-err"><br><br>
        `
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
    return `
            <input type="email" id="email" name="email" placeholder="  Email Address"
                class="clr-error border-err"><br><br>
        `;
    }
};

//checkEmpty once submit button is clicked
let submitBtn = document.querySelector('button[type="submit"]');
console.log(submitBtn);

submitBtn.addEventListener('click', function(e) {
    console.log("Form submitted...validating inputs");

    //check Name is not empty
    let enteredName = document.querySelector("#name");

        checkEmpty(enteredName.id, enteredName.value);
    
    //check Email is not empty and valid pattern
    // let enteredEmail = document.querySelector("#email");

    //     checkEmpty(enteredEmail.id, enteredEmail.value);

    //     ValidateEmail(enteredEmail.value);



})











// const changeSelected = (e) => {
//     const $select = document.querySelector('#mySelect');
//     $select.value = 'free'
//   };
  
//   document.querySelector('.changeSelected').addEventListener('click', changeSelected);