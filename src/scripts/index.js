const btn = document.getElementById('calcular-equacao');

btn.addEventListener('click', (e) => {
    e.preventDefault()

    const quadratico = document.getElementById('a');
    const linear = document.getElementById('b');
    const constante = document.getElementById('c');

    const xOneField = document.getElementById('xOne');
    const xTwoField = document.getElementById('xTwo');

    const a = quadratico.value;
    const b = linear.value;
    const c = constante.value;

    const delta = b ** 2 - 4 * a * c;

    let xOne = (-b + Math.sqrt(delta)) / (2 * a)
    let xTwo = (-b - Math.sqrt(delta)) / (2 * a)

    xOneField.innerHTML = xOne
    xTwoField.innerHTML = xTwo

    const formulaAplicada = document.querySelector('.formula-aplicada');

    if (b < 0 && c > 0) {
        formulaAplicada.innerHTML = `${a}x&sup2; ${b}x + ${c} = 0`
    } else if (c < 0 && b > 0) {
        formulaAplicada.innerHTML = `${a}x&sup2; + ${b}x ${c} = 0`
    } else if (b < 0 && c < 0) {
        formulaAplicada.innerHTML = `${a}x&sup2; ${b}x ${c} = 0`
    } else {
        formulaAplicada.innerHTML = `${a}x&sup2; + ${b}x + ${c} = 0`
    }

    //Cálculo completo
    const calculationField = document.getElementById('mostrar-calculo');

    calculationField.innerHTML = `<h3>Cálculo</h3>
                                  <div class='complete-calculation'>  
                                    <div class='delta-calculation'>
                                        <p>&Delta; = b&sup2; - 4ac</p>
                                        <p>&Delta; = ${b}&sup2; - 4.${a}.${c}</p>
                                        <p>&Delta; = ${b ** 2} ${-4 * a * c}</p>
                                        <p>&Delta; = ${delta}</p> 
                                    </div>
                                    <div class='calculo-x'>
                                        <div class='x-one'>
                                            <div class='x-one-calculation'>
                                                <div class='calculation-field'>x&apos; = <span class='divisao'><span class='dividendo'>-(${b}) + √${delta}</span><span class='divisor'>2.${a}</span></span></div>
                                            </div>
                                            <div class='x-one-calculation'>
                                                <div class='calculation-field'>x&apos; = <span class='divisao'><span class='dividendo'>-(${b}) + ${Math.sqrt(delta)}</span><span class='divisor'>${a * 2}</span></span></div>
                                            </div>
                                            <div class='x-one-calculation'>
                                                <div class='calculation-field'>x&apos; = <span class='divisao'><span class='dividendo'>${-b + Math.sqrt(delta)}</span><span class='divisor'>${a * 2}</span></span></div>
                                            </div>
                                            <div class='x-one-calculation'>
                                                <div class='calculation-field'>x&apos; = <span class='divisao'> ${xOne}</span></div>
                                            </div>
                                        </div>
        
                                        <div class='x-two'>
                                            <div class='x-two-calculation'>
                                                <div class='calculation-field'>x&quot; = <span class='divisao'><span class='dividendo'>-(${b}) - √${delta}</span><span class='divisor'>2.${a}</span></span></div>
                                            </div>
                                            <div class='x-two-calculation'>
                                                <div class='calculation-field'>x&quot; = <span class='divisao'><span class='dividendo'>-(${b}) - ${Math.sqrt(delta)}</span><span class='divisor'>${a * 2}</span></span></div>
                                            </div>
                                            <div class='x-two-calculation'>
                                                <div class='calculation-field'>x&quot; = <span class='divisao'><span class='dividendo'>${-b - Math.sqrt(delta)}</span><span class='divisor'>${a * 2}</span></span></div>
                                            </div>
                                            <div class='x-two-calculation'>
                                                <div class='calculation-field'>x&quot; = <span class='divisao'> ${xTwo}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                  </div>  
    `
});