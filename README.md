ALGORITHM


Import the necessary module:

Import the web framework module (ie., Express).


Initialize the web framework:


Create an instance of the web framework.


Define the server port:


Set a port number on which the server will listen.


Create a middleware function:

Define a middleware function that:

Logs the HTTP method and URL of each incoming request.

Passes control to the next middleware or route handler.

Use the middleware function:

Apply the middleware function to the web framework instance to ensure it runs for every incoming request.

Define a simple route:

Create a route handler for a specific HTTP method (e.g., GET) and path (e.g., /):

Respond with a simple message 

Start the server:


Make the server listen on the defined port.

Log a message indicating that the server is running and specify the URL.


THE OUTPUT CAN BE VIEWED AT:
http://localhost:3000/


