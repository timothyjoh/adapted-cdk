#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { AdaptedStack } from '../lib/adapted-stack';

const app = new cdk.App();
new AdaptedStack(app, 'AdaptedStack');
