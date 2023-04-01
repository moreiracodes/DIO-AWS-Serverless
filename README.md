# DIO AWS Serverless Project

This project was proposed by DIO AWS Bootcamp and was designed to create a serverless infrastructure to run a simple CRUD system with Amazon AWS.

It was requested to build an infrastructure with Serverless Framework and CloudFormation, using NodeJS, that would automate the creation of other services (such as API services, Lambda functions, DynamoDB tables, and necessary access policies).

I have did not issues with NodeJS and CRUD logic, but soon the troubles start to show up.

# The main issue

The insert function was properly making the request and had the correct response, but the item was not recorded in the DynamoDB table.

## Solution 

Troubleshooting took a while until I understood how to trace logs in the AWS ecosystem with CloudWatch, but I finally got it!

I don't know why, but the permissions to write on DynamoDB that were set on serverless.yml weren't attached. So, when an insert (putItem) was requested, the API response was okay, and no issues were shown to the user. Then, manually, I set the permissions in the IAM console, and it ran as expected.

