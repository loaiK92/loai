import axios from "axios";

function submitForm(e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const text = document.querySelector("#msg").value;
  const body = {
    name: name,
    email: email,
    text: text
  };
  axios.post(this.action, body).then(res => {
    if (res.status == 200) {
      window.alert(
        "Thank You \nYour Mail Has Been Sent Successfully \nI'll Respond You As Soon As Possible."
      );
    } else {
      window.alert(
        "Unfortunately Your Email Wasn't Sent Correctly, \nPlease Check Your Email And Try Again Later"
      );
    }

    window.location = "/contact";
  });
}

export default submitForm;
