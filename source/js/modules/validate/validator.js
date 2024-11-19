export const validator = (fieldData, validationConfig) => {
	const EMAIL_REGEX = /^([A-Za-z0-9_\-]+(?:\.[A-Za-z0-9_\-]+)*@)?([A-Za-z0-9_\-]+(?:\.[A-Za-z0-9_\-]+)*)\.([A-Za-z]{2,4})$/;
	const errors = {}

	const validate = (validateMethod, validationData, config) => {
		switch (validateMethod) {
			case 'isRequired':
				if (typeof validationData === 'boolean') {
					if (!validationData) {
						return config.errorMessage
					}
				} else if (validationData === null) {
					return config.errorMessage
				} else if (!validationData) {
					return config.errorMessage
				}
				break
			case 'isEmail':
				if (!EMAIL_REGEX.test(validationData)) {
					return config.errorMessage
				}
				break
			case 'maxSize':
				if (validationData.size > 52428800) {
					return config.errorMessage
				}
				break
			case 'minLengthTel':
				if (validationData.length !== 18) {
					return config.errorMessage
				}
				break
			default:
				break
		}

		return null
	}

	for (const fieldName in fieldData) {
		for (const validateMethod in validationConfig[fieldName]) {
			const error = validate(validateMethod, fieldData[fieldName], validationConfig[fieldName][validateMethod])

			if (error) {
				errors[fieldName] = error
				break
			}
		}
	}

	return errors
}
