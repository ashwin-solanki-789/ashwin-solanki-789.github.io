const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
    document.body.classList.add("dark-theme");
} else {
    document.body.classList.remove("dark-theme");
}

$('.toggle-btn').click(() => {
    $('body').toggleClass('dark-theme')
})

function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

$('.details').hide()

document.getElementById("defaultOpen").click();

$('.k1').click(() => {
    $('.k1').hide()
    $('.section1').animate({
        bottom: "250px",
        opacity: '0'
    }, () => {
        $(".section1").css({ "display": "none" })
        $('.details').show().animate({
            bottom: "250px",
            opacity: '1'
        })
    })
})