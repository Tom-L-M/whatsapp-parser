function parseMessages(messageBlock) {
    var check, main, regOne, regTwo, namePoint;

    regOne = new RegExp("\n[^\;]*", "mgi");
    regTwo = new RegExp(":[^\;]*", "mgi");

    main = String(messageBlock).substring(0, 297024);
    if (String(messageBlock).length > 297024) {
        check = `<br />Os últimos caracteres não foram compilados, pois o bloco ultrapassa o limite de 297024 caracteres.`;
    } else {check = "<br />"};

    var firstParse = main.split(/\n/);

    for (var i = 0; i < firstParse.length; i++) {
        if (firstParse[i].indexOf("-") == 17) {
            firstParse[i] = firstParse[i].substring(0, 5) + firstParse[i].substring(16);
        } else {
            firstParse[i] = firstParse[i];
        }
    };

    let nameArrayOne = [];

    for (var j = 0; j < firstParse.length; j++) {
        namePoint = firstParse[j].indexOf(":");
        if (firstParse[j].indexOf("-") == 1 && firstParse[j].includes(":")) {
            nameArrayOne.push(firstParse[j].substring(3, namePoint));
        }
    };

    let nameSet = new Set(nameArrayOne);
    let nameArray = [...nameSet];
    console.log(nameArray);

    document.getElementById("message-output").style.border = "2px solid black";
    document.getElementById("message-output").style.padding = "20px";
    
    for (var k = 0; k < firstParse.length; k++) {
        var EL = document.createElement("li");
        EL.innerHTML = `<br />${firstParse[k].substring(0)}`;
        document.getElementById("cellphone-project").appendChild(EL);
    };

    document.getElementById("read-link").onclick = function() {
        document.getElementById("message-output").innerHTML = firstParse.join("<br /><br />") + `<h3>${check}</h3><div id="up"></div>`;
        window.scrollTo(0, 500);
        document.getElementById("toBottom").style.display = "block";
        document.getElementById("toTop").style.display = "block";
    };
};
function clearNodes() {
    document.getElementById("cellphone-project").innerHTML = `<ul id="cellphone-project"></ul>`;
}
