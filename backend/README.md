This is the backend that I have built for memory retireval, both 
backends have the exact same API. The tfidf uses TF IDF to get relevent
memories, while the ML_vector uses a pretrained neural network that was 
developed by Google. Both have exactly the same API, so no one is harder
for the frontend to use. There might be more dependency issues with the 
ML_vector

------------------------------------------------------------------------
Postman example
Request:

    Header:
    Content-Type: application/json

    Body (as a raw string):
    {
            "query" : "what makes life worth living", 
            "memories" : ["The game of life is a game of everlasting learning", "The unexamined life is not worth living", "Never stop learning"],
            "n" : 1
        }

response:
    {
    "memories": [
        "The unexamined life is not worth living"
    ]
}

------------------------------------------------------------------------
PARAMS:
query: the query string, likely the question from the frontend
memories: the list of memories that we want to extract a subset from
n: the number of memories you want in the subset

