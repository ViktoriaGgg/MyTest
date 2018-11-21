function showText (el) {
	if(el.previousElementSibling.clientHeight === 110) {
		el.previousElementSibling.style.height = "100%";
		el.innerHTML = "Сховати...";
	} else {
		el.previousElementSibling.style.height = "110px";
		el.innerHTML = "Дізнатись більше...";
	}
}