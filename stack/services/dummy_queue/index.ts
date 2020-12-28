import * as sns from '@aws-cdk/aws-sns';
import * as subs from '@aws-cdk/aws-sns-subscriptions';
import * as sqs from '@aws-cdk/aws-sqs';
import * as cdk from '@aws-cdk/core';

export const setup = (stack: cdk.Construct) => {
  const queue = new sqs.Queue(stack, 'AdaptedQueue', {
    visibilityTimeout: cdk.Duration.seconds(300)
  });

  const topic = new sns.Topic(stack, 'AdaptedTopic');

  topic.addSubscription(new subs.SqsSubscription(queue));
}
