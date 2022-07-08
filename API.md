# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DenoFunction <a name="DenoFunction" id="@pepperize/cdk-lambda-deno.DenoFunction"></a>

#### Initializers <a name="Initializers" id="@pepperize/cdk-lambda-deno.DenoFunction.Initializer"></a>

```typescript
import { DenoFunction } from '@pepperize/cdk-lambda-deno'

new DenoFunction(scope: Construct, id: string, props: DenoFunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps">DenoFunctionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-lambda-deno.DenoFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-lambda-deno.DenoFunction.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-lambda-deno.DenoFunction.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps">DenoFunctionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.addEventSource">addEventSource</a></code> | Adds an event source to this function. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.addEventSourceMapping">addEventSourceMapping</a></code> | Adds an event source that maps to this AWS Lambda function. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.addFunctionUrl">addFunctionUrl</a></code> | Adds a url to this lambda function. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.addPermission">addPermission</a></code> | Adds a permission to the Lambda resource policy. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.addToRolePolicy">addToRolePolicy</a></code> | Adds a statement to the IAM role assumed by the instance. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.configureAsyncInvoke">configureAsyncInvoke</a></code> | Configures options for asynchronous invocation. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.considerWarningOnInvokeFunctionPermissions">considerWarningOnInvokeFunctionPermissions</a></code> | A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.grantInvoke">grantInvoke</a></code> | Grant the given identity permissions to invoke this Lambda. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.grantInvokeUrl">grantInvokeUrl</a></code> | Grant the given identity permissions to invoke this Lambda Function URL. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.metric">metric</a></code> | Return the given named metric for this Function. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.metricDuration">metricDuration</a></code> | How long execution of this Lambda takes. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.metricErrors">metricErrors</a></code> | How many invocations of this Lambda fail. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.metricInvocations">metricInvocations</a></code> | How often this Lambda is invoked. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.metricThrottles">metricThrottles</a></code> | How often this Lambda is throttled. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.addAlias">addAlias</a></code> | Defines an alias for this function. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.addEnvironment">addEnvironment</a></code> | Adds an environment variable to this Lambda function. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.addLayers">addLayers</a></code> | Adds one or more Lambda Layers to this Lambda function. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-lambda-deno.DenoFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@pepperize/cdk-lambda-deno.DenoFunction.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@pepperize/cdk-lambda-deno.DenoFunction.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventSource` <a name="addEventSource" id="@pepperize/cdk-lambda-deno.DenoFunction.addEventSource"></a>

```typescript
public addEventSource(source: IEventSource): void
```

Adds an event source to this function.

Event sources are implemented in the @aws-cdk/aws-lambda-event-sources module.

The following example adds an SQS Queue as an event source:
```
import { SqsEventSource } from '@aws-cdk/aws-lambda-event-sources';
myFunction.addEventSource(new SqsEventSource(myQueue));
```

###### `source`<sup>Required</sup> <a name="source" id="@pepperize/cdk-lambda-deno.DenoFunction.addEventSource.parameter.source"></a>

- *Type:* aws-cdk-lib.aws_lambda.IEventSource

---

##### `addEventSourceMapping` <a name="addEventSourceMapping" id="@pepperize/cdk-lambda-deno.DenoFunction.addEventSourceMapping"></a>

```typescript
public addEventSourceMapping(id: string, options: EventSourceMappingOptions): EventSourceMapping
```

Adds an event source that maps to this AWS Lambda function.

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-lambda-deno.DenoFunction.addEventSourceMapping.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@pepperize/cdk-lambda-deno.DenoFunction.addEventSourceMapping.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventSourceMappingOptions

---

##### `addFunctionUrl` <a name="addFunctionUrl" id="@pepperize/cdk-lambda-deno.DenoFunction.addFunctionUrl"></a>

```typescript
public addFunctionUrl(options?: FunctionUrlOptions): FunctionUrl
```

Adds a url to this lambda function.

###### `options`<sup>Optional</sup> <a name="options" id="@pepperize/cdk-lambda-deno.DenoFunction.addFunctionUrl.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionUrlOptions

---

##### `addPermission` <a name="addPermission" id="@pepperize/cdk-lambda-deno.DenoFunction.addPermission"></a>

```typescript
public addPermission(id: string, permission: Permission): void
```

Adds a permission to the Lambda resource policy.

> [Permission for details.](Permission for details.)

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-lambda-deno.DenoFunction.addPermission.parameter.id"></a>

- *Type:* string

The id for the permission construct.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@pepperize/cdk-lambda-deno.DenoFunction.addPermission.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_lambda.Permission

The permission to grant to this Lambda function.

---

##### `addToRolePolicy` <a name="addToRolePolicy" id="@pepperize/cdk-lambda-deno.DenoFunction.addToRolePolicy"></a>

```typescript
public addToRolePolicy(statement: PolicyStatement): void
```

Adds a statement to the IAM role assumed by the instance.

###### `statement`<sup>Required</sup> <a name="statement" id="@pepperize/cdk-lambda-deno.DenoFunction.addToRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `configureAsyncInvoke` <a name="configureAsyncInvoke" id="@pepperize/cdk-lambda-deno.DenoFunction.configureAsyncInvoke"></a>

```typescript
public configureAsyncInvoke(options: EventInvokeConfigOptions): void
```

Configures options for asynchronous invocation.

###### `options`<sup>Required</sup> <a name="options" id="@pepperize/cdk-lambda-deno.DenoFunction.configureAsyncInvoke.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventInvokeConfigOptions

---

