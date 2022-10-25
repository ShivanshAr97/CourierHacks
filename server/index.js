// import { CourierClient } from "@trycourier/courier";
const CourierClient = require('@trycourier/courier')

const courier = CourierClient({ authorizationToken: "pk_test_X1PVT7H5N0MCKHGNVBQXWMTH68VQ" });

const { requestId } = await courier.send({
  message: {
    to: {
      data: {
        name: "Shivansh Arora",
      },
      email: "shivansh.arora973@gmail.com",
    },
    template: "7G65GYEYFCMHTGHT1483FCMQ144Z",
    routing: {
      method: "single",
      channels: ["email"],
    },
  },
});
