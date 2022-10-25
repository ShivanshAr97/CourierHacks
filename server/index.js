// import fetch  from "node-fetch";

// const options = {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     Authorization: 'Bearer pk_test_X1PVT7H5N0MCKHGNVBQXWMTH68VQ'
//   },
//   body: JSON.stringify({
//     "message": {
//         "to": {
//             "email": "shivansh.arora973@gmail.com"
//         },
//         "template": "abcdef12345678",
//         "data": {
//             "name": "John Doe"
//         },
//         "routing": {
//             "method": "single",
//             "channels": [
//                 "email"
//             ]
//         }
//     }
// })
// };

// fetch('https://api.courier.com/send', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

import { CourierClient } from "@trycourier/courier";

const courier = CourierClient({ authorizationToken: "pk_test_X1PVT7H5N0MCKHGNVBQXWMTH68VQ" }); // get from the Courier UI

// Example: send a basic message to an email recipient
const { requestId } = await courier.send({
  message: {
    to: {
      data: {
        name: "Aditi Arora",
      },
      email: "5aditi.arora94@gmail.com",
    },
    template: "7G65GYEYFCMHTGHT1483FCMQ144Z",
    routing: {
      method: "single",
      channels: ["email"],
    },
  },
});
