import * as cdk from '@aws-cdk/core';

import {setup as setupDummyQueue} from './services/dummy_queue'
import {setup as setupHello} from './services/hello/lambda'

export class AppStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    setupHello(this)
    // setupDummyQueue(this)
  }
}
