
var expenses = [];

function addExpense() {

    var name = document.getElementById("name").value;
    var amount = Number(document.getElementById("amount").value);
    var category = document.getElementById("category").value;

    if (name == "" || amount <= 0 ||
        document.getElementById("amount").value == "") {

        alert("Please enter valid details");
        return;
    }

    var expense = {
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";

    showExpenses();
}

function showExpenses() {

    var list = document.getElementById("list");
    var filter = document.getElementById("filter").value;
    var total = 0;

    list.innerHTML = "";

    for (var i = 0; i < expenses.length; i++) {

        total = total + expenses[i].amount;

        if (filter == "All" || filter == expenses[i].category) {

            var div = document.createElement("div");
            div.className = "expense";

            var text = document.createElement("span");

            text.innerHTML = expenses[i].name +
                " - ₹" + expenses[i].amount +
                " (" + expenses[i].category + ")";

            var btn = document.createElement("button");
            btn.innerHTML = "Delete";
            btn.className = "delete";

            btn.onclick = function (index) {
                return function () {
                    expenses.splice(index, 1);
                    showExpenses();
                };
            }(i);

            div.appendChild(text);
            div.appendChild(btn);

            list.appendChild(div);
        }
    }

    document.getElementById("total").innerHTML = total;

    if (expenses.length == 0) {
        list.innerHTML = "No expenses added yet";
    }
}