##### `considerWarningOnInvokeFunctionPermissions` <a name="considerWarningOnInvokeFunctionPermissions" id="@pepperize/cdk-lambda-deno.DenoFunction.considerWarningOnInvokeFunctionPermissions"></a>

```typescript
public considerWarningOnInvokeFunctionPermissions(scope: Construct, action: string): void
```

A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function.

function.currentVersion is invoked before or after the permission is created.

This applies only to permissions on Lambda functions, not versions or aliases.
This function is overridden as a noOp for QualifiedFunctionBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-lambda-deno.DenoFunction.considerWarningOnInvokeFunctionPermissions.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `action`<sup>Required</sup> <a name="action" id="@pepperize/cdk-lambda-deno.DenoFunction.considerWarningOnInvokeFunctionPermissions.parameter.action"></a>

- *Type:* string

---

##### `grantInvoke` <a name="grantInvoke" id="@pepperize/cdk-lambda-deno.DenoFunction.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@pepperize/cdk-lambda-deno.DenoFunction.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeUrl` <a name="grantInvokeUrl" id="@pepperize/cdk-lambda-deno.DenoFunction.grantInvokeUrl"></a>

```typescript
public grantInvokeUrl(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda Function URL.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@pepperize/cdk-lambda-deno.DenoFunction.grantInvokeUrl.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `metric` <a name="metric" id="@pepperize/cdk-lambda-deno.DenoFunction.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Function.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@pepperize/cdk-lambda-deno.DenoFunction.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-lambda-deno.DenoFunction.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDuration` <a name="metricDuration" id="@pepperize/cdk-lambda-deno.DenoFunction.metricDuration"></a>

```typescript
public metricDuration(props?: MetricOptions): Metric
```

How long execution of this Lambda takes.

Average over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-lambda-deno.DenoFunction.metricDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricErrors` <a name="metricErrors" id="@pepperize/cdk-lambda-deno.DenoFunction.metricErrors"></a>

```typescript
public metricErrors(props?: MetricOptions): Metric
```

How many invocations of this Lambda fail.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-lambda-deno.DenoFunction.metricErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInvocations` <a name="metricInvocations" id="@pepperize/cdk-lambda-deno.DenoFunction.metricInvocations"></a>

```typescript
public metricInvocations(props?: MetricOptions): Metric
```

How often this Lambda is invoked.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-lambda-deno.DenoFunction.metricInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricThrottles` <a name="metricThrottles" id="@pepperize/cdk-lambda-deno.DenoFunction.metricThrottles"></a>

```typescript
public metricThrottles(props?: MetricOptions): Metric
```

How often this Lambda is throttled.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-lambda-deno.DenoFunction.metricThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `addAlias` <a name="addAlias" id="@pepperize/cdk-lambda-deno.DenoFunction.addAlias"></a>

```typescript
public addAlias(aliasName: string, options?: AliasOptions): Alias
```

Defines an alias for this function.

The alias will automatically be updated to point to the latest version of
the function as it is being updated during a deployment.

```ts
declare const fn: lambda.Function;

fn.addAlias('Live');

// Is equivalent to

new lambda.Alias(this, 'AliasLive', {
   aliasName: 'Live',
   version: fn.currentVersion,
});
```

###### `aliasName`<sup>Required</sup> <a name="aliasName" id="@pepperize/cdk-lambda-deno.DenoFunction.addAlias.parameter.aliasName"></a>

- *Type:* string

The name of the alias.

---

###### `options`<sup>Optional</sup> <a name="options" id="@pepperize/cdk-lambda-deno.DenoFunction.addAlias.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.AliasOptions

Alias options.

---

##### `addEnvironment` <a name="addEnvironment" id="@pepperize/cdk-lambda-deno.DenoFunction.addEnvironment"></a>

```typescript
public addEnvironment(key: string, value: string, options?: EnvironmentOptions): Function
```

Adds an environment variable to this Lambda function.

If this is a ref to a Lambda function, this operation results in a no-op.

###### `key`<sup>Required</sup> <a name="key" id="@pepperize/cdk-lambda-deno.DenoFunction.addEnvironment.parameter.key"></a>

- *Type:* string

The environment variable key.

---

###### `value`<sup>Required</sup> <a name="value" id="@pepperize/cdk-lambda-deno.DenoFunction.addEnvironment.parameter.value"></a>

- *Type:* string

The environment variable's value.

---

###### `options`<sup>Optional</sup> <a name="options" id="@pepperize/cdk-lambda-deno.DenoFunction.addEnvironment.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EnvironmentOptions

Environment variable options.

---

##### `addLayers` <a name="addLayers" id="@pepperize/cdk-lambda-deno.DenoFunction.addLayers"></a>

```typescript
public addLayers(layers: ILayerVersion): void
```

Adds one or more Lambda Layers to this Lambda function.

###### `layers`<sup>Required</sup> <a name="layers" id="@pepperize/cdk-lambda-deno.DenoFunction.addLayers.parameter.layers"></a>

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion

the layers to be added.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.classifyVersionProperty">classifyVersionProperty</a></code> | Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.fromFunctionArn">fromFunctionArn</a></code> | Import a lambda function into the CDK using its ARN. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.fromFunctionAttributes">fromFunctionAttributes</a></code> | Creates a Lambda function object which represents a function not defined within this stack. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.fromFunctionName">fromFunctionName</a></code> | Import a lambda function into the CDK using its name. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.metricAll">metricAll</a></code> | Return the given named metric for this Lambda. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.metricAllConcurrentExecutions">metricAllConcurrentExecutions</a></code> | Metric for the number of concurrent executions across all Lambdas. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.metricAllDuration">metricAllDuration</a></code> | Metric for the Duration executing all Lambdas. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.metricAllErrors">metricAllErrors</a></code> | Metric for the number of Errors executing all Lambdas. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.metricAllInvocations">metricAllInvocations</a></code> | Metric for the number of invocations of all Lambdas. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.metricAllThrottles">metricAllThrottles</a></code> | Metric for the number of throttled invocations of all Lambdas. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.metricAllUnreservedConcurrentExecutions">metricAllUnreservedConcurrentExecutions</a></code> | Metric for the number of unreserved concurrent executions across all Lambdas. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-lambda-deno.DenoFunction.isConstruct"></a>

```typescript
import { DenoFunction } from '@pepperize/cdk-lambda-deno'

DenoFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-lambda-deno.DenoFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="@pepperize/cdk-lambda-deno.DenoFunction.isResource"></a>

```typescript
import { DenoFunction } from '@pepperize/cdk-lambda-deno'

DenoFunction.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@pepperize/cdk-lambda-deno.DenoFunction.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `classifyVersionProperty` <a name="classifyVersionProperty" id="@pepperize/cdk-lambda-deno.DenoFunction.classifyVersionProperty"></a>

```typescript
import { DenoFunction } from '@pepperize/cdk-lambda-deno'

DenoFunction.classifyVersionProperty(propertyName: string, locked: boolean)
```

Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource.

See 'currentVersion' section in the module README for more details.

###### `propertyName`<sup>Required</sup> <a name="propertyName" id="@pepperize/cdk-lambda-deno.DenoFunction.classifyVersionProperty.parameter.propertyName"></a>

- *Type:* string

The property to classify.

---

###### `locked`<sup>Required</sup> <a name="locked" id="@pepperize/cdk-lambda-deno.DenoFunction.classifyVersionProperty.parameter.locked"></a>

- *Type:* boolean

whether the property should be associated to the version or not.

---

##### `fromFunctionArn` <a name="fromFunctionArn" id="@pepperize/cdk-lambda-deno.DenoFunction.fromFunctionArn"></a>

```typescript
import { DenoFunction } from '@pepperize/cdk-lambda-deno'

DenoFunction.fromFunctionArn(scope: Construct, id: string, functionArn: string)
```

Import a lambda function into the CDK using its ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-lambda-deno.DenoFunction.fromFunctionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-lambda-deno.DenoFunction.fromFunctionArn.parameter.id"></a>

- *Type:* string

---

###### `functionArn`<sup>Required</sup> <a name="functionArn" id="@pepperize/cdk-lambda-deno.DenoFunction.fromFunctionArn.parameter.functionArn"></a>

- *Type:* string

---

##### `fromFunctionAttributes` <a name="fromFunctionAttributes" id="@pepperize/cdk-lambda-deno.DenoFunction.fromFunctionAttributes"></a>

```typescript
import { DenoFunction } from '@pepperize/cdk-lambda-deno'

DenoFunction.fromFunctionAttributes(scope: Construct, id: string, attrs: FunctionAttributes)
```

Creates a Lambda function object which represents a function not defined within this stack.

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-lambda-deno.DenoFunction.fromFunctionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-lambda-deno.DenoFunction.fromFunctionAttributes.parameter.id"></a>

- *Type:* string

The name of the lambda construct.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@pepperize/cdk-lambda-deno.DenoFunction.fromFunctionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionAttributes

the attributes of the function to import.

---

##### `fromFunctionName` <a name="fromFunctionName" id="@pepperize/cdk-lambda-deno.DenoFunction.fromFunctionName"></a>

```typescript
import { DenoFunction } from '@pepperize/cdk-lambda-deno'

DenoFunction.fromFunctionName(scope: Construct, id: string, functionName: string)
```

Import a lambda function into the CDK using its name.

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-lambda-deno.DenoFunction.fromFunctionName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-lambda-deno.DenoFunction.fromFunctionName.parameter.id"></a>

- *Type:* string

---

###### `functionName`<sup>Required</sup> <a name="functionName" id="@pepperize/cdk-lambda-deno.DenoFunction.fromFunctionName.parameter.functionName"></a>

- *Type:* string

---

##### `metricAll` <a name="metricAll" id="@pepperize/cdk-lambda-deno.DenoFunction.metricAll"></a>

```typescript
import { DenoFunction } from '@pepperize/cdk-lambda-deno'

DenoFunction.metricAll(metricName: string, props?: MetricOptions)
```

Return the given named metric for this Lambda.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@pepperize/cdk-lambda-deno.DenoFunction.metricAll.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-lambda-deno.DenoFunction.metricAll.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllConcurrentExecutions` <a name="metricAllConcurrentExecutions" id="@pepperize/cdk-lambda-deno.DenoFunction.metricAllConcurrentExecutions"></a>

```typescript
import { DenoFunction } from '@pepperize/cdk-lambda-deno'

DenoFunction.metricAllConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-lambda-deno.DenoFunction.metricAllConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllDuration` <a name="metricAllDuration" id="@pepperize/cdk-lambda-deno.DenoFunction.metricAllDuration"></a>

```typescript
import { DenoFunction } from '@pepperize/cdk-lambda-deno'

DenoFunction.metricAllDuration(props?: MetricOptions)
```

Metric for the Duration executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-lambda-deno.DenoFunction.metricAllDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllErrors` <a name="metricAllErrors" id="@pepperize/cdk-lambda-deno.DenoFunction.metricAllErrors"></a>

```typescript
import { DenoFunction } from '@pepperize/cdk-lambda-deno'

