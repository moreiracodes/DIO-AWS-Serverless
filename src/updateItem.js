"use strict";

const AWS = require("aws-sdk");

const updateItem = async(event) => {

    const {id} = event.pathParameters;
    const {itemStatus} = JSON.parse(event.body);
    
    const dynamodb  = new AWS.DynamoDB.DocumentClient();
    
    try{
        
        const results = await dynamodb.update({
            TableName: "ItemTableNew",
            Key: {id},
            UpdateExpression: 'set itemStatus = :itemStatus',
            ExpressionAttributeValues:{
                ':itemStatus' : itemStatus
            },
            ReturnValues: "ALL_NEW"
        }).promise();

    }catch (error){
        console.log(error);
    }

    return {
        statusCode: 200,
        body: JSON.stringify({msg: 'Item upteded!'})
    };
}

module.exports = {
    handler: updateItem
}