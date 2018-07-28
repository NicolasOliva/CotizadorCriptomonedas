const cotizador = new Cotizador();
const ui = new Interfaz();

const form = document.getElementById('formulario');
form.addEventListener('submit',(e)=>{

  e.preventDefault();

  let moneda = document.getElementById('moneda');
  let monedaSelected = moneda.options[moneda.selectedIndex].value;

  let cripto = document.getElementById('criptomoneda');
  let criptoSelected = cripto.options[cripto.selectedIndex].value;

  if(monedaSelected === '' || criptoSelected === ''){
      ui.monstrarMensaje('Debe completar ambos campos', 'deep-orange darken-4 card-panel');
  }else{
    cotizador.obtenerValores(monedaSelected, criptoSelected)
      .then(data => {
        ui.mostrarResultado(data, monedaSelected);
      })
  }

})
