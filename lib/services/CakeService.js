const Cake = require('../models/Cake');
const { sendSms } = require('../utils/twilio');

module.exports = class CakeService {
  static async createCake({ type, flavor, quantity }) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `New order for ${quantity.quantity} ${flavor.flavor} ${type.type}`
    );
  
    const cake = await Cake.insert({ type, flavor, quantity });
  
    return cake;
  }
};
