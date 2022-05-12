let freebtn = document.querySelector ("#free");

console.log(freebtn)

freebtn.addEventListener('click', function() {
    console.log(freebtn.id);
    pricePlan = freebtn.id
    openSignup(pricePlan)
});

function openSignup(pricePlan) {
    console.log(pricePlan)
    window.open("./sign-up.html", "_blank")
}

// Validation / Error Handling on Form
// --------------------------------------
function checkEmpty (entered) {
    if (entered !== "" && entered !== null) {
        console.log("Is NOT empty")
        return 
    } else {
        console.log("Value is empty so mark as red")
        return `
            <input type="text" id="name" name="name" placeholder=${entered}
                class="clr-error border-err"><br><br>
        `
    }
}

//checkEmpty once submit button is clicked












// const changeSelected = (e) => {
//     const $select = document.querySelector('#mySelect');
//     $select.value = 'free'
//   };
  
//   document.querySelector('.changeSelected').addEventListener('click', changeSelected);