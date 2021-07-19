import {table_filter_init} from './filtering-table.js';
table_filter_init();

let edit = document.getElementById('btn-modify-record');
edit.addEventListener("click", () => {
	let clickForm = document.querySelectorAll(".table-data__modify a[href='#edit-record']");
	clickForm.forEach(form => {
		if (form.getAttribute("style")) {
			form.removeAttribute("style");
		} else {
			form.setAttribute("style", "opacity:1; visibility:visible;");
		}
		form.addEventListener('click', () => {
			clickForm.forEach(closeButtonForm => {
				closeButtonForm.removeAttribute("style");
			});
		});
	});
});
let formEdit_name = document.querySelector(" .modal-window__edit-record .form__content .form__body form fieldset input[type='text']"),
	formEdit_url = document.querySelector(" .modal-window__edit-record .form__content .form__body form .form__elements-group-2 fieldset input[type='url']"),
	formEdit_select = document.querySelectorAll(" .modal-window__edit-record .form__content .form__body form .form__elements-group fieldset select"),
	formEdit_buttonSave = document.querySelector(" .modal-window__edit-record .form__content .form__body form .form__actions button[type='submit']:last-child"),
	formAdd_name = document.querySelector(".modal-window__add-record .form__content .form__body form fieldset input[type='text']"),
	formAdd_url = document.querySelector(".modal-window__add-record .form__content .form__body form .form__elements-group-2 fieldset input[type='url']"),
	formAdd_select = document.querySelectorAll(" .modal-window__add-record .form__content .form__body form .form__elements-group fieldset select"),
	formAdd_button = document.querySelector(" .modal-window__add-record .form__content .form__body form .form__actions button[type='submit']"),
	formAdd_date = document.querySelector(".modal-window__add-record .form__content .form__body form .form__elements-group-2 fieldset input[type='date']");

function validName() {
	let regName = /^[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}$/g;
	if (formEdit_name.value != "" && formEdit_name.value == formEdit_name.value.match(regName) || formAdd_name.value != "" && formAdd_name.value == formAdd_name.value.match(regName)) {
		return true;
	} else {
		return false;
	}
}

function validURL() {
	let regURL = /^[https]{1,5}\:\/{2,2}[orcid]{1,5}\.[org]{1,3}\/$/g;
	if (formEdit_url.value != "" && formEdit_url.value == formEdit_url.value.match(regURL) || formAdd_url.value != "" && formAdd_url.value == formAdd_url.value.match(regURL)) {
		return true;
	} else {
		return false;
	}
}

function validDate() {
	if (formAdd_date.value == "") {
		return false;
	} else {
		return true;
	}
}
formEdit_name.addEventListener("input", validName);
formEdit_url.addEventListener("input", validURL);
formEdit_buttonSave.addEventListener("click", () => {
	formEdit_select.forEach(selectEdit => {
		if (selectEdit.selectedIndex == "0") {
			event.preventDefault();
		} else {
			if (!validURL() || !validName()) {
				event.preventDefault();
			}
		}
	});
});
formAdd_name.addEventListener("input", validName);
formAdd_url.addEventListener("input", validURL);
formAdd_date.addEventListener("change", validDate);
formAdd_button.addEventListener("click", () => {
	formAdd_select.forEach(selectAdd => {
		if (selectAdd.selectedIndex == "0") {
			event.preventDefault();
		} else {
			if (!validURL() || !validName() || !validDate()) {
				event.preventDefault();
			}
		}
	});
});

window.addEventListener('DOMContentLoaded', () => {
	let burger = document.querySelector('.header__burger');
	let header_menu = document.querySelector('.header__menu');

	burger.addEventListener('click', function () {
		this.classList.toggle("active");
		header_menu.classList.toggle("active");
	});
});