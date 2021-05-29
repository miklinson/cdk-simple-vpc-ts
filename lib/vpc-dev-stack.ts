import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';

export class VpcDevStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const vpc = new ec2.Vpc(this, 'VPCDev', {
      cidr: "10.100.0.0/16",
      maxAzs: 2,
      // limit the NAT Gateway to 1 to save cost
      natGateways: 1,
      subnetConfiguration: [
        {
          // 'subnetType' controls Internet access, as described above.
          subnetType: ec2.SubnetType.PUBLIC,
          name: 'Ingress',
          cidrMask: 24,
        },
        {
          subnetType: ec2.SubnetType.PRIVATE,
          name: 'Application',
          cidrMask: 24,
        },
        {
          cidrMask: 26,
          name: 'Database',
          subnetType: ec2.SubnetType.ISOLATED,
    
          // 'reserved' can be used to reserve IP address space. No resources will
          // be created for this subnet, but the IP range will be kept available for
          // future creation of this subnet, or even for future subdivision.
          reserved: true
        }
      ],
   })
   
  }
}
