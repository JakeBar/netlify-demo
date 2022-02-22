class NetlifyAPI {
  static async fetchMessage() {
    try {
      const response = await fetch(`.netlify/functions/fetch-message`);
      const { message } = await response.json();
      return {
        error: true,
        message,
      };
    } catch (e) {
      console.log("Something went wrong.");
      return {
        error: true,
        message: e,
      };
    }
  }
}

export { NetlifyAPI };
