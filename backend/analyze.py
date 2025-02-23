import sys
import json
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

nltk.download('punkt')
nltk.download('stopwords')
nltk.download('punkt_tab')

categories = {
    "conspiracy": ["hoax", "cover-up", "fake", "lies", "deep state", "new world order"],
    "clickbait": ["shocking", "you won’t believe", "this will change your life", "amazing", "secret"]
}

def analyze_headline(headline):
    words = word_tokenize(headline.lower())
    filtered_words = [word for word in words if word not in stopwords.words("english")]

    conspiracy_score = 0
    highlighted_words = []
    category = "legitimate"

    for key, value in categories.items():
        matches = [word for word in filtered_words if word in value]
        if matches:
            category = key
            conspiracy_score = min(len(matches) * 20, 100)
            highlighted_words = matches
            break

    return {"category": category, "conspiracyScore": conspiracy_score, "highlightedWords": highlighted_words}

if __name__ == "__main__":
    headline = sys.argv[1]
    result = analyze_headline(headline)
    print(json.dumps(result))