DenoFunction.metricAllErrors(props?: MetricOptions)
```

Metric for the number of Errors executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-lambda-deno.DenoFunction.metricAllErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllInvocations` <a name="metricAllInvocations" id="@pepperize/cdk-lambda-deno.DenoFunction.metricAllInvocations"></a>

```typescript
import { DenoFunction } from '@pepperize/cdk-lambda-deno'

DenoFunction.metricAllInvocations(props?: MetricOptions)
```

Metric for the number of invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-lambda-deno.DenoFunction.metricAllInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllThrottles` <a name="metricAllThrottles" id="@pepperize/cdk-lambda-deno.DenoFunction.metricAllThrottles"></a>

```typescript
import { DenoFunction } from '@pepperize/cdk-lambda-deno'

DenoFunction.metricAllThrottles(props?: MetricOptions)
```

Metric for the number of throttled invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-lambda-deno.DenoFunction.metricAllThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllUnreservedConcurrentExecutions` <a name="metricAllUnreservedConcurrentExecutions" id="@pepperize/cdk-lambda-deno.DenoFunction.metricAllUnreservedConcurrentExecutions"></a>

```typescript
import { DenoFunction } from '@pepperize/cdk-lambda-deno'

DenoFunction.metricAllUnreservedConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of unreserved concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@pepperize/cdk-lambda-deno.DenoFunction.metricAllUnreservedConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64). |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Access the Connections object. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.property.functionArn">functionArn</a></code> | <code>string</code> | ARN of this function. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.property.functionName">functionName</a></code> | <code>string</code> | Name of this function. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal this Lambda Function is running as. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.property.isBoundToVpc">isBoundToVpc</a></code> | <code>boolean</code> | Whether or not this Lambda function was bound to a VPC. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.property.latestVersion">latestVersion</a></code> | <code>aws-cdk-lib.aws_lambda.IVersion</code> | The `$LATEST` version of this function. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.property.permissionsNode">permissionsNode</a></code> | <code>constructs.Node</code> | The construct node where permissions are attached. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.property.resourceArnsForGrantInvoke">resourceArnsForGrantInvoke</a></code> | <code>string[]</code> | The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke(). |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role associated with this function. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.property.currentVersion">currentVersion</a></code> | <code>aws-cdk-lib.aws_lambda.Version</code> | Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The LogGroup where the Lambda function's logs are made available. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime configured for this lambda. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The DLQ (as queue) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The DLQ (as topic) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunction.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout configured for this lambda. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-lambda-deno.DenoFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@pepperize/cdk-lambda-deno.DenoFunction.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@pepperize/cdk-lambda-deno.DenoFunction.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@pepperize/cdk-lambda-deno.DenoFunction.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture

The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64).

---

##### `connections`<sup>Required</sup> <a name="connections" id="@pepperize/cdk-lambda-deno.DenoFunction.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Access the Connections object.

Will fail if not a VPC-enabled Lambda Function

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@pepperize/cdk-lambda-deno.DenoFunction.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

ARN of this function.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@pepperize/cdk-lambda-deno.DenoFunction.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Name of this function.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@pepperize/cdk-lambda-deno.DenoFunction.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal this Lambda Function is running as.

---

##### `isBoundToVpc`<sup>Required</sup> <a name="isBoundToVpc" id="@pepperize/cdk-lambda-deno.DenoFunction.property.isBoundToVpc"></a>

```typescript
public readonly isBoundToVpc: boolean;
```

- *Type:* boolean

Whether or not this Lambda function was bound to a VPC.

If this is is `false`, trying to access the `connections` object will fail.

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@pepperize/cdk-lambda-deno.DenoFunction.property.latestVersion"></a>

```typescript
public readonly latestVersion: IVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.IVersion

The `$LATEST` version of this function.

Note that this is reference to a non-specific AWS Lambda version, which
means the function this version refers to can return different results in
different invocations.

To obtain a reference to an explicit version which references the current
function configuration, use `lambdaFunction.currentVersion` instead.

---

##### `permissionsNode`<sup>Required</sup> <a name="permissionsNode" id="@pepperize/cdk-lambda-deno.DenoFunction.property.permissionsNode"></a>

```typescript
public readonly permissionsNode: Node;
```

- *Type:* constructs.Node

The construct node where permissions are attached.

---

##### `resourceArnsForGrantInvoke`<sup>Required</sup> <a name="resourceArnsForGrantInvoke" id="@pepperize/cdk-lambda-deno.DenoFunction.property.resourceArnsForGrantInvoke"></a>

```typescript
public readonly resourceArnsForGrantInvoke: string[];
```

- *Type:* string[]

The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke().

---

##### `role`<sup>Optional</sup> <a name="role" id="@pepperize/cdk-lambda-deno.DenoFunction.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role associated with this function.

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@pepperize/cdk-lambda-deno.DenoFunction.property.currentVersion"></a>

```typescript
public readonly currentVersion: Version;
```

- *Type:* aws-cdk-lib.aws_lambda.Version

Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes.

You can specify options for this version using the `currentVersionOptions`
prop when initializing the `lambda.Function`.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@pepperize/cdk-lambda-deno.DenoFunction.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The LogGroup where the Lambda function's logs are made available.

If either `logRetention` is set or this property is called, a CloudFormation custom resource is added to the stack that
pre-creates the log group as part of the stack deployment, if it already doesn't exist, and sets the correct log retention
period (never expire, by default).

Further, if the log group already exists and the `logRetention` is not set, the custom resource will reset the log retention
to never expire even if it was configured with a different value.

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@pepperize/cdk-lambda-deno.DenoFunction.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

