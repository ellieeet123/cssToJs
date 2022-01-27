# cssToJs
Small JavaScript library that allows you to easily change an element's style

## Usage:
Start by including the cssToJs function somewhere 
in your website's files.
Then you can call it like this:
~~~js
cssToJs(`
    color: #f00;
    background: #333
    font-family: monospace;
    border-style: solid;
    border-radius: 5px;
`, document.getElementById('randomElement'));
~~~
This will take an element with id `randomElement`,
and apply all of the properties that you specified 
in the first argument. 
Currently I haven't added any sort of css 
validating, so if your css isn't correct then it will
probably malfunction in some way. I might add 
validation in the future, I'm not too sure yet.

## Other random stuff:

Yes, this has probably been done before. 
But I mostly just made this for practice,
and made it public just incase it would 
help anyone :)

## Licence
mit
