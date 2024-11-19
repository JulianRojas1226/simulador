const button = document.getElementById('simulador-btn')
button.addEventListener('click',simulador)
function simulador() {
    const nombre =  document.getElementById('nombres').value
    const telefono =  document.getElementById('telefono').value
    const email =  document.getElementById('email').value
    const inversion =  parseInt(document.getElementById('inversion').value)
    const tiempo = document.getElementById('tiempo').value
    const pre = document.getElementById('pre')
    const post = document.getElementById('post')
    const show_tiempo = document.getElementById('tiempo-show')
    const interes = document.getElementById('interes-show')
    const nombress =document.getElementById('nombres-show')
    const emails = document.getElementById('email-show')
    const totals = document.getElementById('total-show')
    const ganancias = document.getElementById('ganancia-show')
    let intereses =0
    let total = 0
    post.classList.remove('disabled')
    pre.classList.add('disabled')
    nombress.innerText=nombre
    emails.innerText=email
    switch (tiempo) {
        case '1':
          show_tiempo.innerText="12 Meses"
          interes.innerText="0.8%"
          intereses = (inversion *0.008)*12
          total = inversion +intereses 
          totals.innerText =total
        ganancias.innerText=intereses
        break;
        case '2':
            show_tiempo.innerText="24 Meses"
            interes.innerText="1.3%"
            intereses = (inversion *0.013)*24
          total = inversion +intereses 
          totals.innerText =total
        ganancias.innerText=intereses
        break;
        case '3':
            show_tiempo.innerText="36 Meses"
            interes.innerText="1.7%"
            intereses = (inversion *0.017)*36
          total = inversion +intereses 
          totals.innerText =total
        ganancias.innerText=intereses
        break;
        
    }

}