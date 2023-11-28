This is the new API that our backend will follow. This was discussed durring our meeting

URL: localhost:3001/API/getCompleationForCharacter
Post request
example body
{
            "userQuestion" : "what makes life worth living", (the question from the user)
            "memories" : ["The game of life is a game of everlasting learning", "The unexamined life is not worth living", "Never stop learning"], (the memories that are associated with the given character)
            "character" : "Butler   " (the character *needs to follow english conventions*)
        }
RETURNS:
{
"response": xxxxxxxxxxx, (the response to display to the user)
memories: [xxx,xxx,xxx] (the list of memeories we derive)
}
-------------------------------------------------------
How to talk with ChatGPT 
1. cd backend
2. cd into one of the backends (any of the 2 directories)
3. python3 manage.py runserver 0.0.0.0:3001
4. put localhost:3001/API/fetchmemories into postman if you want memories, localhost:3001/API/getCompleationForCharacter for conversations
5. create a new header of type "Content-Type" with value "application/json"
6. Then go into body and put in what you want to send 