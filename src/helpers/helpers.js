export const AJAX = async (method, url, data = null) => {
  try {
    let res;
    if (method === "POST") {
      const options = {
        method: method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      };
      res = await fetch(url, options);
    } else {
      res = await fetch(url);
    }
    if (!res.ok) throw new Error("Invalid email or password");
    else {
      const APIdata = await res.json();
      return APIdata;
    }
  } catch (err) {
    throw new Error(err.message);
  }
};
