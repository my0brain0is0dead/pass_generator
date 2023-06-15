// Доступ к элементам html
const numbersCheckbox = document.getElementById('numbersFlag')
const lowercaseCheckbox = document.getElementById('lowerCaseFlag')
const uppercaseCheckbox = document.getElementById('upperCaseFlag')
const specialSymbolsCheckbox = document.getElementById('specialSymbolsFlag')
const generatePasswordButton = document.querySelector('#generateButton')
const outputField = document.querySelector('#outputPassword')
const customSymbolsInput = document.getElementById('customSymbolsInput')
const customSymbolsButton = document.querySelector('#customSymbolsButton')

// Флаги
/*export для обмена с testkit*/ let password
let flags = {
    numbers: false,
    lowercase: false,
    uppercase: false,  
    specSymbols: false,
};

// В зависимости от состояние чекбоксов присваивает флагу значение
function getCheckboxState(checkbox, flag) {
    if (checkbox.checked) {
        flag = true
        return flag
    } else {
        flag = false
        return flag
    }
};


//Получает длину пароля
function getPasswordLength() {
    let passwordLength = document.getElementById('lengthInput').value
    return passwordLength
};


// Проверяет значение флагов и включает символы в строку используемых
function generateList(numbers, lowercase, uppercase, specSymbols) {

    //Символьные строки для создания финальной строки генерации
    const numbersList = "1234567890"
    const lowercaseLettersList = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseLettersList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const specSymbolsList = "!#$%^&*+"
    let usedSymbols = ""

    if (numbers) usedSymbols += numbersList
    if (lowercase) usedSymbols += lowercaseLettersList
    if (uppercase) usedSymbols += uppercaseLettersList
    if (specSymbols) usedSymbols += specSymbolsList
    return usedSymbols
};

// Генерирует пароль из строки используемых символов
function generatePassword(usedSymbols, passwordLength) {
    let generatedPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        let newCharIndex = Math.floor(Math.random() * usedSymbols.length)
        let newChar = usedSymbols.charAt(newCharIndex)
        generatedPassword += newChar
    }
    return generatedPassword
};

function generateCustomPassword (customList, passwordLength) {
    let generatedPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        let newCharIndex = Math.floor(Math.random() * customList.length)
        let newChar = customList.charAt(newCharIndex)
        generatedPassword += newChar
    }
    return generatedPassword
}

// использовать для записи в файл
/*
При клике по кнопке и при изменении состояние чекбокса
проверяются и переприсваиваются значения чекбоксов, создается список символов,
создается список символов, генерируется пароль и выводится в абзац
*/

customSymbolsButton.addEventListener ("click", function(){
    let customList = customSymbolsInput.value
    let passwordLength = getPasswordLength()
    password = generateCustomPassword(customList, passwordLength) 
    outputField.value = password
})

generatePasswordButton.addEventListener ("click", function() {
    let passwordLength = getPasswordLength()
    flags.numbers = getCheckboxState(numbersCheckbox, flags.numbers)
    flags.lowercase = getCheckboxState(lowercaseCheckbox, flags.lowercase)
    flags.uppercase = getCheckboxState(uppercaseCheckbox, flags.uppercase)
    flags.specSymbols = getCheckboxState(specialSymbolsCheckbox, flags.specSymbols)
    usedSymbols = generateList(flags.numbers, flags.lowercase, flags.uppercase, flags.specSymbols)
    password = generatePassword(usedSymbols, passwordLength)
    outputField.value = password
}); 

numbersCheckbox.addEventListener ("change", function() {
    let passwordLength = getPasswordLength()
    flags.numbers = getCheckboxState(numbersCheckbox, flags.numbers)
    flags.lowercase = getCheckboxState(lowercaseCheckbox, flags.lowercase)
    flags.uppercase = getCheckboxState(uppercaseCheckbox, flags.uppercase)
    flags.specSymbols = getCheckboxState(specialSymbolsCheckbox, flags.specSymbols)
    usedSymbols = generateList(flags.numbers, flags.lowercase, flags.uppercase, flags.specSymbols)
    password = generatePassword(usedSymbols, passwordLength)
    outputField.value = password
});

lowercaseCheckbox.addEventListener ("change", function() {
    let passwordLength = getPasswordLength()
    flags.numbers = getCheckboxState(numbersCheckbox, flags.numbers)
    flags.lowercase = getCheckboxState(lowercaseCheckbox, flags.lowercase)
    flags.uppercase = getCheckboxState(uppercaseCheckbox, flags.uppercase)
    flags.specSymbols = getCheckboxState(specialSymbolsCheckbox, flags.specSymbols)
    usedSymbols = generateList(flags.numbers, flags.lowercase, flags.uppercase, flags.specSymbols)
    password = generatePassword(usedSymbols, passwordLength)
    outputField.value = password
});

uppercaseCheckbox.addEventListener ("change", function() {
    let passwordLength = getPasswordLength()
    flags.numbers = getCheckboxState(numbersCheckbox, flags.numbers)
    flags.lowercase = getCheckboxState(lowercaseCheckbox, flags.lowercase)
    flags.uppercase = getCheckboxState(uppercaseCheckbox, flags.uppercase)
    flags.specSymbols = getCheckboxState(specialSymbolsCheckbox, flags.specSymbols)
    usedSymbols = generateList(flags.numbers, flags.lowercase, flags.uppercase, flags.specSymbols)
    password = generatePassword(usedSymbols, passwordLength)
    outputField.value = password
});

specialSymbolsCheckbox.addEventListener ("change", function() {
    let passwordLength = getPasswordLength()
    flags.numbers = getCheckboxState(numbersCheckbox, flags.numbers)
    flags.lowercase = getCheckboxState(lowercaseCheckbox, flags.lowercase)
    flags.uppercase = getCheckboxState(uppercaseCheckbox, flags.uppercase)
    flags.specSymbols = getCheckboxState(specialSymbolsCheckbox, flags.specSymbols)
    usedSymbols = generateList(flags.numbers, flags.lowercase, flags.uppercase, flags.specSymbols)
    password = generatePassword(usedSymbols, passwordLength)
    outputField.value = password
}); 

/*
Добавить редактор пароля чтобы его можно было немного изменить когда он сгенерирован (done)
Добавить текстовое поле из символов которого будет генерироваться пароль (done)
Добавить проверки на сложность пароля
Добавить анимацию генерации паролей
Добавить связь с файлом в который будут записываться все сгенерированые пароли (hard)
*/