The runtime configured for this lambda.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@pepperize/cdk-lambda-deno.DenoFunction.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

The DLQ (as queue) associated with this Lambda Function (this is an optional attribute).

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@pepperize/cdk-lambda-deno.DenoFunction.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

The DLQ (as topic) associated with this Lambda Function (this is an optional attribute).

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@pepperize/cdk-lambda-deno.DenoFunction.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

The timeout configured for this lambda.

---


### DenoLayer <a name="DenoLayer" id="@pepperize/cdk-lambda-deno.DenoLayer"></a>

#### Initializers <a name="Initializers" id="@pepperize/cdk-lambda-deno.DenoLayer.Initializer"></a>

```typescript
import { DenoLayer } from '@pepperize/cdk-lambda-deno'

new DenoLayer(scope: Construct, id: string, options: DenoLayerOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoLayer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoLayer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoLayer.Initializer.parameter.options">options</a></code> | <code><a href="#@pepperize/cdk-lambda-deno.DenoLayerOptions">DenoLayerOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-lambda-deno.DenoLayer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-lambda-deno.DenoLayer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@pepperize/cdk-lambda-deno.DenoLayer.Initializer.parameter.options"></a>

- *Type:* <a href="#@pepperize/cdk-lambda-deno.DenoLayerOptions">DenoLayerOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoLayer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoLayer.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoLayer.addPermission">addPermission</a></code> | Add permission for this layer version to specific entities. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-lambda-deno.DenoLayer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@pepperize/cdk-lambda-deno.DenoLayer.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@pepperize/cdk-lambda-deno.DenoLayer.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addPermission` <a name="addPermission" id="@pepperize/cdk-lambda-deno.DenoLayer.addPermission"></a>

```typescript
public addPermission(id: string, permission: LayerVersionPermission): void
```

Add permission for this layer version to specific entities.

Usage within
the same account where the layer is defined is always allowed and does not
require calling this method. Note that the principal that creates the
Lambda function using the layer (for example, a CloudFormation changeset
execution role) also needs to have the ``lambda:GetLayerVersion``
permission on the layer version.

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-lambda-deno.DenoLayer.addPermission.parameter.id"></a>

- *Type:* string

---

###### `permission`<sup>Required</sup> <a name="permission" id="@pepperize/cdk-lambda-deno.DenoLayer.addPermission.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_lambda.LayerVersionPermission

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoLayer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoLayer.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoLayer.fromLayerVersionArn">fromLayerVersionArn</a></code> | Imports a layer version by ARN. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoLayer.fromLayerVersionAttributes">fromLayerVersionAttributes</a></code> | Imports a Layer that has been defined externally. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoLayer.getOrCreate">getOrCreate</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-lambda-deno.DenoLayer.isConstruct"></a>

```typescript
import { DenoLayer } from '@pepperize/cdk-lambda-deno'

DenoLayer.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-lambda-deno.DenoLayer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="@pepperize/cdk-lambda-deno.DenoLayer.isResource"></a>

```typescript
import { DenoLayer } from '@pepperize/cdk-lambda-deno'

DenoLayer.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@pepperize/cdk-lambda-deno.DenoLayer.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromLayerVersionArn` <a name="fromLayerVersionArn" id="@pepperize/cdk-lambda-deno.DenoLayer.fromLayerVersionArn"></a>

```typescript
import { DenoLayer } from '@pepperize/cdk-lambda-deno'

DenoLayer.fromLayerVersionArn(scope: Construct, id: string, layerVersionArn: string)
```

Imports a layer version by ARN.

Assumes it is compatible with all Lambda runtimes.

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-lambda-deno.DenoLayer.fromLayerVersionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-lambda-deno.DenoLayer.fromLayerVersionArn.parameter.id"></a>

- *Type:* string

---

###### `layerVersionArn`<sup>Required</sup> <a name="layerVersionArn" id="@pepperize/cdk-lambda-deno.DenoLayer.fromLayerVersionArn.parameter.layerVersionArn"></a>

- *Type:* string

---

##### `fromLayerVersionAttributes` <a name="fromLayerVersionAttributes" id="@pepperize/cdk-lambda-deno.DenoLayer.fromLayerVersionAttributes"></a>

```typescript
import { DenoLayer } from '@pepperize/cdk-lambda-deno'

DenoLayer.fromLayerVersionAttributes(scope: Construct, id: string, attrs: LayerVersionAttributes)
```

Imports a Layer that has been defined externally.

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-lambda-deno.DenoLayer.fromLayerVersionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

the parent Construct that will use the imported layer.

---

###### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-lambda-deno.DenoLayer.fromLayerVersionAttributes.parameter.id"></a>

- *Type:* string

the id of the imported layer in the construct tree.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@pepperize/cdk-lambda-deno.DenoLayer.fromLayerVersionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_lambda.LayerVersionAttributes

the properties of the imported layer.

---

##### `getOrCreate` <a name="getOrCreate" id="@pepperize/cdk-lambda-deno.DenoLayer.getOrCreate"></a>

```typescript
import { DenoLayer } from '@pepperize/cdk-lambda-deno'

DenoLayer.getOrCreate(scope: Construct, options: DenoLayerOptions)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-lambda-deno.DenoLayer.getOrCreate.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `options`<sup>Required</sup> <a name="options" id="@pepperize/cdk-lambda-deno.DenoLayer.getOrCreate.parameter.options"></a>

