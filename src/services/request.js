import constant from "./constant";

let request = {};

request.request = async (url, data, headers, method = "POST") => {
  console.log(url);
  try {
    url = `${constant.host}${url}`;
    let option = {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
    option.headers = Object.assign({}, option.headers, headers);
    if (method === "GET") delete option.body;

    let res = await fetch(url, option);
    let rs = await res.json();
    return rs;
  } catch (err) {
    console.log("res", err);
    throw err;
  }
};

export default request;
