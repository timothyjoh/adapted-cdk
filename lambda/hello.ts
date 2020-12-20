exports.handler = async function (event: AWSLambda.APIGatewayEvent) {
  console.log("event: ", JSON.stringify(event, null, 2))

  const statusCode = 200
  const headers = { "Content-Type": "text/plain" }
  const body = ` Hello from ADAPT-ED, you have reached ${event.path} ...`

  return {
    statusCode,
    headers,
    body
  }
}
