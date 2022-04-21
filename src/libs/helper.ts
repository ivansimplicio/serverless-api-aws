export const notFound = () => ({
  code: 404,
  status: "Not Found",
  message: "User not found."
});

export const badRequest = () => ({
  code: 400,
  status: "Bad Request",
  message: "Invalid Request Body"
});