// Install with: npm install @trycourier/courier
import { CourierClient } from "@trycourier/courier";

const courier = CourierClient({ authorizationToken: "pk_test_X1PVT7H5N0MCKHGNVBQXWMTH68VQ" });

const { requestId } = await courier.send({
  message: {
    to: {
      email: "shivansh.arora973@gmail.com",
    },
    template: "MN94TK37MWMR53NQYR68V3ZV3Y6K",
    data: {
      recipientName: "Shivansh",
    },
  },
});