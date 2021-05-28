# VPC for development using Typescript

VPC for development using TypeScript with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Deploy

```
$ npm install -g aws-cdk
$ npm install
#This isn't strictly necessary with the AWS CDK—the Toolkit does it for you so you can't forget. But you can still build manually whenever you want to catch syntax and type errors.
$ npm run build
$ cdk deploy
```

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
