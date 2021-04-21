function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // document.getElementById("demo").innerHTML = this.responseText;
      const data = JSON.parse(this.response);
      console.log("data: ", data, data.Global.TotalConfirmed);
    }
  };
  xhttp.open("GET", "https://api.covid19api.com/summary", true);
  xhttp.send();
}

loadDoc();
