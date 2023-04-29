const btn = document.getElementById('calcular');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const sumField = document.getElementById('soma-field');
    const subtractionField = document.getElementById('subtracao-field');
    const multiplicationField = document.getElementById('multiplicacao-field');
    const divisionField = document.getElementById('divisao-field');

    let displaySum = ''
    let displaySubtraction = ''
    let displayMultiplication = ''
    let displayDivision = ''
    
    for(let i = 1; i <= 10; i++){
        const numberInput = document.getElementById('numero-digitado')
        const numValue = numberInput.value
        
        const sum = +numValue + i;
        const subtration = +numValue - i;
        const multiplication = numValue * i;

        displaySum += `<p>${numValue} + ${i} = ${sum}</p>`;
        displaySubtraction += `<p>${numValue} - ${i} = ${subtration}</p>`;
        displayMultiplication += `<p>${numValue} × ${i} = ${multiplication}</p>`;
        displayDivision += `<p>${multiplication} ÷ ${numValue} =  ${i}</p>`;
        
        sumField.innerHTML = displaySum
        subtractionField.innerHTML = displaySubtraction
        multiplicationField.innerHTML = displayMultiplication
        divisionField.innerHTML = displayDivision
    }

})