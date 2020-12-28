#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { AppStack } from '../stack/stack';

const app = new cdk.App();
new AppStack(app, 'ADAPT-ED');
