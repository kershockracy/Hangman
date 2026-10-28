## How is Hangman played IRL?

1. Draw starting point
2. Layout Letters
3. Draw dashes -> one dash for each letter in the word
    a. For loop?
4. Guess Time
    a. Give an input -> Letter (Button?) (Guess finction?) (after every guess updateScreen()?)
    b. Check if letter is in string
        a. If in string, replace dash with letter (If statement?)
        b. if not in string, draw the next step  (If statement?)
        c. No matter, keep tarck of guesses user did
            a. dont let same guess more than once
5. Game Ends
    a. If they guess teh whole word -> game ends -> ypou win
    b. If the full body drawn, game ends, you lose