module.exports.getData = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from AWS Lambda!",
      requestId: event.requestContext.requestId,
    }),
  };
};
