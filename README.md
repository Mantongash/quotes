# Lite Quotes

---

Lite Quotes is a web app where anybody can upload their quotes. Other users can then upvote or downvote them. You can also delete quotes.

---
![alt text](src/assets/quotes.png)

## Technologies Used

- HTML & CSS (Bootstrap)
- FontAwesome Icons
- Angular

##### Requirements

- Angular CLI
- Node JS
- Transcript Compiler
- Modern browser

##### Setup Instructions and Installation

- Install Node JS first 
- Install angular CLI using `npm install -g @angular/cli`
- Install typescript compiler using `npm install -g typescript`
- Clone this repo to a location in your file system. `https://github.com/Mantongash/quotes.git`
- Open terminal command line then navigate to the root folder of the application. `cd quotes`
- Open the terminal and run `ng serve -o` to open index.html in your browser.


## Behaviour Driven Development

1. Displays Form For Entering a users name, a quote and the author of the quote.
   - INPUT: "User's Name"
   - INPUT: "A Quote"
   -  INPUT: "Quote Author"
   - OUTPUT: "Displays User's Akan Name According to Submitted Date and Gender"
2. Displays an Error Message if Date Input Left Blank
   - INPUT: ""
   - OUTPUT: "Displays Error Message"
3. Displays an Error Message if Gender Not Chosen
   - INPUT: "" 
   - OUTPUT: "Display an Error Message" 
4. Clears Form and Reset the Message on Click
   - INPUT: "Click Reset Button" 
   - OUTPUT: "Clears and Resets the Form"

## Development

Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:
- Fork the repo
- Create a new branch (git checkout -b improve-feature)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (git commit -am 'Improve feature')
- Push to the branch (git push origin improve-feature)
- Create a Pull Request


## Known Bugs

If you find a bug (the website couldn't handle the query and or gave undesired results), kindly open an issue here by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue here. Please include sample queries and their corresponding results.


##### Link to Live Site : [https://yomzsamora.github.io/Akan-Names/](https://yomzsamora.github.io/Akan-Names/)

### License

*MIT*
Copyright (c) 2019 **Yommie Samora**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