- *Type:* <a href="#@pepperize/cdk-lambda-deno.DenoLayerOptions">DenoLayerOptions</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoLayer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoLayer.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoLayer.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoLayer.property.layerVersionArn">layerVersionArn</a></code> | <code>string</code> | The ARN of the Lambda Layer version that this Layer defines. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoLayer.property.compatibleRuntimes">compatibleRuntimes</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime[]</code> | The runtimes compatible with this Layer. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-lambda-deno.DenoLayer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@pepperize/cdk-lambda-deno.DenoLayer.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@pepperize/cdk-lambda-deno.DenoLayer.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `layerVersionArn`<sup>Required</sup> <a name="layerVersionArn" id="@pepperize/cdk-lambda-deno.DenoLayer.property.layerVersionArn"></a>

```typescript
public readonly layerVersionArn: string;
```

- *Type:* string

The ARN of the Lambda Layer version that this Layer defines.

---

##### `compatibleRuntimes`<sup>Optional</sup> <a name="compatibleRuntimes" id="@pepperize/cdk-lambda-deno.DenoLayer.property.compatibleRuntimes"></a>

```typescript
public readonly compatibleRuntimes: Runtime[];
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime[]

The runtimes compatible with this Layer.

---


## Structs <a name="Structs" id="Structs"></a>

### DenoFunctionProps <a name="DenoFunctionProps" id="@pepperize/cdk-lambda-deno.DenoFunctionProps"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.Initializer"></a>

```typescript
import { DenoFunctionProps } from '@pepperize/cdk-lambda-deno'

const denoFunctionProps: DenoFunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.maxEventAge">maxEventAge</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.onFailure">onFailure</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for failed invocations. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.onSuccess">onSuccess</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for successful invocations. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | The maximum number of times to retry when the function returns an error. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.allowAllOutbound">allowAllOutbound</a></code> | <code>boolean</code> | Whether to allow the Lambda to send all network traffic. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.allowPublicSubnet">allowPublicSubnet</a></code> | <code>boolean</code> | Lambda Functions in a public subnet can NOT access the internet. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The system architectures compatible with this lambda function. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.codeSigningConfig">codeSigningConfig</a></code> | <code>aws-cdk-lib.aws_lambda.ICodeSigningConfig</code> | Code signing config associated with this function. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.currentVersionOptions">currentVersionOptions</a></code> | <code>aws-cdk-lib.aws_lambda.VersionOptions</code> | Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The SQS queue to use if DLQ is enabled. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.deadLetterQueueEnabled">deadLetterQueueEnabled</a></code> | <code>boolean</code> | Enabled DLQ. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The SNS topic to use as a DLQ. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.description">description</a></code> | <code>string</code> | A description of the function. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Key-value pairs that Lambda caches and makes available for your Lambda functions. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.environmentEncryption">environmentEncryption</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS KMS key that's used to encrypt your function's environment variables. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.ephemeralStorageSize">ephemeralStorageSize</a></code> | <code>aws-cdk-lib.Size</code> | The size of the function’s /tmp directory in MiB. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.events">events</a></code> | <code>aws-cdk-lib.aws_lambda.IEventSource[]</code> | Event sources for this function. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.filesystem">filesystem</a></code> | <code>aws-cdk-lib.aws_lambda.FileSystem</code> | The filesystem configuration for the lambda function. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.functionName">functionName</a></code> | <code>string</code> | A name for the function. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.initialPolicy">initialPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | Initial policy statements to add to the created Lambda Role. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.insightsVersion">insightsVersion</a></code> | <code>aws-cdk-lib.aws_lambda.LambdaInsightsVersion</code> | Specify the version of CloudWatch Lambda insights to use for monitoring. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.layers">layers</a></code> | <code>aws-cdk-lib.aws_lambda.ILayerVersion[]</code> | A list of layers to add to the function's execution environment. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.logRetentionRetryOptions">logRetentionRetryOptions</a></code> | <code>aws-cdk-lib.aws_lambda.LogRetentionRetryOptions</code> | When log retention is specified, a custom resource attempts to create the CloudWatch log group. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.logRetentionRole">logRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role for the Lambda function associated with the custom resource that sets the retention policy. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.memorySize">memorySize</a></code> | <code>number</code> | The amount of memory, in MB, that is allocated to your Lambda function. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.profiling">profiling</a></code> | <code>boolean</code> | Enable profiling. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.profilingGroup">profilingGroup</a></code> | <code>aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup</code> | Profiling Group. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>number</code> | The maximum of concurrent executions you want to reserve for the function. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Lambda execution role. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The list of security groups to associate with the Lambda's network interfaces. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The function execution time (in seconds) after which Lambda terminates the function. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.tracing">tracing</a></code> | <code>aws-cdk-lib.aws_lambda.Tracing</code> | Enable AWS X-Ray Tracing for Lambda Function. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network to place Lambda network interfaces. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the network interfaces within the VPC. |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.code">code</a></code> | <code>aws-cdk-lib.aws_lambda.Code</code> | *No description.* |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.handler">handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoFunctionProps.property.version">version</a></code> | <code><a href="#@pepperize/cdk-lambda-deno.DenoVersion">DenoVersion</a></code> | *No description.* |

---

##### `maxEventAge`<sup>Optional</sup> <a name="maxEventAge" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.maxEventAge"></a>

```typescript
public readonly maxEventAge: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(6)

The maximum age of a request that Lambda sends to a function for processing.

Minimum: 60 seconds
Maximum: 6 hours

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.onFailure"></a>

```typescript
public readonly onFailure: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for failed invocations.

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.onSuccess"></a>

