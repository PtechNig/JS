const forms = document.querySelector(".forms");
    links = document.querySelectorAll(".link");
    pwOpen = document.querySelectorAll(".fa-regular");

pwOpen.forEach(open => {
    open.addEventListener("click", () => {
        let pwField = open.parentElement.querySelectorAll(".password")

        pwField.forEach(password => {
            if(password.type === "password") {
                password.type = "text";
                open.classList.replace("fa-eye-slash", "fa-eye");
                return;
            }

            password.type = "password";
            open.classList.replace("fa-eye", "fa-eye-slash" )
        })
    })
} )

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        forms.classList.toggle("show-signup");

    })
})



{/* <i class="fa-regular fa-eye"></i> */}