// Доступ к элементам html
const numbersCheckbox = document.getElementById('numbersFlag');
const lowercaseCheckbox = document.getElementById('lowerCaseFlag');
const uppercaseCheckbox = document.getElementById('upperCaseFlag');
const specialSymbolsCheckbox = document.getElementById('specialSymbolsFlag');
const generatePasswordButton = document.querySelector('#generateButton');
const outputPasswordP = document.querySelector('#outputPassword');
const checkboxesClass = document.querySelector('.checkbox');

// Флаги
let flags = {
    numbers: false,
    lowercase: false,
    uppercase: false,  
    specSymbols: false,
};

// В зависимости от состояние чекбоксов присваивает флагу значение
function checkboxStateSwitcher(checkbox, flag) {
    if (checkbox.checked) {
        flag = true;
        return flag;
    } else {
        flag = false;
        return flag;
    }
};


//Получает длину пароля
function getPasswordLength() {
    let passwordLength = document.getElementById('lengthFlag').value;
    return passwordLength;
};


// Проверяет значение флагов и включает символы в строку используемых
function generateList(numbers, lowercase, uppercase, specSymbols) {

    //Символьные строки для создания финальной строки генерации
    const numbersList = "1234567890";
    const lowercaseLettersList = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLettersList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specSymbolsList = "!#$%^&*+";
    let usedSymbols = "";

    if (numbers) usedSymbols += numbersList;
    if (lowercase) usedSymbols += lowercaseLettersList;
    if (uppercase) usedSymbols += uppercaseLettersList;
    if (specSymbols) usedSymbols += specSymbolsList;
    return usedSymbols;
};

// Генерирует пароль из строки используемых символов
function generatePassword(usedSymbols, passwordLength) {
    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        let newCharIndex = Math.floor(Math.random() * usedSymbols.length);
        let newChar = usedSymbols.charAt(newCharIndex);
        generatedPassword += newChar;
    }
    return generatedPassword;
};

/*
При клике по кнопке и при изменении состояние чекбокса
проверяются и переприсваиваются значения чекбоксов, создается список символов,
создается список символов, генерируется пароль и выводится в абзац
*/

generatePasswordButton.addEventListener ("click", function() {
    let passwordLength = getPasswordLength();
    flags.numbers = checkboxStateSwitcher(numbersCheckbox, flags.numbers);
    flags.lowercase = checkboxStateSwitcher(lowercaseCheckbox, flags.lowercase);
    flags.uppercase = checkboxStateSwitcher(uppercaseCheckbox, flags.uppercase);
    flags.specSymbols = checkboxStateSwitcher(specialSymbolsCheckbox, flags.specSymbols);
    let usedSymbols = generateList(flags.numbers, flags.lowercase, flags.uppercase, flags.specSymbols);
    let password = generatePassword(usedSymbols, passwordLength);
    outputPasswordP.innerHTML = password;
}); 


numbersCheckbox.addEventListener ("change", function() {
    let passwordLength = getPasswordLength();
    flags.numbers = checkboxStateSwitcher(numbersCheckbox, flags.numbers);
    flags.lowercase = checkboxStateSwitcher(lowercaseCheckbox, flags.lowercase);
    flags.uppercase = checkboxStateSwitcher(uppercaseCheckbox, flags.uppercase);
    flags.specSymbols = checkboxStateSwitcher(specialSymbolsCheckbox, flags.specSymbols);
    let usedSymbols = generateList(flags.numbers, flags.lowercase, flags.uppercase, flags.specSymbols);
    let password = generatePassword(usedSymbols, passwordLength);
    outputPasswordP.innerHTML = password;
});

lowercaseCheckbox.addEventListener ("change", function() {
    let passwordLength = getPasswordLength();
    flags.numbers = checkboxStateSwitcher(numbersCheckbox, flags.numbers);
    flags.lowercase = checkboxStateSwitcher(lowercaseCheckbox, flags.lowercase);
    flags.uppercase = checkboxStateSwitcher(uppercaseCheckbox, flags.uppercase);
    flags.specSymbols = checkboxStateSwitcher(specialSymbolsCheckbox, flags.specSymbols);
    let usedSymbols = generateList(flags.numbers, flags.lowercase, flags.uppercase, flags.specSymbols);
    let password = generatePassword(usedSymbols, passwordLength);
    outputPasswordP.innerHTML = password;
});

uppercaseCheckbox.addEventListener ("change", function() {
    let passwordLength = getPasswordLength();
    flags.numbers = checkboxStateSwitcher(numbersCheckbox, flags.numbers);
    flags.lowercase = checkboxStateSwitcher(lowercaseCheckbox, flags.lowercase);
    flags.uppercase = checkboxStateSwitcher(uppercaseCheckbox, flags.uppercase);
    flags.specSymbols = checkboxStateSwitcher(specialSymbolsCheckbox, flags.specSymbols);
    let usedSymbols = generateList(flags.numbers, flags.lowercase, flags.uppercase, flags.specSymbols);
    let password = generatePassword(usedSymbols, passwordLength);
    outputPasswordP.innerHTML = password;
});

specialSymbolsCheckbox.addEventListener ("change", function() {
    let passwordLength = getPasswordLength();
    flags.numbers = checkboxStateSwitcher(numbersCheckbox, flags.numbers);
    flags.lowercase = checkboxStateSwitcher(lowercaseCheckbox, flags.lowercase);
    flags.uppercase = checkboxStateSwitcher(uppercaseCheckbox, flags.uppercase);
    flags.specSymbols = checkboxStateSwitcher(specialSymbolsCheckbox, flags.specSymbols);
    let usedSymbols = generateList(flags.numbers, flags.lowercase, flags.uppercase, flags.specSymbols);
    let password = generatePassword(usedSymbols, passwordLength);
    outputPasswordP.innerHTML = password;
}); 

/*
Добавить ввод по голосу
Добавить текстовое поле из символов которого будет генерироваться пароль
Добавить редактор пароля чтобы его можно было немного изменить когда он сгенерирован
Добавить больше языков в списки символов
Улучшить стили
Добавить анимацию генерации паролей
Добавить связь с файлом в который будут записываться все сгенерированые пароли
Добавить возможность генерации пин-кодов
Добавить проверки на сложность пароля
*/