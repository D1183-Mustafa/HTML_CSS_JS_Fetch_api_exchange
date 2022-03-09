const inputLira = document.getElementById("InputLira");
const formSubmit = document.getElementById("form");

let outPutDolar = document.querySelector(".dolar-bilgi");
let outputEuro = document.querySelector(".euro-bilgi");
const outputAltın = document.querySelector(".altın-bilgi");

class Request {
  async get(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
}

let request = new Request();

request
  .get(
    "https://finans.truncgil.com/today.json"
  )
  .then((result) => {
    console.log(Object.values(result)[68].Satış);
    formSubmit.addEventListener("submit", paraÇeviri);
    function paraÇeviri(e) {
      outPutDolar.innerText = (inputLira.value / parseFloat(result.USD.Satış)).toFixed(2);
      outputEuro.innerText = (inputLira.value / parseFloat(result.EUR.Satış)).toFixed(2);
      outputAltın.innerText = (inputLira.value / parseFloat(Object.values(result)[68].Satış)).toFixed(4);
      e.preventDefault();
    }
  })
  .catch((err) => {
    console.log(err);
  });
