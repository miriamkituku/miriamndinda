// --------------------
// 1. Image Slider (Left to Right)
// --------------------
let index = 0;

function slideImages() {
    const slides = document.querySelector(".slides");
    index++;

    if (index > 2) {
        index = 0;
    }

    slides.style.transform = "translateX(" + (-index * 100) + "%)";
}

setInterval(slideImages, 3000);


// --------------------
// 2. jQuery Show More (Events Page)
// --------------------
$(document).ready(function () {
    $(".btn").click(function () {
        $(this).next(".more").slideToggle();
    });
});


// --------------------
// 3. Form Validation + fadeIn Success
// --------------------
$(document).ready(function () {
    $("#regForm").submit(function (e) {
        e.preventDefault();

        let adm = $("#adm").val();
        let name = $("#name").val();
        let email = $("#email").val();

        if (adm === "" || name === "" || email === "") {
            alert("All fields are required!");
        } else {
            $(".success-message").fadeIn();
        }
    });
});