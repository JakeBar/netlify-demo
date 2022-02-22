import { Handler } from "@netlify/functions";
import fetch from "node-fetch";

interface Response {
  name: string;
}

export const handler: Handler = async (event, context) => {
  const response = await fetch("https://api.namefake.com/");
  const { name } = (await response.json()) as Response;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${name}!`,
    }),
  };
};