```typescript
public readonly onSuccess: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for successful invocations.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number
- *Default:* 2

The maximum number of times to retry when the function returns an error.

Minimum: 0
Maximum: 2

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="allowAllOutbound" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to allow the Lambda to send all network traffic.

If set to false, you must individually add traffic rules to allow the
Lambda to connect to network targets.

---

##### `allowPublicSubnet`<sup>Optional</sup> <a name="allowPublicSubnet" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.allowPublicSubnet"></a>

```typescript
public readonly allowPublicSubnet: boolean;
```

- *Type:* boolean
- *Default:* false

Lambda Functions in a public subnet can NOT access the internet.

Use this property to acknowledge this limitation and still place the function in a public subnet.

> [https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841](https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841)

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture
- *Default:* Architecture.X86_64

The system architectures compatible with this lambda function.

---

##### `codeSigningConfig`<sup>Optional</sup> <a name="codeSigningConfig" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.codeSigningConfig"></a>

```typescript
public readonly codeSigningConfig: ICodeSigningConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.ICodeSigningConfig
- *Default:* Not Sign the Code

Code signing config associated with this function.

---

##### `currentVersionOptions`<sup>Optional</sup> <a name="currentVersionOptions" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.currentVersionOptions"></a>

```typescript
public readonly currentVersionOptions: VersionOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.VersionOptions
- *Default:* default options as described in `VersionOptions`

Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue
- *Default:* SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`

The SQS queue to use if DLQ is enabled.

If SNS topic is desired, specify `deadLetterTopic` property instead.

---

##### `deadLetterQueueEnabled`<sup>Optional</sup> <a name="deadLetterQueueEnabled" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.deadLetterQueueEnabled"></a>

```typescript
public readonly deadLetterQueueEnabled: boolean;
```

- *Type:* boolean
- *Default:* false unless `deadLetterQueue` is set, which implies DLQ is enabled.

Enabled DLQ.

If `deadLetterQueue` is undefined,
an SQS queue with default options will be defined for your Function.

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic
- *Default:* no SNS topic

The SNS topic to use as a DLQ.

Note that if `deadLetterQueueEnabled` is set to `true`, an SQS queue will be created
rather than an SNS topic. Using an SNS topic as a DLQ requires this property to be set explicitly.

---

##### `description`<sup>Optional</sup> <a name="description" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the function.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No environment variables.

Key-value pairs that Lambda caches and makes available for your Lambda functions.

Use environment variables to apply configuration changes, such
as test and production environment configurations, without changing your
Lambda function source code.

---

##### `environmentEncryption`<sup>Optional</sup> <a name="environmentEncryption" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.environmentEncryption"></a>

```typescript
public readonly environmentEncryption: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* AWS Lambda creates and uses an AWS managed customer master key (CMK).

The AWS KMS key that's used to encrypt your function's environment variables.

---

##### `ephemeralStorageSize`<sup>Optional</sup> <a name="ephemeralStorageSize" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.ephemeralStorageSize"></a>

```typescript
public readonly ephemeralStorageSize: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* 512 MiB

The size of the function’s /tmp directory in MiB.

---

##### `events`<sup>Optional</sup> <a name="events" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.events"></a>

```typescript
public readonly events: IEventSource[];
```

- *Type:* aws-cdk-lib.aws_lambda.IEventSource[]
- *Default:* No event sources.

Event sources for this function.

You can also add event sources using `addEventSource`.

---

##### `filesystem`<sup>Optional</sup> <a name="filesystem" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.filesystem"></a>

```typescript
public readonly filesystem: FileSystem;
```

- *Type:* aws-cdk-lib.aws_lambda.FileSystem
- *Default:* will not mount any filesystem

The filesystem configuration for the lambda function.

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.

A name for the function.

---

##### `initialPolicy`<sup>Optional</sup> <a name="initialPolicy" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.initialPolicy"></a>

```typescript
public readonly initialPolicy: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]
- *Default:* No policy statements are added to the created Lambda role.

Initial policy statements to add to the created Lambda Role.

You can call `addToRolePolicy` to the created lambda to add statements post creation.

---

##### `insightsVersion`<sup>Optional</sup> <a name="insightsVersion" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.insightsVersion"></a>

```typescript
public readonly insightsVersion: LambdaInsightsVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.LambdaInsightsVersion
- *Default:* No Lambda Insights

Specify the version of CloudWatch Lambda insights to use for monitoring.

> [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html)

---

##### `layers`<sup>Optional</sup> <a name="layers" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.layers"></a>

```typescript
public readonly layers: ILayerVersion[];
```

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion[]
- *Default:* No layers.

A list of layers to add to the function's execution environment.

You can configure your Lambda function to pull in
additional code during initialization in the form of layers. Layers are packages of libraries or other dependencies
that can be used by multiple functions.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs.RetentionDays.INFINITE

The number of days log events are kept in CloudWatch Logs.

When updating
this property, unsetting it doesn't remove the log retention policy. To
remove the retention policy, set the value to `INFINITE`.

---

##### `logRetentionRetryOptions`<sup>Optional</sup> <a name="logRetentionRetryOptions" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.logRetentionRetryOptions"></a>

```typescript
public readonly logRetentionRetryOptions: LogRetentionRetryOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.LogRetentionRetryOptions
- *Default:* Default AWS SDK retry options.

When log retention is specified, a custom resource attempts to create the CloudWatch log group.

These options control the retry policy when interacting with CloudWatch APIs.

---

##### `logRetentionRole`<sup>Optional</sup> <a name="logRetentionRole" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.logRetentionRole"></a>

```typescript
public readonly logRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created.

