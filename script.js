const nam = document.getElementById("input-name");
const modal = document.querySelector(".text-box");
const button = document.getElementById("close-button");
const input = document.getElementById("text-input");
let myField = localStorage.getItem("myTextName");
if (myField) {
	nam.innerText = myField;
}

nam.addEventListener("click", async function () {
	modal.style.display = "flex";
});

button.addEventListener("click", function () {
	let res = input.value;
	if (!res) {
		res = "~Dev";
	}
	nam.innerText = res;
	localStorage.setItem("myTextName", nam.innerText);
	modal.style.display = "none";
});
