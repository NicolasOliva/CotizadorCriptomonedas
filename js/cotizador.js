class Cotizador {

  async GetMonedasApi(){
    let url = await fetch('https://api.coinmarketcap.com/v2/ticker/');
    let monedas = await url.json();
    return monedas.data;
  }

  async obtenerValores(moneda,cripto){
    let url = await fetch(`https://api.coinmarketcap.com/v2/ticker/${cripto}/?convert=${moneda}`);
    let coin = await url.json();
    let resultado= coin.data;
    return resultado;
  }

}
