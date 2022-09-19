const aws = require('aws-sdk')
const s3 = new aws.S3()
exports.lambdaHandler = async (event) => {
    console.log(event) 
    try{
        if(event.path == "/teacherprofiles" && event.httpMethod == "POST"){
            const params = {
            Body:event.body,
            Bucket:process.env.BucketName,
            Key: `teachersprofiles/${event.queryStringParameters.Key}`
            }
            let response = await s3.putObject(params).promise()
            return {
                statusCode:200,
                body:JSON.stringify({
                    "message":true,
                    "data": "uploaded object successfully"
                }) 
            }
        }
    
    else if(event.path == "/studentprofiles" && event.httpMethod == "POST"){
        const params1 = {
            Body:event.body,
            Bucket:process.env.BucketName,
            Key: `studentsprofiles/${event.queryStringParameters.Key}`
        }
        let response = await s3.putObject(params1).promise()
        return{
            statusCode:200,
            body:JSON.stringify({
                "message": true,
                "data": "uploaded student profile pic successfully"
            })
        }
    }
    else if (event.httpMethod == "GET"){
        const getTparams = {
            Bucket:process.env.BucketName,
            // Delimiter:"/",
            //Prefix:"teacherprofiles/", 
            MaxKeys:30
            //Prefix: "teacherprofiles/"
        }
        let res = await s3.listObjects(getTparams).promise() 
        console.log(res.Contents.Key)
        return{ 
            body:JSON.stringify({
                data: res
            })
            
        }
    }
    }
    catch(err){
        console.log(err)
        return{
        statusCode:400,
        body:JSON.stringify({
            "message": false,
            "data": "Enter the valid parameters"
        })
    }
}
}
