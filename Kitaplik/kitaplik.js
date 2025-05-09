const values = document.querySelectorAll(".value");
function veriKontrolu(index) {
    let isTrue = true;
    for (let i = 0; i < values.length; i++) {
        if (values[i].value == "" || values[i].value == null) {
            if ((index === 2 || index === 3) && i === 0) {
                alert("Lütfen ISBN değerini giriniz! İşleminiz gerçekleştirilemedi!");
                isTrue = false;
                break;
            }
            else if (index === 1 || index === 4) {
                alert("Boş değer girdiniz! İşleminiz gerçekleştirilemedi!");
                isTrue = false;
                break;
            }
        }
        if (index === 1 && i === 0) {
            const rows = document.querySelectorAll(".contentRow");
            for (let j = 0; j < rows.length; j++) {
                if (rows[j].children[0].textContent === values[0].value) {
                    alert("Bu ISBN numaralı kitap zaten var! İşleminiz gerçekleştirilemedi!");
                    isTrue = false;
                    break;
                }
            }
        }
    }
    if (isTrue) {
        if (index === 1) {
            kitapEkleme();
        }
        else if (index === 2) {
            kitapSilme();
        }
        else if (index === 3) {
            kitapBulma();
        }
        else if (index === 4) {
            kitapGüncelleme();
        }
    }
    else {
        isTrue = true;
    }
}
function kitapEkleme() {
    const table = document.querySelector(".content");
    const row = document.createElement("tr");
    row.className = "contentRow";
    values.forEach(function (value) {
        const td = document.createElement("td");
        td.textContent = value.value;
        row.appendChild(td);
    });
    row.addEventListener("click", function () {
        for (let i = 0; i < row.children.length; i++) {
            values[i].value = row.children[i].textContent;
        }
        document.querySelector("#guncelle").disabled = false;
    });
    table.appendChild(row);
    verileriTemizle();
}
function kitapSilme() {
    const rows = document.querySelectorAll(".contentRow");
    let isFind = false;
    for (let i = 0; i < rows.length; i++) {
        if (values[0].value === rows[i].children[0].textContent) {
            rows[i].remove();
            isFind = true;
            break;
        }
    }
    if (!isFind) {
        alert("ISBN numarası " + values[0].value + " olan kitap bulunamadı!");
    }
    verileriTemizle();
}
function kitapBulma() {
    const rows = document.querySelectorAll(".contentRow");
    let isFind = false;
    for (let i = 0; i < rows.length; i++) {
        if (values[0].value === rows[i].children[0].textContent) {
            values[1].value = rows[i].children[1].textContent;
            values[2].value = rows[i].children[2].textContent;
            values[3].value = rows[i].children[3].textContent;
            values[4].value = rows[i].children[4].textContent;
            document.querySelector("#guncelle").disabled = false;
            isFind = true;
            break;
        }
    }
    if (!isFind) {
        alert("ISBN numarası " + values[0].value + " olan kitap bulunamadı!");
    }
}
function verileriTemizle() {
    values.forEach(function (value) {
        value.value = "";
    });
    document.querySelector("#guncelle").disabled = true;
}
function kitapGüncelleme() {
    const rows = document.querySelectorAll(".contentRow");
    for (let i = 0; i < rows.length; i++) {
        if (values[0].value === rows[i].children[0].textContent) {
            rows[i].children[1].textContent = values[1].value;
            rows[i].children[2].textContent = values[2].value;
            rows[i].children[3].textContent = values[3].value;
            rows[i].children[4].textContent = values[4].value;
            break;
        }
    }
    verileriTemizle();
}