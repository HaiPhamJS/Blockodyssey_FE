import request from "./request";
let path = {
  listUser: "users",
};
let api = {};

for (let key in path) {
  api[key] = async function (data, options = {}) {
    let { headers, method, uri = "" } = options;
    return await request.request(path[key] + uri, data, headers, method);
  };
}

export default api;
