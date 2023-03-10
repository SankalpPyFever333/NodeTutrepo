const http = require('http');

const server  = http.createServer((req,res)=>{
      console.log(req);
      // The request object contains information about the incoming HTTP request, such as the URL, HTTP method (e.g. GET, POST, etc.), headers, and any data that was sent in the request body. When you call console.log(req) inside the callback function, you are logging the entire request object to the console.

      // The request object is a complex JavaScript object that has many properties and methods. Some of the most commonly used properties include:

      // url: The URL of the request.
      // method: The HTTP method used for the request (e.g. GET, POST, etc.).
      // headers: An object containing the headers sent with the request.
      // params: An object containing any parameters that were passed in the URL (e.g. /users/:id).
      // query: An object containing any query parameters that were passed in the URL (e.g. /users?name=John).
      // body: The request body, if any.

      // Now, I will create some more responses. According to request , those responses will be displayed.

      if(req.url==="/about"){
            res.end(`This is our About page`);
      }
      if(req.url==="/home"){
            res.end(`<h1 style = "color: red">OOPs !!! Home page can't be loaded</h1>
            <p>please try again later</p>`);
      }


      res.write("Hello, it is http module.");
      res.end(); //this is used to send response to the client.

      // This response can be anything like html,xml,text,images and more. According to response "content-type" should be informed.
})

// When you call the http.createServer() method, you are creating a new HTTP server instance that will listen for incoming requests on a specified port. The createServer() method takes a single argument, which is a callback function that will be executed every time an incoming request is received by the server.

// The callback function that you pass to the createServer() method will receive two arguments: a request object and a response object. The request object contains information about the incoming request, such as the HTTP method, headers, and URL. The response object contains methods for sending a response back to the client, such as writeHead(), write(), and end().
// request and response object have some methods.

// When you are running this program, go to browser and type: localhost:5000, (you will get this one). 5000 is the port number.

// On Windows, you can use the netstat command to display active network connections. For example, to display all TCP connections and their associated processes, you can run the command netstat -ano.

// When run this program and sfter that when you run the netstat -ano command, you will get the list of connections that you devixes have over the network. Out of thosse, you will see:

//  TCP    0.0.0.0:5000           0.0.0.0:0              LISTENING       17984 this one also. It is that one which you are listening on 5000 port number.

// The output you provided from the netstat command shows that there is a TCP network connection listening on port 5000 on all network interfaces (0.0.0.0:5000). The LISTENING state indicates that the server is actively waiting for incoming connections.

// The second 0.0.0.0:0 entry in the output indicates that there is no specific remote address associated with the connection. The 0.0.0.0 IP address means that the server is listening on all available network interfaces, and the 0 port number means that there is no specific remote port associated with the connection.

// The 17984 value in the last column is the process ID (PID) of the process that has established the network connection. This PID can be used to identify the process that is responsible for listening on port 5000. You can use the Task Manager or Process Explorer on Windows, or the ps command on Linux/Unix, to find more information about the process associated with the given PID.




server.listen(5000);


