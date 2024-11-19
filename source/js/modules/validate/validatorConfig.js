export const validatorConfig = {
	name: {
		isRequired: {
			errorMessage: 'Поле не может быть пустым'
		}
	},
	textarea: {
		isRequired: {
			errorMessage: 'Поле не может быть пустым'
		}
	},
	email: {
		isRequired: {
			errorMessage: 'Поле не может быть пустым'
		},
		isEmail: {
			errorMessage: 'Некорректный email'
		}
	},
    tel: {
        isRequired: {
			errorMessage: 'Поле не может быть пустым'
		},
		minLengthTel: {
			errorMessage: 'Номер телефона заполнен не полностью'
		}
    },
	agree: {
		isRequired: {
			errorMessage: 'Необходимо дать согласие на обработку персональных данных'
		}
	},
	file: {
		isRequired: {
			errorMessage: 'Необходимо прикрепить файл'
		},
		maxSize: {
			errorMessage: 'Максимальный размер файла - 50 МБ'
		}
	}
}