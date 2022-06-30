import { Template } from '@aws-cdk/assertions';
import { Stack } from '@aws-cdk/core';
import { NodeProxyAgentLayer } from '../lib';
import { DenoLayer } from "../src/deno-layer.ts";

test('synthesized to a layer version', () => {
  // Given
  const stack = new Stack();

  // When
  new DenoLayer(stack, 'Layer');

  // Then
  Template.fromStack(stack).hasResourceProperties('AWS::Lambda::LayerVersion', {
    Description: '/bin/deno',
  });
});