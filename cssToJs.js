/*
    =====================================================
    |                     CSSTOJS                       |
    =====================================================

    (c) Ellieeet123 2022

    Small (321 characters when minified) Javascript 
    library that allows you to easily change an 
    element's style.
    
    =====================================================
    |                   HOW TO USE                      |
    =====================================================

    Start by including the cssToJs function somewhere 
    in your website's files.
    Then you can call it like this:

    -----------------------------------------------------
        cssToJs(`
            color: #f00;
            background: #333
            font-family: monospace;
            border-style: solid;
            border-radius: 5px;
        `, document.getElementById('randomElement'));
    -----------------------------------------------------

    This will take an element with id `randomElement`,
    and apply all of the properties that you specified 
    in the first argument. 

    Currently I haven't added any sort of css 
    validating, so if your css isn't correct then it will
    probably malfunction in some way. I might add 
    validation in the future, I'm not too sure yet.
    
    =====================================================
    |                    OTHER STUFF:                   |
    =====================================================
    
    Yes, this has probably been done before. 
    But I mostly just made this for practice,
    and made it public just incase it would 
    help anyone :)

    If you are looking for the minified version, visit

    https://github.com/ellieeet123/cssToJs/blob/main/
    cssToJs.min.js

    =====================================================
    |                      LICENCE                      |
    =====================================================

    MIT License

    Copyright (c) 2022 Ellieeet123

    Permission is hereby granted, free of charge, to any 
    person obtaining a copy of this software and 
    associated documentation files (the "Software"), 
    to deal in the Software without restriction, 
    including without limitation the rights to use, copy, 
    modify, merge, publish, distribute, sublicense, 
    and/or sell copies of the Software, and to permit 
    persons to whom the Software is furnished to do so, 
    subject to the following conditions:

    The above copyright notice and this permission 
    notice shall be included in all copies or substantial 
    portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY 
    OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
    LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS 
    BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
    ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
    SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
    SOFTWARE.
*/

function cssToJs(input, element) {
                
    // parse the input into individual css rules.
    let statements = input.split(';');
    for (let i = 0; i < statements.length; i++) {
        // remove whitespaces
        statements[i] = statements[i].replace(/\s/g, '');
        // remove any blank things in the list
        // usually a blank item will appear when 
        // the input ends with a ;
        if (statements[i] === '') {
            statements.splice(i, 1);
        }
    }
    
    for (let i = 0; i < statements.length; i++) {
        let statement = statements[i].split(':');
        // convert the rule to camel case. 
        // example: 
        // background-image gets converted into backgroundImage
        let words = statement[0].split('-');
        // if the rule has only one word, it can't
        // be converted into camelCase so this whole thing is skipped
        if (words.length > 1) {
            for (let i = 1; i < words.length; i++) {
                words[i] = (
                    // take the first letter, and convert to uppercase
                    words[i].charAt(0).toUpperCase() 
                    // add the rest of the word to it
                    + words[i].slice(1)
                );
            }
            var rule = words.join('');
        }
        else {
            var rule = statement[0];
        }
        // set the element's style!
        // statement[1] is the style value. 
        element.style[rule] = statement[1];
    }
}