The IAM role for the Lambda function associated with the custom resource that sets the retention policy.

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number
- *Default:* 128

The amount of memory, in MB, that is allocated to your Lambda function.

Lambda uses this value to proportionally allocate the amount of CPU
power. For more information, see Resource Model in the AWS Lambda
Developer Guide.

---

##### `profiling`<sup>Optional</sup> <a name="profiling" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.profiling"></a>

```typescript
public readonly profiling: boolean;
```

- *Type:* boolean
- *Default:* No profiling.

Enable profiling.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `profilingGroup`<sup>Optional</sup> <a name="profilingGroup" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.profilingGroup"></a>

```typescript
public readonly profilingGroup: IProfilingGroup;
```

- *Type:* aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup
- *Default:* A new profiling group will be created if `profiling` is set.

Profiling Group.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="reservedConcurrentExecutions" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.reservedConcurrentExecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* number
- *Default:* No specific limit - account limit.

The maximum of concurrent executions you want to reserve for the function.

> [https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html)

---

##### `role`<sup>Optional</sup> <a name="role" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A unique role will be generated for this lambda function. Both supplied and generated roles can always be changed by calling `addToRolePolicy`.

Lambda execution role.

This is the role that will be assumed by the function upon execution.
It controls the permissions that the function will have. The Role must
be assumable by the 'lambda.amazonaws.com' service principal.

The default Role automatically has permissions granted for Lambda execution. If you
provide a Role, you must add the relevant AWS managed policies yourself.

The relevant managed policies are "service-role/AWSLambdaBasicExecutionRole" and
"service-role/AWSLambdaVPCAccessExecutionRole".

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* If the function is placed within a VPC and a security group is not specified, either by this or securityGroup prop, a dedicated security group will be created for this function.

The list of security groups to associate with the Lambda's network interfaces.

Only used if 'vpc' is supplied.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(3)

The function execution time (in seconds) after which Lambda terminates the function.

Because the execution time affects cost, set this value
based on the function's expected execution time.

---

##### `tracing`<sup>Optional</sup> <a name="tracing" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.tracing"></a>

```typescript
public readonly tracing: Tracing;
```

- *Type:* aws-cdk-lib.aws_lambda.Tracing
- *Default:* Tracing.Disabled

Enable AWS X-Ray Tracing for Lambda Function.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* Function is not placed within a VPC.

VPC network to place Lambda network interfaces.

Specify this if the Lambda function needs to access resources in a VPC.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified

Where to place the network interfaces within the VPC.

Only used if 'vpc' is supplied. Note: internet access for Lambdas
requires a NAT gateway, so picking Public subnets is not allowed.

---

##### `code`<sup>Required</sup> <a name="code" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.code"></a>

```typescript
public readonly code: Code;
```

- *Type:* aws-cdk-lib.aws_lambda.Code

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

---

##### `version`<sup>Optional</sup> <a name="version" id="@pepperize/cdk-lambda-deno.DenoFunctionProps.property.version"></a>

```typescript
public readonly version: DenoVersion;
```

- *Type:* <a href="#@pepperize/cdk-lambda-deno.DenoVersion">DenoVersion</a>

---

### DenoLayerOptions <a name="DenoLayerOptions" id="@pepperize/cdk-lambda-deno.DenoLayerOptions"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-lambda-deno.DenoLayerOptions.Initializer"></a>

```typescript
import { DenoLayerOptions } from '@pepperize/cdk-lambda-deno'

const denoLayerOptions: DenoLayerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoLayerOptions.property.version">version</a></code> | <code><a href="#@pepperize/cdk-lambda-deno.DenoVersion">DenoVersion</a></code> | *No description.* |

---

##### `version`<sup>Optional</sup> <a name="version" id="@pepperize/cdk-lambda-deno.DenoLayerOptions.property.version"></a>

```typescript
public readonly version: DenoVersion;
```

- *Type:* <a href="#@pepperize/cdk-lambda-deno.DenoVersion">DenoVersion</a>
- *Default:* 1.23.3

---

## Classes <a name="Classes" id="Classes"></a>

### DenoVersion <a name="DenoVersion" id="@pepperize/cdk-lambda-deno.DenoVersion"></a>


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoVersion.of">of</a></code> | Specify a custom version. |

---

##### `of` <a name="of" id="@pepperize/cdk-lambda-deno.DenoVersion.of"></a>

```typescript
import { DenoVersion } from '@pepperize/cdk-lambda-deno'

DenoVersion.of(version: string)
```

Specify a custom version.

Use this if the version you need is not available in one of the predefined versions.

###### `version`<sup>Required</sup> <a name="version" id="@pepperize/cdk-lambda-deno.DenoVersion.of.parameter.version"></a>

- *Type:* string

The semantic version number without prefix 'v'.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoVersion.property.version">version</a></code> | <code>string</code> | The version string. |

---

##### `version`<sup>Required</sup> <a name="version" id="@pepperize/cdk-lambda-deno.DenoVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version string.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-lambda-deno.DenoVersion.property.V1_23_3">V1_23_3</a></code> | <code><a href="#@pepperize/cdk-lambda-deno.DenoVersion">DenoVersion</a></code> | 1.23.3. |

---

##### `V1_23_3`<sup>Required</sup> <a name="V1_23_3" id="@pepperize/cdk-lambda-deno.DenoVersion.property.V1_23_3"></a>

```typescript
public readonly V1_23_3: DenoVersion;
```

- *Type:* <a href="#@pepperize/cdk-lambda-deno.DenoVersion">DenoVersion</a>

1.23.3.

---


