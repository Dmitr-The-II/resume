function postalFilter (postalCode) {

    if (! postalCode) {
        return null;
    }

    postalCode = postalCode.toString().trim();

    var us = new RegExp("^\\d{5}(-{0,1}\\d{4})?$");
    var ca = new RegExp(/([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ]\d){2}/i);

    if (us.test(postalCode.toString())) {
        return postalCode;
    }

    if (ca.test(postalCode.toString().replace(/\W+/g, ''))) {
        return postalCode;
    }
    return null;
}
function getValue(val) {
    debugger;
    if (val.value == "Hiring") {
      document.querySelector("#hourlyRate").style.visibility = "visible";
    }
  }
//   function getValue(msg) {
//     var errMessage = document.querySelector('#hourlyRate');
//     errMessage.classList.remove('hidden');
//     errMessage.innerHTML = msg;
// }