import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda'
import * as apiGateway from '@aws-cdk/aws-apigateway'

export const setup = (stack: cdk.Construct) => {
  const helloLambda = new lambda.Function(stack, "HelloLambda", {
    code: lambda.Code.fromAsset("lambda"),
    handler: "hello.handler",
    runtime: lambda.Runtime.NODEJS_12_X,
    memorySize: 256,
    timeout: cdk.Duration.seconds(10),
  })

  const helloLambdaPath = new apiGateway.LambdaRestApi(stack, "Endpoint", {
    handler: helloLambda
  })
}
