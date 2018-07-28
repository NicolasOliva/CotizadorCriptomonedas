class Interfaz {

  constructor(){
      this.init();
  }

  init(){ //se utiliza para no cargar de funciones el contructor, para que el codigo sea mas legible
    this.CreateSelect();
  }

  CreateSelect(){
      cotizador.GetMonedasApi()
        .then(data => {
          let select = document.getElementById('criptomoneda');
          for(let prop in data) {                                    //utilizacion del for in, ya que la lista de objetos contiene los ids no consecutivos
              let option = document.createElement('option');
              option.value = data[prop].id;
              option.appendChild(document.createTextNode(data[prop].name));
              select.appendChild(option);
          }
        })
  }

  monstrarMensaje(mensaje,clases){
      let div = document.createElement('div');
      div.className = clases;
      div.appendChild(document.createTextNode(mensaje));

      let divMensaje = document.querySelector('.mensajes');
      divMensaje.appendChild(div);

      setTimeout(()=>{
        document.querySelector('.mensajes div').remove();
      },3000);
  }

  mostrarResultado(resultado, moneda){

    let resultadoAnterior = document.querySelector('#resultado > div');
    if(resultadoAnterior) {
        resultadoAnterior.remove();
    }

    this.mostrarSppiner();

    console.log(resultado);

    let hora = new Date(resultado.last_updated * 1000);
    let horaActualizada = `${hora.getHours()}:${hora.getMinutes()}`;

    let htmlTemplate = `
          <div class="card cyan darken-3">
                  <div class="card-content white-text">
                       <span class="card-title">Resultado:</span>
                       <p>El precio de ${resultado.name} a moneda ${moneda} es de: $ ${resultado.quotes[moneda].price}</p>
                       <p>Última hora: ${resultado.quotes[moneda].percent_change_1h}</p>
                       <p>Último día: ${resultado.quotes[moneda].percent_change_24h}</p>
                       <p>Últimos 7 días: ${resultado.quotes[moneda].percent_change_7d}</p>
                       <p>Ultima Actualización: ${horaActualizada} hs</p>
                  </div>
             </div>
      `;

      setTimeout(() => {
              document.querySelector('.spinner img').remove();
              document.querySelector('#resultado').innerHTML = htmlTemplate;
      },3000);

    }

  mostrarSppiner(){
    let spinner = document.createElement('img');
    spinner.src = 'img/spinner.gif';
    document.querySelector('.spinner').appendChild(spinner);
  }

}
