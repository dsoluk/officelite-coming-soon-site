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

