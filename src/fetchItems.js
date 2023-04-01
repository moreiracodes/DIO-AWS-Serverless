"use strict";

const AWS = require("aws-sdk");

const fetchItems = async(event) => {
    let items;
    const dynamodb  = new AWS.DynamoDB.DocumentClient();

    try{
        
        const results = await dynamodb.scan({
            TableName: "ItemTableNew"
        }).promise();

        items = results.Items;

    }catch (error){
        console.log(error);
    }

    return {
        statusCode: 200,
        body: JSON.stringify(items)
    };
}

module.exports = {
    handler: fetchItems
}