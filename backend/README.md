This is the code for the backend


How to talk with ChatGPT 
1. cd backend
2. cd into one of the backends (any of the 2 directories)
3. python3 manage.py runserver 0.0.0.0:3001
4. put localhost:3001/API/fetchmemories into postman if you want memories, localhost:3001/API/getCompleationForCharacter for conversations
5. create a new header of type "Content-Type" with value "application/json"
6. Then go into body and put in what you want to send 
