window.addEventListener('DOMContentLoaded', (event) => {
    function applyDarkTheme() {
        document.body.classList.add("color-scheme-theme");
        document.getElementById('darkSwitch').classList.remove("fa-sun");
        document.getElementById('darkSwitch').classList.add("fa-moon");
    }

    function applyLightTheme() {
        document.body.classList.remove("color-scheme-theme");
        document.getElementById('darkSwitch').classList.remove("fa-moon");
        document.getElementById('darkSwitch').classList.add("fa-sun");
    }

    let colorSchemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    document.getElementById('darkSwitch').onclick = (event) => {
        if (sessionStorage.getItem("appearance") !== null) {
            if (sessionStorage.getItem("appearance") === "dark") {
                applyLightTheme();
                sessionStorage.setItem("appearance", "light");
            }
            else if (sessionStorage.getItem("appearance") === "light") {
                applyDarkTheme();
                sessionStorage.setItem("appearance", "dark");
            }
        } else if (colorSchemeMediaQuery.matches) {
            applyLightTheme();
            sessionStorage.setItem("appearance", "light");
        } else {
            applyDarkTheme();
            sessionStorage.setItem("appearance", "dark");
        }
    };

    if (sessionStorage.getItem("appearance") !== null && sessionStorage.getItem("appearance") === "dark") {
        applyDarkTheme();
    } else if (sessionStorage.getItem("appearance") !== null && sessionStorage.getItem("appearance") === "light") {
        applyLightTheme();
    } else if (colorSchemeMediaQuery.matches) {
        applyDarkTheme();
    } else {
        applyLightTheme();
    }


    colorSchemeMediaQuery.addEventListener("change", e => {
        if (sessionStorage.getItem("appearance") === null) {
            if (e.matches) {
                applyDarkTheme();
            } else {
                applyLightTheme();
            }
        }
    });
});