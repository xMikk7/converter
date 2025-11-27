const tempInput = document.querySelector('.tempInput')
const fromUnit = document.querySelector('.fromUnit')
const toUnit = document.querySelector('.toUnit')
const btn = document.querySelector('.btn')
const box = document.querySelector('.box')
const p = document.querySelector('.result')
btn.addEventListener('click', (e) => {
    e.preventDefault()
    let result;
    const tempInputValue = Number(tempInput.value)
    const fromUnitValue = fromUnit.value
    const toUnitValue = toUnit.value
    const x = () => {
        return `${tempInputValue} ${fromUnitValue} is ${result.toFixed(2)} ${toUnitValue}`
    }
    if (fromUnitValue === '' || toUnitValue === '') {
        p.textContent = 'Please choose missing unit(s)'
        p.style.color = 'red'
    }
    else if (toUnitValue === fromUnitValue) {
        p.textContent = `U want to convert the same units?`
        p.style.color = 'red'
        return;
    }
    if (isNaN(tempInputValue) || tempInputValue.trim == '') {
        p.textContent = 'Please enter a valid number'
        p.style.color = 'red'
        return
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
    if (result < 0) {
        p.textContent = 'It would be minus degree'
        p.style.color = 'red'
    }
    else if (result !== undefined) {
        p.textContent = x()
        p.style.color = 'green';
    }
}
)