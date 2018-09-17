## What is An API?

* Application Program Interface
* APIs Are Everywhere
* Contract provided bt one piece of Software to another
* Structured request and response

## What is REST?

* Representation State Trasfer
* Architecture style for designing networked applications
* Relies on a statelss client-server protocol almost always HTTP
* Treats server objects or destroyed
* Can be used by virtually any programming language

## HTTP Methods

* GET : Retrieve data from a specified resource
* POST : Submit data to be processed to a specified resource
* PUT : Update a specified resource
* DELETE : Delete a specified resource

[can be used but very ralely]

* HEAD : Same as get but does not return a body
* OPTIONS : Returns the supported HTTP methods
* PATCH : Update partial resources

## Endpoints

The URI/URL wher api/server can be accessed by a client application

ex)

GET : https://mysite.com/api/users 

GET : https://mysite.com/api/users/1 	OR 
	https://mysite.com/api/users/details/1

POST : https://mysite.com/api/users

PUT : https://mysite.com/api/users/1 	OR
https://mysite.com/api/user/update/1

DELETE : https://mysite.com/api/users/1 OR
https://mysite.com/api/user/delete/1


## Authentication

Some API's require authentication to use their service.
This could be free or paid.

* curl -H "Authorization: token OAUTH-TOKEN" http://api.github.com

* curl http;//api.github.com/?access_token=OAUTH-TOKEN

* curl 'http://api.github.com/users/whatever?client_id=xxxx&cliend_secret=yyy"



 


ALL RESOURCES FROM : 




What Is A RESTful API? Explanation of REST & HTTP : [Traversy Media](https://youtu.be/Q-BpqyOT3a8)