let bgContainerEl = document.getElementById("bgContainer");
let themeUserInputEl = document.getElementById("themeUserInput");
let headingEl = document.getElementById("heading");

let lightThemeImgUrl =
    "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
let darkThemeImgUrl =
    "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";


function changetheme(event) {
    if (event.key === "Enter") {
        let themeUserInputElval = themeUserInputEl.value;

        if (themeUserInputElval === "Dark") {
            bgContainerEl.style.backgroundImage = darkThemeImgUrl;
            headingEl.style.color = "#ffffff";
        } else if (themeUserInputElval === "Light") {
            bgContainerEl.style.backgroundImage = lightThemeImgUrl;
            headingEl.style.color = "#014d40";
        } else {
            alert("Enter any value")
        }
    }
}
themeUserInputEl.addEventListener("keydown", changetheme);