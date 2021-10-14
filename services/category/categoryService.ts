import API from "../API";

const BASE_PATH = `md_category`;

const apiSettings = {
  getAll(): any {
    const url = `${BASE_PATH}/selectall?restaurant_code=${"RES0001"}`;
    return API.get(`${url}`);
  },
};

export default apiSettings;
