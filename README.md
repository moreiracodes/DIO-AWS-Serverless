# DIO AWS Serverless Project

This project was proposed by DIO AWS Bootcamp and was designed to create a serverless infrastructure to run a simple CRUD system with Amazon AWS.

It was requested to build an infrastructure with [Serverless Framework](https://www.serverless.com/) and [CloudFormation](https://aws.amazon.com/cloudformation/), using [NodeJS](https://nodejs.org/en), that would automate create of other services (such as [API Gateway](https://aws.amazon.com/api-gateway/), [Lambda](https://aws.amazon.com/lambda/) functions, [DynamoDB tables](https://aws.amazon.com/dynamodb/), and necessary access policies).

I have did not issues with NodeJS and CRUD logic, but soon the troubles start to show up.

# The main issue

The insert function was properly making the request and had the correct response, but the item was not recorded in the DynamoDB table.

## Solution 

Troubleshooting took a while until I understand how to trace logs in the AWS ecosystem with [CloudWatch](https://aws.amazon.com/cloudwatch/), but I finally got it!

I don't know why, but the permissions to write on DynamoDB that were set on serverless.yml weren't working. So, when an insert (putItem) was requested, the API response was okay, and no issues were shown to the user. Then, manually, I set the permissions in the [IAM](https://aws.amazon.com/iam/) console, and it ran as expected.
