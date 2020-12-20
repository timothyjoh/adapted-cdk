import * as sns from '@aws-cdk/aws-sns';
import * as subs from '@aws-cdk/aws-sns-subscriptions';
import * as sqs from '@aws-cdk/aws-sqs';
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda'
import * as apiGateway from '@aws-cdk/aws-apigateway'
import { Construct } from '@aws-cdk/core';

const setupLambdas = (stack: Construct) => {
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

const setupQueue = (stack: Construct) => {
  const queue = new sqs.Queue(stack, 'AdaptedQueue', {
    visibilityTimeout: cdk.Duration.seconds(300)
  });

  const topic = new sns.Topic(stack, 'AdaptedTopic');

  topic.addSubscription(new subs.SqsSubscription(queue));
}

export class AdaptedStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    setupLambdas(this)
    setupQueue(this)
  }
}
