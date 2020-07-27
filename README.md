# Reading List

![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

This full-stack application is a reading list page where user's can add book titles, mark them as read, and delete them. I programmed the Express.js server, hosted on Heroku and run on Node.js, to respond appropriately to API and HTML requests, using Express-Handlebars to generate the HTML and the MySQL NPM package to interact with the database. I also designed and implemented the frontend.

## Table of Contents

* [Installation](#installation)

* [Demonstration](#demonstration)

* [Code Explanation](#code-explanation)

* [Technologies Used](#technologies-used)

* [Deployed Link](#deployed-link)

* [License](#license)

* [Acknowledgements](#acknowledgements)

* [Questions](#questions)

## Installation

To run a local version of the server, clone the repository, and then run the following command to install dependencies:

```
npm install
```

Given that you have NPM and Node.js installed, you can now run the server using the following command:

```
node server.js
```

You can then view the locally hosted website in a web browser by visiting [localhost:8080](http://localhost:8080/).

## Demonstration

![Demonstration of application](demo.gif)

## Code Explanation

One emphasis of this project was organizing code according to the Model-Viewer-Controller paradigm. For example, the `markRead` method in the books **model** changes a book's `was_read` value to `true` using an object-relational mapping function defined in `orm.js`.

```javascript
const books = {
  // ...
  markRead: function(id, cb) {
    // updates was_read to true for a book
    orm.updateOne("books", {id: id}, {was_read: true}, cb);
  },
  // ...
};
```

The **controller** is responsible for using the books model to mark a book as read when it received an API request to do so. This is accomplished with the following code:

```javascript
// marking a book as read
router.put("/api/books/:id", (req, res) => {
  books.markRead(req.params.id, result => {
    if (result.changedRows === 0) {
      // No rows were affected, so there must have been an error.
      return res.status(500).end();
    } else {
      // Rows were affected. Success! Tell to reload home page
      res.status(200).end();
    }
  });
});
```

The **viewer** then re-renders the page with the book shown under the "Books I've Read" list so that the user knows that the book's status was successfully updated. Handlebars logic is used to render each book list with the appropriate books. The code snippet below renders the list of read books by looping through the `books` array, checking the `was_read` attribute, and only rendering that book is `was_read` is `true`.

```handlebars
<ul>
    {{#each books}}
        {{#if was_read}}
            <li>{{title}} <button class="delete-button" data-id={{id}}>delete</button></li>
        {{/if}}
    {{/each}}
</ul>
```

## Technologies Used

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [SQL](https://developer.mozilla.org/en-US/docs/Glossary/SQL)
* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [Heroku](https://www.heroku.com/)
* [MySQL](https://www.mysql.com/)
* [JawsDB](https://elements.heroku.com/addons/jawsdb)
* [Google Fonts](https://fonts.google.com/)
* [jQuery](https://jquery.com/)
* [Node.js](https://nodejs.org/en/)
* [Node Package Manager (NPM)](https://www.npmjs.com/)
* [Express.js](https://expressjs.com/)
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
* [MySQL (NPM module)](https://www.npmjs.com/package/mysql)


## Deployed Link

* [See Live Site](https://reading-list-sc.herokuapp.com/)

## License

This project is licensed under the MIT license.

## Acknowledgements

* This application was created to complete an assignment at the UC Berkeley Coding Bootcamp.
* The [background image](https://freesvg.org/wood-texture-vector-drawing) was downloaded from [FreeSVG.org](https://freesvg.org/).
* This application used Eric Meyer's [reset CSS file](https://meyerweb.com/eric/tools/css/reset/) to clear the browser's default CSS styles.

## Questions

If you have any questions about the repo, open an issue or contact me directly at siechap@gmail.com. You can find more of my work at [SierraChapman](https://github.com/SierraChapman/).

