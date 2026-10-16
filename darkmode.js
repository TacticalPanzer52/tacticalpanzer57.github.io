const themeSwitch = document.getElementById('theme')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
}

if(darkmode === "active") {
    enableDarkmode()
} else{
    disableDarkmode()
}

themeSwitch.addEventListener("click", () => {
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
