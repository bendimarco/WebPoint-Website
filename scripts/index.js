let form = document.querySelector("form");
form.addEventListener("submit", submit);

function getValue(elements, name) {
    return encodeURIComponent(elements[name].value);
}

function submit(e) {
    e.preventDefault();
    let elements = form.elements;
    fetch(`https://formsubmit.co/webpointexecutives@gmail.com?name=${getValue(elements, "name-input")}&email=${getValue(elements, "email-input")}&message=${getValue(elements, "message-input")}`, {method: "POST", mode: "no-cors"})
    .then(response => {
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
    });
    return false;
}
