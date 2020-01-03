function submitform() {
    var data = $("#signup_form").serializeArray();
    var customer = Object.assign({}, ...data.map(item => ({ [item.name]: item.value, "generate_handle": true })));

    var config = {
    //change plan to the correct one
      "plan": "plan-98963",
      "signup_method": "link"
    }
  
    var finalData = {
      "plan": config.plan,
      "signup_method": config.signup_method,
      "generate_handle": true,
      "create_customer": customer
    }
  
    axios({
      method: 'post',
      url: 'https://europe-west1-propay-dev.cloudfunctions.net/api',
      data: finalData,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    })
      .then(() => {
        window.location.href = "/success/"
      })
      .catch((error) => {
        console.log(error.message);
      });
  }