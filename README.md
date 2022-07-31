Assignment to calculate health risks of users with the details of their BMI

Used json stream and event stream to read large amount of json data so that same code can handle large json file of more than 1 lac user


We can use express to convert this into an GET api to return data back to UI about the health of users from our db

Another extension that can be made to this is to store this data in mongodb(for large amount of data) or redis cluster for (fast retreival on runtime)

run the project with command `node getData.js`