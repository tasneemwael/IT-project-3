


function openOptions(popupId) {
  var optionsPopup = document.getElementById(popupId);
  optionsPopup.style.display = "block";
}

function openDataPopup(option1Id, option2Id, optionspopup, dataForm1, dataForm2, event) {
  event.preventDefault();
  var option1 = document.getElementById(option1Id).checked;
  var option2 = document.getElementById(option2Id).checked;
  var optionsPopup = document.getElementById(optionspopup);
  var dataPopup1 = document.getElementById(dataForm1);
  var dataPopup2 = document.getElementById(dataForm2);
  if (option1 || option2) {
    optionsPopup.style.display = "none";
    if (option1) {
      dataPopup1.style.display = "block";
    } else if (option2) {
      dataPopup2.style.display = "block";
    }
  } else {
    alert("Please select an option");
  }
}

function validateForm(fullName, phoneNumber, address) {
  var fullName = document.getElementById(fullName).value;
  var phoneNumber = document.getElementById(phoneNumber).value;
  var address = document.getElementById(address).value;
  if (fullName=="") {
    alert('Please enter a valid name.');
    return false;
  }
  if (!/^\d{11}$/.test(phoneNumber)) {
    alert('Please enter a valid 10-digit phone number.');
    return false;
  }
  if (address.length < 5) {
    alert('Please enter a valid address.');
    return false;
  }
  return true;
}
