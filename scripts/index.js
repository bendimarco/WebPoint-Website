let form = document.querySelector("form");
form.addEventListener("submit", submit);

function getValue(elements, name) {
    return elements[name].value;
}

function getFormJSON() {
    let elements = form.elements;
    return JSON.stringify({
        name: getValue(elements, "name-input"), 
        email: getValue(elements, "email-input"), 
        message: getValue(elements, "message-input")
    });
}

function submit(e) {
    e.preventDefault();
    swal({
        title: "Success!",
        text: "Your message has been sent.",
        icon: "success",
        button: "Awesome!",
    });
    fetch("https://cors-anywhere.herokuapp.com/https://formsubmit.co/ajax/webpointexecutives@gmail.com", {method: "POST", headers: {"Content-Type": "application/json"}, body: getFormJSON()})
    ;/*.then(response => {
        if (!response.ok) {
            throw new Error();
        } else {
            swal({
                title: "Success!",
                text: "Your message has been sent.",
                icon: "success",
                button: "Awesome!",
            });
        }
    }).catch(e => {
        swal({
            title: "Failure",
            text: "Something went wrong. Please try again and email us if the issue persists.",
            icon: "error",
            button: "Try again!",
        });
    });*/
    return false;
}
