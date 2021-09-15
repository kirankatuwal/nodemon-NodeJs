const axios = require('axios');

axios.get("https://youtube.com")
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
    .then(console.log("Completed"));