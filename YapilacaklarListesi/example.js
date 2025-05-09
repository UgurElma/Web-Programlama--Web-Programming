function AddToDo() {
    const listBox = document.querySelector(".list-group");
    const item = document.createElement("li");
    item.className = "list-group-item d-flex justify-content-between";
    item.id = "Yapılacak "+ (listBox.children.length + 1);
    const itemInput = document.createElement("input");
    itemInput.className = "form-control";
    itemInput.type= "text";
    const itemLink = document.createElement("a");
    itemLink.href = "#";
    itemLink.className = "delete-item";
    const itemI = document.createElement("i");
    itemI.style.margin = "10px 0px 0px 10px";
    itemLink.addEventListener("click",function(){
        document.getElementById(item.id).remove();
    });
    itemI.className = "fa fa-remove";
    itemLink.appendChild(itemI);
    item.appendChild(itemInput);
    item.appendChild(itemLink);
    listBox.appendChild(item);
}
