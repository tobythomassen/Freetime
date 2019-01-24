var Freetime = {
    dark: false
}

if (document.cookie == "" || document.cookie == null) {
    document.cookie = "dark=" + Freetime.dark;
} else if (getCookie("dark") == "true") {
    Freetime.dark = true;
} else {
    Freetime.dark = false;
}

window.onload = function() {
    document.getElementById('switch-2').checked = Freetime.dark;
}

Freetime.settingsDialog = document.querySelector('.settings-dialog');
Freetime.itemEditDialog = document.querySelector('.item-edit-dialog');
Freetime.itemNewDialog = document.querySelector('.item-new-dialog');
Freetime.rewardUserDialog = document.querySelector('.reward-user-dialog');
Freetime.settingsButton = document.querySelector('.settings');

if (!Freetime.settingsDialog.showModal) {
    dialogPolyfill.registerDialog(Freetime.settingsDialog);
}
Freetime.settingsButton.addEventListener('click', function () {
    document.getElementById('switch-2').checked = Freetime.dark;
    Freetime.settingsDialog.showModal();
});
Freetime.settingsDialog.querySelector('.close').addEventListener('click', function () {
    Freetime.settingsDialog.close();
});

if (!Freetime.itemEditDialog.showModal) {
    dialogPolyfill.registerDialog(Freetime.itemEditDialog);
}
Freetime.itemEditDialog.querySelector('.close').addEventListener('click', function () {
    Freetime.itemEditDialog.close();
    document.getElementById('itemName').value = "";
    document.getElementById('itemDesc').value = "";
    document.getElementById('itemPrice').value = "";
});
Freetime.itemEditDialog.querySelector('.save').addEventListener('click', function () {
    // Use document.getElementById('itemName').value to get item name
    // Use document.getElementById('itemDesc').value to get item description
    // Use document.getElementById('itemPrice').value to get item price
    console.log("Item: " + document.getElementById('itemName').value + "\nDesc: " + document.getElementById('itemDesc').value + "\nPrice: " + document.getElementById('itemPrice').value);

    Freetime.itemEditDialog.close();
    document.getElementById('itemName').value = "";
    document.getElementById('itemDesc').value = "";
    document.getElementById('itemPrice').value = "";
});

if (!Freetime.itemNewDialog.showModal) {
    dialogPolyfill.registerDialog(Freetime.itemNewDialog);
}
Freetime.itemNewDialog.querySelector('.close').addEventListener('click', function () {
    Freetime.itemNewDialog.close();
    document.getElementById('newItemName').value = "";
    document.getElementById('newItemDesc').value = "";
    document.getElementById('newItemPrice').value = "";
});
Freetime.itemNewDialog.querySelector('.save').addEventListener('click', function () {
    // Use document.getElementById('newItemName').value to get item name
    // Use document.getElementById('newItemDesc').value to get item description
    // Use document.getElementById('newItemPrice').value to get item price
    console.log("New Item: " + document.getElementById('newItemName').value + "\nDesc: " + document.getElementById('newItemDesc').value + "\nPrice: " + document.getElementById('newItemPrice').value);

    Freetime.itemNewDialog.close();
    document.getElementById('newItemName').value = "";
    document.getElementById('newItemDesc').value = "";
    document.getElementById('newItemPrice').value = "";
});

if (!Freetime.rewardUserDialog.showModal) {
    dialogPolyfill.registerDialog(Freetime.rewardUserDialog);
}
Freetime.rewardUserDialog.querySelector('.close').addEventListener('click', function () {
    Freetime.rewardUserDialog.close();
    document.getElementById('ptsReward').value = "";
});
Freetime.rewardUserDialog.querySelector('.reward').addEventListener('click', function () {
    // Use document.getElementById('ptsReward').value to get points
    console.log("Rewarded " + document.getElementById('ptsReward').value + " points");

    Freetime.rewardUserDialog.close();
    document.getElementById('ptsReward').value = "";
});

function itemButton(index) {
    var tempItems = document.getElementById("itemTable").querySelectorAll("tr");
    var itemBuff = tempItems[index].querySelectorAll("td");
    console.log(tempItems);
    console.log(itemBuff);

    console.log("Item: " + index);
    document.getElementById('itemName').value = itemBuff[0].textContent;
    $('.itemName').addClass("is-dirty");
    document.getElementById('itemDesc').value = itemBuff[1].textContent;
    $('.itemDesc').addClass("is-dirty");
    document.getElementById('itemPrice').value = itemBuff[2].textContent;
    $('.itemPrice').addClass("is-dirty");
    Freetime.itemEditDialog.showModal();
}

function userButton(index) {
    console.log("User: " + index);
    Freetime.rewardUserDialog.showModal();
}

function newItem() {
    console.log("new item");
    Freetime.itemNewDialog.showModal();
}