// const items = [{ name: "susan" }, { name: "boue" }];
const Items = require("../assets/data");

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(Items),
  };
};
