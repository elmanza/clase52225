const statusModel = require("../../models/mongoose/status");

let status;
const STATUS = async () => {
  status = status || (await getStatus());
  return status;
}

const getStatus =  async (query = {}) => {
  const statuses = await statusModel.find(query);
  return buildConstantsObject(statuses);
}


const buildConstantsObject = records => {
  let result = {};
  records.forEach(record => {
    result[`${record.name}`] = record._id;
  });
  return result;
}

module.exports = {
  STATUS
}