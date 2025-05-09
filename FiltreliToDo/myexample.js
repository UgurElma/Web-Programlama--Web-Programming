function AreaHTML() {
    if (window.innerWidth < 600) {
        document.querySelector(".container").setAttribute("style", "width: 450px;");
        document.querySelectorAll(".row i").forEach(function (row) {
            row.setAttribute("style", "left: 340px;");
        });
        document.querySelectorAll(".content").forEach(function (content) {
            content.setAttribute("style", "width: 400px;");
        });
    }
    else {
        document.querySelector(".container").setAttribute("style", "width: 600px;");
        document.querySelectorAll(".row i").forEach(function (row) {
            row.setAttribute("style", "left: 480px;");
        });
        document.querySelectorAll(".content").forEach(function (content) {
            content.setAttribute("style", "width: 550px;");
        });
    }
}
window.onresize = AreaHTML;
function cElementRow() {
    const input = document.getElementById('ekleme');
    const liler = document.querySelectorAll(".content");
    if (input.value == "" || input.value.length > 65) {
        alert("Hatalı giriş!");
    }
    else {
        if (liler.length > 0) {
            liler.forEach(function (li) {
                if (li.textContent.toLowerCase().replace(/\s+/g, '') == input.value.toLowerCase().replace(/\s+/g, '')) {
                    alert("Aynısı zaten listede var!");
                }
                else {

                }
            });
        }
        else {
            const table = document.querySelector(".tableContainer");
            const index = table.children.length + 1;
            const row = document.createElement("div");
            row.className = "row";
            row.id = "toDo" + index;
            const content = document.createElement("div");
            content.className = "content";
            const kapa = document.createElement("div");
            kapa.className = "kapa";
            const li = document.createElement("li");
            li.textContent = input.value;
            const i = document.createElement("i");
            i.className = "fa-solid fa-x";
            i.addEventListener("click", function () {
                document.getElementById(row.id).remove();
            });
            kapa.appendChild(i);
            content.appendChild(li);
            row.appendChild(content);
            row.appendChild(kapa);
            table.appendChild(row);
        }
    }
    input.value = "";
    AreaHTML();
}
function filtreleme() {
    const contents = document.querySelectorAll(".content");
    const filtre = document.querySelector("#filtre").value.toLowerCase().replace(/\s+/g, '');
    debugger;
    contents.forEach(function (content) {
        console.log(content.children[0].innerHTML.toLowerCase().replace(/\s+/g, ''));
        if (!(content.children[0].innerHTML.toLowerCase().replace(/\s+/g, '').includes(filtre))) {
            content.parentElement.setAttribute("style", "display: none");
        }
        else {
            content.parentElement.setAttribute("style", "display: block");
        }
    });
}