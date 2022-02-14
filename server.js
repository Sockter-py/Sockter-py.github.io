navigator.tcpPermission.requestPermission({remoteAddress:"127.0.0.1", remotePort:6789}).then(
  () => {
    // Permission was granted
    // Create a new TCP client socket and connect to remote host
    var mySocket = new TCPSocket("127.0.0.1", 6789);

    // Send data to server
    mySocket.writeable.write("Hello World").then(
        () => {

            // Data sent sucessfully, wait for response
            alert("Data has been sent to server");
            mySocket.readable.getReader().read().then(
                ({ value, done }) => {
                    if (!done) {
                        // Response received, log it:
                        alert("Data received from server:" + value);
                    }

                    // Close the TCP connection
                    mySocket.close();
                }
            );
        },
        e => console.error("Sending error: ", e)
    );
  }
);
