// INCEPUT fixed navbar

window.addEventListener("scroll", function(){

    var block_socials_nav = document.querySelector(".block_socials_nav")
    block_socials_nav.classList.toggle("apper", window.scrollY > 350)
    var nav = document.querySelector(".nav")
    nav.classList.toggle("sticky", window.scrollY > 0)
})

// SFARSIT fixed navbar

$(document).ready(function () {
    $('select').material_select();
});

document.querySelector('#regbutton').addEventListener("click", (e) => {
    e.preventDefault();
    toastr.remove()
    const rezervare = {
        nume: document.querySelector('#nume').value,
        prenume: document.querySelector('#prenume').value,
        telefon: document.querySelector('#telefon').value,
        email: document.querySelector('#email').value,
        descriere_costum: document.querySelector('#descriere_costum').value,
        grupa: document.querySelector("#grupa").value,
        serie: document.querySelector('#serie').value,
        an_facultate: document.querySelector("#an_facultate").value,
    }
    axios.post('/inscriere', rezervare)
        .then((response) => {
            toastr.success("Te-ai inscris cu succes!");
        })
        .catch((error) => {
            const values = Object.values(error.response.data)
            console.log(error);
            values.map(item => {
                toastr.error(item)
            })
        })

}, false)