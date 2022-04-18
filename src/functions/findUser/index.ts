import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'users/{id}',
        cors: true,
        authorizer: {
          name: "PrivateAuthorizer",
          type: "COGNITO_USER_POOLS",
          arn: {
            "Fn::GetAtt": [
              "UserPool",
              "Arn"
            ]
          },
          claims: [
            "email"
          ]
        }
      },
    },
  ],
  vpc: {
    securityGroupIds: [
      "sg-0c0a38f5029d52944"
    ],
    subnetIds: [
      "subnet-05eab8a66473d8dd7",
      "subnet-08fdc8f46ee89733d",
      "subnet-07fa0eb93053cfc9d",
      "subnet-036a1a12df6a9e8b4",
      "subnet-09c05fa1be8f9891c",
      "subnet-0dbad941deb5c9eb4"
    ]
  }
};
