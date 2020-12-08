var strCode;

window.addEventListener("load", function() {
    document.getElementById("btn").addEventListener("click", getCode);
});

function getCode(event) {
    strCode = document.getElementById("code").value.replace(/\s/, "");
    if (strCode === "666") {
        document.documentElement.style.backgroundColor = "#821111";
        document.documentElement.style.color = "#ff6666";
        document.getElementById("btn").style.backgroundColor = "#ff6666";
        document.getElementById("btn").style.color = "#821111";
    } else {
        document.documentElement.style.cssText = "";
        document.getElementById("btn").style.cssText = "";
    }
    if (strCode === "MOPTheFloor")
        document.getElementById("btn").textContent = "תחום וידאו ע...הם נהדרים";
    else if (strCode === "3.1415")
        document.getElementById("btn").textContent = "יאמי";
    else if (strCode === "42") {
        document.getElementById("btn").textContent = "אתם כאלה חכמים, לי יש מחשב בגודל פלנטה, מה לכם?"
    } else if (strCode === "1234") {
        console.log("And you claim we need life support!");
        document.getElementById("btn").textContent = "נסיון טוב, אולי בפעם הבאה";
    } else
        document.getElementById("btn").textContent = "אוקיי";    
    if(strCode === "6158968") {
        document.getElementById("right").style.display = "block";
        document.getElementById("wrong").style.display = "none";
    } else {
        document.getElementById("wrong").style.display = "block";
        document.getElementById("right").style.display = "none";
    }
}