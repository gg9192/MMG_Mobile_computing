import yake
import numpy

stop_words = ['call', 'upon', 'still', 'nevertheless', 'down', 'every', 'forty', '‘re', 'always', 'whole', 'side', "n't", 'now', 'however', 'an', 'show', 'least', 'give', 'below', 'did', 'sometimes', 'which', "'s", 'nowhere', 'per', 'hereupon', 'yours', 'she', 'moreover', 'eight', 'somewhere', 'within', 'whereby', 'few', 'has', 'so', 'have', 'for', 'noone', 'top', 'were', 'those', 'thence', 'eleven', 'after', 'no', '’ll', 'others', 'ourselves', 'themselves', 'though', 'that', 'nor', 'just', '’s', 'before', 'had', 'toward', 'another', 'should', 'herself', 'and', 'these', 'such', 'elsewhere', 'further', 'next', 'indeed', 'bottom', 'anyone', 'his', 'each', 'then', 'both', 'became', 'third', 'whom', '‘ve', 'mine', 'take', 'many', 'anywhere', 'to', 'well', 'thereafter', 'besides', 'almost', 'front', 'fifteen', 'towards', 'none', 'be', 'herein', 'two', 'using', 'whatever', 'please', 'perhaps', 'full', 'ca', 'we', 'latterly', 'here', 'therefore', 'us', 'how', 'was', 'made', 'the', 'or', 'may', 'namely', 'anyway', 'amongst', 'used', 'ever', 'of', 'there', 'than', 'why', 'really', 'whither', 'in', 'only', 'wherein', 'last', 'under', 'own', 'therein', 'go', 'seems', '‘m', 'wherever', 'either', 'someone', 'up', 'doing', 'on', 'rather', 'ours', 'again', 'same', 'over', '‘s', 'latter', 'during', 'done', 're', 'put', 'm', 'much', 'neither', 'among', 'seemed', 'into', 'once', 'my', 'otherwise', 'part', 'everywhere', 'never', 'myself', 'must', 'will', 'am', 'can', 'else', 'although', 'as', 'beyond', 'are', 'too', 'becomes', 'does', 'a', 'everyone', 'but', 'some', 'regarding', '‘ll', 'against', 'throughout', 'yourselves', 'him', "'d", 'it', 'himself', 'whether', 'move', '’m', 'hereafter', 're', 'while', 'whoever', 'your', 'first', 'amount', 'twelve', 'serious', 'other', 'any', 'off', 'seeming', 'four', 'itself', 'nothing', 'beforehand', 'make', 'out', 'very', 'already', 'various', 'until', 'hers', 'they', 'not', 'them', 'where', 'would', 'since', 'everything', 'at', 'together', 'yet', 'more', 'six', 'back', 'with', 'thereupon', 'becoming', 'around', 'due', 'keep', 'somehow', 'n‘t', 'across', 'all', 'when', 'i', 'empty', 'nine', 'five', 'get', 'see', 'been', 'name', 'between', 'hence', 'ten', 'several', 'from', 'whereupon', 'through', 'hereby', 'alone', 'something', 'formerly', 'without', 'above', 'onto', 'except', 'enough', 'become', 'behind', '’d', 'its', 'most', 'n’t', 'might', 'whereas', 'anything', 'if', 'her', 'via', 'fifty', 'is', 'thereby', 'twenty', 'often', 'whereafter', 'their', 'also', 'anyhow', 'cannot', 'our', 'could', 'because', 'who', 'beside', 'by', 'whence', 'being', 'meanwhile', 'this', 'afterwards', 'whenever', 'mostly', 'what', 'one', 'nobody', 'seem', 'less', 'do', '‘d', 'say', 'thus', 'unless', 'along', 'yourself', 'former', 'thru', 'he', 'hundred', 'three', 'sixty', 'me', 'sometime', 'whose', 'you', 'quite', 'about', 'even']

def getMemorySubset(query:str, memories:list, n:int) -> list:
    """
    Given a query string, a list of memorys, and a number n,
    fetch the n most relavent memories
    """
    # the n=1 on the next line tells yake that we only want 1 word in each n-gram
    extractor = yake.KeywordExtractor(stopwords=stop_words, n=1)
    queryWords = extractor.extract_keywords(query)
    queryVector = vectorizeQuery(queryWords, memories)
    vectors = vectorize(memories, queryWords)
    res = []
    for i in range(0, len(memories)):
        cossim = getCosineSimilarity(queryVector, vectors[i])
        res.append((cossim, memories[i]))
    res = sorted(res, key=lambda x: x[0])
    return res[-n:]

def vectorizeQuery(queryWords: list, memories: list) -> list:
    """given the query words returned from yake, vectorize it"""
    queryWords2 = []
    for tup in queryWords:
        queryWords2.append(tup[0])
    m = {}
    # count the words
    for word in queryWords2:
        m[word] = m.get(word,0) + 1
    # normalize it
    for word in m:
        m[word] = m[word] / len(queryWords2)
    idf = getIDF(memories)
    res = []
    for word in m:
        res.append(m[word] * idf.get(word, 1.0))
    return res
    
def getCosineSimilarity(vector1: list, vector2: list):
    """given 2 vectors as lists, calculate the cosine similarity"""
    dot = 0
    if len(vector1) != len(vector2):
        raise Exception("vector lengths are different")
    for i in range(0, len(vector1)):
        dot += vector1[i] * vector2[i]
    len1 = 0
    for i in vector1:
        len1 += i ** 2
    len1 = numpy.power(len1, 0.5)
    len2 = 0
    for i in vector2:
        len2 += i ** 2
    len2 = numpy.power(len2, 0.5)

    return (dot/(len1 * len2))

def vectorize(memories: list, queryWords: tuple) -> list:
    """given the list of memeories, and the list of querywords extracted by yake, 
    return a list where each element is a n dimensional vector (n is number of words
    in the querry) 
    """
    res = []
    idf = getIDF(memories)
    for mem in memories:
        arr = []
        tf = getNormalizedTFMap(mem)
        for word in queryWords:
            val = tf.get(word[0], 0) * idf.get(word[0], 1.0)
            arr.append(val)
            # print(val, word[0])
        res.append(arr)
    return res



def getIDF(memories):
    """
    given the list of memories, return a map that maps the word to the idf value
    """
    s = set()
    mapp = {}
    for mem in memories:
        words = mem.split()
        for word in words:
            s.add(word.lower())
    # get idf
    for word in s:
        total = 0
        for mem in memories:
            if word in mem.lower().split():
                total += 1
        if total > 0:
            mapp[word] = 1.0 + numpy.log(float(len(memories)) / total)
        else:
            mapp[word] = 1.0
    return mapp

def getNormalizedTFMap(string: str) -> map:
    """
    given a string, return the normalised term frequency map
    """
    l = string.split(" ")
    mapp = {}
    for word in l:
        mapp[word] = mapp.get(word, 0) + 1

    # normalize it
    for word in mapp:
        mapp[word] = mapp[word] / len(l)
    return mapp