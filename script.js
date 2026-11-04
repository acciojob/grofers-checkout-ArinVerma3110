const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const priceElements = document.querySelectorAll(".price")
	let totalPrice = 0;
	const table = document.querySelector("table");

	priceElements.forEach((element) => {
		totalPrice += parseInt(element.textContent);
	});

	cont newRow = document.createElement("tr");
	cont newCell = document.createElement("td");

	newRow.id = "ans";

	newCell.textContent = "Total Price: Rs.", totalPrice;
	newRow.appendChild(newCell);
	table.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);

