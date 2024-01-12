const nam = document.getElementById("input-name");
const modal = document.querySelector(".text-box");
const button = document.getElementById("close-button");
const input = document.getElementById("text-input");

nam.addEventListener("click", async function () {
	modal.style.display = "flex";
});

button.addEventListener("click", function () {
	const res = input.value;
	nam.innerText = res;
	modal.style.display = "none";
});
