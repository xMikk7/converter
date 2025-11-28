const tempInput = document.querySelector('.tempInput')
const fromUnit = document.querySelector('.fromUnit')
const toUnit = document.querySelector('.toUnit')
const btn = document.querySelector('.btn')
const p = document.querySelector('.result')
btn.addEventListener('click', (e) => {
    e.preventDefault()
    let result;
    const tempInputValue = Number(tempInput.value)
    const fromUnitValue = fromUnit.value
    const toUnitValue = toUnit.value
    if (isNaN(tempInputValue)) {
        p.textContent = '🛑ERROR: Please enter a valid number'
        p.style.color = 'red'
        return;
    }
    if (fromUnitValue === '' || toUnitValue === '') {
        p.textContent = '🛑ERROR: Please choose missing unit(s)'
        p.style.color = 'red'
        return;
    }
    else if (toUnitValue === fromUnitValue) {
        p.textContent = `🛑ERROR: U want to convert the same units?`
        p.style.color = 'red'
        return;
    }
    switch (fromUnitValue) {
        case 'Fahrenheit':
            if (toUnitValue === 'Celsius') {
                result = (tempInputValue - 32) / 1.8
            }
            else if (toUnitValue === 'Kelvin') {
                result = (tempInputValue - 32) * 5 / 9 + 273.15
            }
            break
        case 'Celsius':
            if (toUnitValue === 'Fahrenheit') {
                result = tempInputValue * 9 / 5 + 32
            }
            else if (toUnitValue === 'Kelvin') {
                result = tempInputValue + 273.15
            }
            break
        case 'Kelvin':
            if (toUnitValue === 'Fahrenheit') {
                result = (tempInputValue - 273.15) * 9 / 5 + 32
            }
            else if (toUnitValue === 'Celsius') {
                result = tempInputValue - 273.15
            }
            break
    }
    if (toUnitValue === 'Kelvin' && result < 0) {
        p.textContent = '⚠️WARNING: The result is below absolute zero (0K).'
        p.style.color = 'orange'
    }
    else if (result !== undefined) {
        p.textContent = `✅SUCCESS: ${tempInputValue} ${fromUnitValue} is ${result.toFixed(2)} ${toUnitValue}`
        p.style.color = 'green';
    }
}
)
// Author: xMikk7