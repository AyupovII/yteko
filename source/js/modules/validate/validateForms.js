import { validator } from './validator';
import { validatorConfig } from './validatorConfig';
import { phoneMask } from '../phone-mask';

export const validateForms = () => {
	const validate = (form) => {
		const inputContainers = form.querySelectorAll('[data-input-wrap]');
		inputContainers.forEach((inputContainer) => {
			const input = inputContainer.querySelector('[data-name]');
			if (!input) return;
			input.addEventListener('input', () => inputContainer.classList.remove('error'));
		});

		const formData = {};

		inputContainers.forEach((inputContainer) => {
			const input = inputContainer.querySelector('[data-name]');
			if (!input) return;
			if (input.type === 'checkbox') {
				formData[input.dataset.name] = input.checked;
			} else if (input.type === 'file') {
				// Добавлено условие для обработки типа "file"
				formData[input.dataset.name] = input.files.length > 0 ? input.files[0] : null; // Сохраняет файл или null, если файл не выбран
			} else {
				formData[input.dataset.name] = input.value;
			}
		});

		const validationErrors = validator(formData, validatorConfig);
		const errorsArray = Object.keys(validationErrors);

		if (errorsArray.length) {
			errorsArray.forEach((errorFieldName) => {
				const inputWithError = form.querySelector(`[data-name="${errorFieldName}"]`);
				const inputWithErrorContainer = inputWithError.closest('[data-input-wrap]');

				const errorField = inputWithErrorContainer.querySelector('[data-input-error]');
				if (errorField) {
					errorField.textContent = validationErrors[errorFieldName];
				}
				inputWithErrorContainer.classList.add('error');
			});
			return false;
		}

		return true;
	};

	// все формы
	const addEventListenersForms = () => {
		const enrolleToCourseForm = document.querySelectorAll('[data-form]');
		if (enrolleToCourseForm.length) {
			enrolleToCourseForm.forEach((form) => {
				if (!form.getAttribute('validationiinited')) {
					form.setAttribute('validationiinited', 'true');
					phoneMask();
					const submitButton = form.querySelector('[data-form-submit-button]');
					const hiddenSubmitButton = form.querySelector('[data-hidden-submit-button]');
					if (!submitButton) return
					submitButton.addEventListener('click', (evt) => {
						evt.preventDefault();
						if (validate(form)) {
							hiddenSubmitButton.click();
						}
					});
					
					form.addEventListener('submit', () => {
						const currentModal = form.closest('[data-modal]')
						if (currentModal) {
							currentModal.classList.remove('active');
						}
						const successModal = document.querySelector('[data-modal="notification"]');
						if (successModal) {
							successModal.classList.add('active');
						}
						setTimeout(() => {
							addEventListenersForms()
						}, 3000)
					});
				}
			});
		}
	};

	addEventListenersForms()
};
