const btn = document.getElementById('calcular-triangulo');

btn.addEventListener('click', (e) =>{
    e.preventDefault()
    
    const hipotenusa = document.getElementById('hipotenusa').value;
    const catetoLateral = document.getElementById('cateto-lateral').value;
    const catetoHorizontal = document.getElementById('cateto-horizontal').value;
    
    const response = document.getElementById('resposta');
    const calculation = document.getElementById('calculo');
    
    const hipoQuadrado = hipotenusa**2
    const clQuadrado = catetoLateral**2
    const chQuadrado = catetoHorizontal**2
    
    const hCalculo = Math.sqrt(clQuadrado + chQuadrado)
    const clCalculo = Math.sqrt(hipoQuadrado - chQuadrado)
    const chCalculo = Math.sqrt(hipoQuadrado - clQuadrado)
    
    const inputsPreenchidos = [hipotenusa, catetoLateral, catetoHorizontal].filter(Boolean);

    if(hipotenusa === '' && inputsPreenchidos.length === 2) {
        response.innerHTML = hCalculo
        calculation.innerHTML = `<div class='calculo-resolvido'>
                                     <p>h&sup2; = ${catetoLateral}&sup2; + ${catetoHorizontal}&sup2</p>    
                                     <p>h&sup2; = ${clQuadrado} + ${chQuadrado}</p>
                                     <p>h&sup2; = ${+clQuadrado + +chQuadrado}</p>
                                     <p>h = ✓${+clQuadrado + +chQuadrado}</p>
                                     <p>h = ${hCalculo}</p>
                                 </div>`
    } else if(catetoLateral === '' && inputsPreenchidos.length === 2) {
        response.innerHTML = clCalculo
        calculation.innerHTML = `<div class='calculo-resolvido'>
                                     <p>${hipotenusa}&sup2; = x&sup2; + ${catetoHorizontal}&sup2</p>    
                                     <p>${hipoQuadrado} = x&sup2; + ${chQuadrado}</p>
                                     <p>x&sup2; = ${hipoQuadrado} - ${chQuadrado}</p>
                                     <p>x = ✓${+hipoQuadrado - +chQuadrado}</p>
                                     <p>x = ${clCalculo}</p>
                                 </div>`        
    } else if(catetoHorizontal === '' && inputsPreenchidos.length === 2) {
        response.innerHTML = chCalculo
        calculation.innerHTML = `<div class='calculo-resolvido'>
                                     <p>${hipotenusa}&sup2; = ${catetoLateral}&sup2 +  x&sup2;</p>    
                                     <p>${hipoQuadrado} = ${clQuadrado} +  x&sup2;</p>
                                     <p>x&sup2; = ${hipoQuadrado} - ${clQuadrado}</p>
                                     <p>x = ✓${+hipoQuadrado - +clQuadrado}</p>
                                     <p>x = ${chCalculo}</p>
                                 </div>`        
    } else if(inputsPreenchidos.length < 2) {
        response.innerHTML = `<p class='warning'>Preencha pelo menos 2 campos</p>`
        calculation.innerHTML = ''
    } else {
        response.innerHTML = `<p class='warning'>Um campo deve ficar em branco para poder ser calculado</p>`
        calculation.innerHTML = ''
    }
})