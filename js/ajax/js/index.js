let inputConfirmed = document.querySelector(".js-input-total");
let btnLoad = document.querySelector(".js-btn-load");

btnLoad.addEventListener("click", async () => {
  // callApi();
  //// fake api
  // getCovidInfoApi().then((data) => {
  //   inputConfirmed.value = data.Global.TotalConfirmed;
  // });
  try {
    let data = await getCovidInfoApi();
    inputConfirmed.value = data.Global.TotalConfirmed;
    console.log("Main thread");
  } catch (e) {
    console.log(e);
  }

  ////async await
});

// function callApi() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       // document.getElementById("demo").innerHTML = this.responseText;
//       const data = JSON.parse(this.response);
//       console.log("data: ", data, data.Global.TotalConfirmed);
//       inputConfirmed.value = data.Global.TotalConfirmed;
//     }
//   };
//   xhttp.open("GET", "https://api.covid19api.com/summary", true);
//   xhttp.send();
// }

function getCovidInfoApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Done get api");
      reject({
        Global: {
          TotalConfirmed: 100000,
        },
      });
    }, 500);
  });
}
