const CourierClient = require('@trycourier/courier')

const APIKEY = process.env.API_KEY
const NAME = process.env.API_KEY
const EMAIL = process.env.API_KEY
const APITEMPLATE = process.env.API_KEY
const courier = CourierClient({ authorizationToken: APIKEY });

const { requestId } =  courier.send({
  message: {
    to: {
      data: {
        name: NAME,
      },
      email: EMAIL,
    },
    template: APITEMPLATE,
    routing: {
      method: "single",
      channels: ["email"],
    },
  },
});
