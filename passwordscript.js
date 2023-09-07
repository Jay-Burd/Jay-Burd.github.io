function protectpasscode() {
    const result = document.getElementById("tutorial").value;
    let passcode = 12345;
    let space = '';
    if (result == space) {
       alert("Type passcode")
    } else {
       if (result == passcode) {
          window.location = 'homepage.html';
       } else {
          alert("Incorrect Passcode");
          location.reload();
       }
    }
 }