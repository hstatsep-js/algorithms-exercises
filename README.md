# Algorithms Exercises

## OPTION 1: External JS
### Use this method if you want to have **one** `index.html` that links to external JS.
#### The advantage here is that the JS is in its own file, not buried in an HTML file. The disadvantage is that you have to change where your `index.html` links to when you want to test a new exercise.
* Make new `.js` files for each exercise, i.e. `touch squirrel-play.js`
* In your `index.html` change the `<script src="script.js">` to use whichever `js` file you want to test out. Change this each time you want to test out a new exercise.

##### Alternatively, you could write in **one** `script.js`, and comment out a function call when you don't want to run it.

---

## OPTION 2: Embedded JS
### Use this method if you want to make each program a standalone file that has embedded JS.
#### The advantage here is that you run the file you want to test. The disadvantage is that the JS is buried in the HTML.
* Do not ever edit your `index.html` file. This will be the template.
* Each time you want to try a new exercise, make a copy of `index.html` and give it a new name.
  * Example: `cp index.html squirrel-play.html`

##### Alternatively, you could write in **one** `index.html`, and comment out a function call when you don't want to run it.