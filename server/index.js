const CourierClient = require('@trycourier/courier')

const courier = CourierClient({ authorizationToken: API_KEY });

const { requestId } = await courier.send({
  message: {
    to: {
      data: {
        name: NAME,
      },
      email: EMAIL,
    },
    template: API_TEMPLATE,
    routing: {
      method: "single",
      channels: ["email"],
    },
  },
});
