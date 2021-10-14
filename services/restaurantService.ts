import API from "./API";

const BASE_PATH = `sys_restaurant`;

const apiSettings = {
  getByCode() {
    const url = `${BASE_PATH}/select?code=${"RES0001"}`;
    return API.get(`${url}`);
  },
};

export default apiSettings;
