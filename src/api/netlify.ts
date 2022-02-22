class NetlifyAPI {
  static async makeRequest(url, method = "GET", payload = null) {
    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        ...(payload ? { body: JSON.stringify(payload) } : {}),
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const { message } = await response.json();
        return {
          error: true,
          message,
        };
      }
    } catch (e) {
      console.log("Something went wrong.");
      return {
        error: true,
        message: e,
      };
    }
  }

  static fetchMessage() {
    const url = `.netlify/functions/hello-world`;
    const method = "GET";
    return this.makeRequest(url, method);
  }
}

export { NetlifyAPI };
