# SmartStudent

## Description
This project was made during winter school 2023, organized by FERI Maribor.

I have built simple application, made in Java Springboot as backend and Javascript React as frontend.
Mysql database consists of Student, University and List of applications.
If student has greater final grade than university's threshold, he is eligible to enroll.

Next we created unit tests in Java where we tested basic functionalities (CRUD) and got familiar with Github Actions (CI) and Katalon basics.

## Challenges
- I encountered error while trying to build docker image.  
I received *failed to solve with frontend dockerfile.v0: failed to create LLB definition: failed to authorize: rpc error: code = Unknown desc = failed to fetch oauth token: Get "https://auth.docker.io/token?scope=repository%3Alibrary%2Fopenjdk%3Apull&service=registry.docker.io": x509: certificate signed by unknown authority*. Despite trying multiple solutions, I unfortunately couldn't solve it.

- I encountered error while building with CI. It occurred because GitHub Actions couldn't connect to local mysql database to perform tests.


