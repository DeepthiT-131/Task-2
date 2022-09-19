# Task2 
This project contains 2 dynamodb tables and a S3 bucket and 3 lambda functions and a REST API

DynamoDB tables :
* StudentDetailsTable:
      - StudentId is the Pertition key
      - Name
      - Age
      - Department are the Attributes of this table.
      
* TeacherDetailsTable :
      - TeacherId is the Partition Key 
      - Name
      - Age 
      - Salary
      - Department are the attributes of this table 
      
note : In both Student and Teachers Table Department is the Global Secondary Index 

* s3Bucket:
      - S3 bucket is used for storing the profile_pic of Students and Teachers 
      
* There are 3 Lambda functions:
      - putdatafunction 
      This Function helps us to add the data to the student and teachers table 

      - getdata function
      This function helps to get the student and teacher details and also queries the details according to the department.
   
      - functionforprofiles
      This is a function for uploading and retriving the profile_pic of students and teachers 
      
      
* APIS 

Key                 QueryStudentsApi                                                                                                                    
Description         Querying the student details according to the Department. 
                    queryparameter should be  : 
                                                Key    :    "Department name "
Value               https://5pkx9q8d75.execute-api.us-east-1.amazonaws.com/Prod/querystudentsdetails/                                                   


Key                 QueryTeachersApi                                                                                                                    
Description         Querying the student details according to the Department. 
                    queryparameter should be  : 
                                                Key    :    "Department name "                                                                          
Value               https://5pkx9q8d75.execute-api.us-east-1.amazonaws.com/Prod/queryteachersdetails/                                                   


Key                 TeacherApi                                                                                                                          
Description         API Gateway endpoint URL for Prod stage for adding and retriving data to the teacher table                                            
Value               https://5pkx9q8d75.execute-api.us-east-1.amazonaws.com/Prod/teachers                                                                


Key                 StudentApi                                                                                                                          
Description         API Gateway endpoint URL for Prod stage for adding and retriving data to the students table                          
Value               https://5pkx9q8d75.execute-api.us-east-1.amazonaws.com/Prod/student                                                                 

Key                 TeacherProfilesApi                                                                                                                  
Description         API Gateway endpoint URL for Prod stage for uploading and fetching the teachers_profile_pic                                  
Value               https://5pkx9q8d75.execute-api.us-east-1.amazonaws.com/Prod/teacherprofiles/                                                        

Key                 StudentProfilesApi                                                                                                                  
API Gateway endpoint URL for Prod stage for uploading and fetching the students_profile_pic                                                        
Value               https://5pkx9q8d75.execute-api.us-east-1.amazonaws.com/Prod/studentprofiles/  
 


