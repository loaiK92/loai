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
  axios
    .post(this.action, body)
    .then(res => {
      console.log("response is", res);
      if (res.status == 200) {
        window.alert(
          "Thank You, \nYour Mail Has Been Sent Successfully, \nI'll Reply You As Soon As Possible."
        );
      }

      window.location = "/";
    })
    .catch(error => {
      window.alert(
        "Unfortunately Your Email Wasn't Sent Correctly, \nPlease Check Your Email And Try Again Later"
      );
      console.log("error response is", error.response);
    });
}

export default submitForm;
