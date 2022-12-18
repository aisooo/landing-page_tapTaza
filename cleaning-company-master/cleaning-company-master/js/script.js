"use strict"

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		if (error === 0) {

		} else {
			alert('Fill in required fields');
		}

	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');
		
		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error++;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.add('_error');
	}
	//Функция теста email
	function emailTest(input) {
		return !/^\w+([\.~]?\w+)*@\w+([\.~]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}

	//Получаем инпут file в переменную
	const formImage  = document.getElementById('formImage');
	//Получаем див для Preview в переменную
	const formPreview  = document.getElementById('formPreview');

	//Слушаем ищменения в инпут file
	formImage.addEventListener('change', () => {
		uploadFile(formImage.files[0]);
	});

	function uploadFile(file) {
		//check the file type
		if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
			alert('Only images');
			formImage.value = '';
			return;
		}
		//check the file size
		if (file.size > 2 * 1024 * 1024) {
			alert('The file should be no more than 2 mb');
			return;
		}
	}

});


