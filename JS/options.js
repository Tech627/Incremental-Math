let theme = {
    light: "#FFFFFF",
    dark: "#000000",
    purple: "200589",
    active: false,
}

function ChangeTheme() {
    if(theme.active === false) {
        document.getElementById("t-t").classList.add("active")
        theme.active = true
    }
    else {
        theme.active = false
        document.getElementById("t-t").classList.remove("active")
    }
}

function Light() {
    document.getElementById("app").style.backgroundColor = theme.light   
}

function Dark() {
    document.getElementById("app").style.backgroundColor = theme.dark
}