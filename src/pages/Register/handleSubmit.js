function handleFormSubmit(e, formData, setErrors, finishShopping) {
    e.preventDefault()
    const validationErrors = validateForm(formData)

    const areThereAnyError = (Object.keys(validationErrors).length !== 0)
    if (areThereAnyError) {
        setErrors(Object.values(validationErrors)[0])
    } else {
        finishShopping()
    }
}

const validateForm = (formData) => {
    const errors = {}

    if (!formData.nome) {
        errors.nome = 'Nome é obrigatório.'
    }

    if (!formData.email) {
        errors.email = 'E-mail é obrigatório.'
    } else if (!isValidEmail(formData.email)) {
        errors.email = 'E-mail inválido.'
    }

    if (!formData.cpf) {
        errors.cpf = 'CPF é obrigatório.'
    } else if (!isValidCPF(formData.cpf)) {
        errors.cpf = 'CPF inválido.'
    }

    if (!formData.cep) {
        errors.cep = 'CEP é obrigatório.'
    } else if (!isValidCEP(formData.cep)) {
        errors.cep = 'CEP inválido.'
    }

    if (!formData.rua) {
        errors.rua = 'Rua é obrigatória.'
    }

    if (!formData.bairro) {
        errors.bairro = 'Bairro é obrigatório.'
    }

    if (!formData.cidade) {
        errors.cidade = 'Cidade é obrigatória.'
    }

    if (!formData.uf) {
        errors.uf = 'UF é obrigatória.'
    }

    if (!formData.numero) {
        errors.numero = 'Número é obrigatório.'
    }

    if (!formData.dataNascimento) {
        errors.dataNascimento = 'Data de Nascimento é obrigatória.'
    } else if (!isValidDate(formData.dataNascimento)) {
        errors.dataNascimento = 'Data de Nascimento inválida.'
    } else if (!isAdult(formData.dataNascimento)) {
        errors.dataNascimento = 'É necessário ter 18 anos ou mais.'
    }

    if (!formData.senha) {
        errors.senha = 'Senha é obrigatória.'
    } else if (formData.senha.length < 8) {
        errors.senha = 'Senha deve ter no mínimo 8 dígitos.'
    }

    return errors
}

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

const isValidCPF = (cpf) => {
    return cpf.length === 11
}

const isValidCEP = (cep) => {
    const cepRegex = /^[0-9]+$/
    return cepRegex.test(cep)
}

const isValidDate = (date) => {
    const parsedDate = new Date(date)
    return !isNaN(parsedDate) && parsedDate <= new Date()
}

const isAdult = (date) => {
    const parsedDate = new Date(date)
    const today = new Date()
    const yearsDiff = today.getFullYear() - parsedDate.getFullYear()
    if (yearsDiff < 18) {
        return false
    } else if (yearsDiff === 18) {
        if (today.getMonth() < parsedDate.getMonth()) {
            return false
        } else if (
            today.getMonth() === parsedDate.getMonth() &&
            today.getDate() < parsedDate.getDate()
        ) {
            return false
        }
    }
    return true
}

export default handleFormSubmit