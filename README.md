# Serverless - AWS Node.js Typescript

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## deployment instructions
1) Before trying to run the project, it is necessary to create an account in the AWS control panel, create an IAM user and configure it in the Amazon CLI, it is also necessary to have previously installed the Serverless Framework on your machine.
2) After cloning the project, it is necessary to add the database access data in the `src/config/database.ts` file, but before that, it is necessary to create a MySQL instance in Amazon RDS, and obtain the access credentials.
3) Access the created instance of the database and run the script located at `_data/create-table-users.sql` to create a new database and the table needed to store the project data.
4) Then you can run the `npm install` command to install all project dependencies.
5) Run `serverless deploy` to push the lambdas functions to AWS.
6) Finally, to have access to all the features available in the API, just download the file located at `_data/workspace-serverless-aws.json` and import it into Insomnia.
7) Note: Most routes in this API are protected, so you will need to use a JWT token to access them. For this you will also need to use this other project [serverless-auth-aws
](https://github.com/ivansimplicio/serverless-auth-aws) which is responsible for creating and authenticating users using Amazon Cognito.