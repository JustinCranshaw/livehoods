
# Homepage for livehoods.org

Install
npm install
Cmd
If something goes wrong, delete the node_modules folder and run npm install again.

Now let’s make sure you also have Gulp installed globally:

$ npm install gulp -g
Cmd
Start server
gulp serve
Cmd
You should see a live browser at http://localhost:3000/.

Development
Override Bootstrap’s variables and create your custom styles

src/scss/style.scss

This will be automatically compiled to src/css/styles.css.

Add custom scripts

src/js/index.js

Partials

You can add partials in src/partials/.

Insert partial : <partial src="header.html"></partial>.

Examples are already added in this this project for header & footer.

Production
gulp
Cmd
If you want HTML, CSS minification & image optimization:

npm run prod
Cmd
Docs folder is the destination. You can now go docs/index.html and check the output.

