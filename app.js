//Prints out in the console log a parody of "99 Bottles"
function CodeSingAlong() {
    for (i = 0; i < friends.length; i++) {
        let name = friends[i];
        const friendDiv = document.createElement("div");
        friendDiv.className = "friend";
        document.body.appendChild(friendDiv);
        let friendName = document.createElement("h3");
        friendName.textContent = name;
        friendDiv.appendChild(friendName);

        let code = 99;
        while (code > 0) {
            let lyric = document.createElement("p");
            let codeCLEAR = code - 1;

            if (code > 2) {
                lyric.textContent = code + " lines of code in the file, " + code + " lines of code; " + name + " strikes one out, clears it all out, " + codeCLEAR + " lines of code in the file";
            }
            else if (code > 1) {
                lyric.textContent = code + " lines of code in the file, " + code + " lines of code; " + name + " strikes one out, clears it all out, " + codeCLEAR + " line of code in the file";
            }
            else {
                lyric.textContent = code + " line of code in the file, " + code + " line of code; " + name + " strikes one out, clears it all out, " + "no more lines of code in the file";
            }
            friendDiv.appendChild(lyric);
            code--;

        }
    }
    return;
}

let friends = ["Josh", "Harry", "Jonathan", "Chris", "Michael"];

const singBtn = document.createElement("button");
singBtn.appendChild(document.createTextNode("Sing!"));
document.body.appendChild(singBtn);
singBtn.addEventListener("click", CodeSingAlong);