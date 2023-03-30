function ShowHideDiv() {
  var chkYes = document.getElementById("chkYes");
  var dvPassport = document.getElementById("dvPassport");
  dvPassport.style.display = chkYes.checked ? "block" : "none";
}
