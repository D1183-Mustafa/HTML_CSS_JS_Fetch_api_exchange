const inputLira = document.getElementById("InputLira");
const formSubmit = document.getElementById("form");

let outPutDolar = document.querySelector(".dolar-bilgi");
let outpurEuro = document.querySelector(".euro-bilgi");

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
    "http://api.exchangeratesapi.io/v1/latest?access_key=65c89bb8d0a2aa581f7585cccaa35418"
  )
  .then((result) => {
    formSubmit.addEventListener("submit", paraÇeviri);
    function paraÇeviri(e) {
      outPutDolar.innerText = (Number(inputLira.value) / (result.rates.TRY /result.rates.USD)).toFixed(2) ;
      outpurEuro.innerText = (Number(inputLira.value) / (result.rates.TRY)).toFixed(2);

      e.preventDefault();
    }
  })
  .catch((err) => {
    console.log(err);
  });
