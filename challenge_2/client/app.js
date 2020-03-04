var dataPackage = document.getElementById('data-submit-button');

var sendData = function (form) {
  const XHR = new XMLHttpRequest();
  var FD = new FormData();
  for (var name in form) {
    FD.append(name, form[name]);
  }
  XHR.addEventListener('load', (event) => {

  })
  XHR.addEventListener('error', (event) => {

  })
  XHR.open('POST', 'http://localhost:3000/');
  XHR.send(FD);
}
dataPackage.addEventListener('click', function () {
  console.log(dataPackage);
  sendData(dataPackage);
})