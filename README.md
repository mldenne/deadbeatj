# Deadbeat Jacques

## Requirements

### Explorer Mode

* Complete the Explorer Mode from Notemeister API from the Jacques assignment - completed
* On load, app should display all the notes and a form to add a new note. The primary heading on the page should be "Notemeister 5000" - completed, notes added in with prepend so last note created shows first
* Tag names should be links that when clicked, load the notes with that tag and change the primary heading to "Notemeister 5000: {{tag name}}" - tags are separate links, am able to get data to console log, but cannot load onto page
* Posting a new note should add it to the top of the list and clear out the form so you can post another - having issues with backend loading in title and body, error messages "can't be blank" (this is a validation problem)
* If I append the id of a note to the url (as: #:id), a Bootstrap modal should display with just that specific note.


GET /api/notes

``` json
{
  "notes" : [
    {
      "title" : "My awesome post",
      "body" : "My awesome body of a post",
      "created_at" : "<timestamp>",
      "updated_at" : "<timestamp>",
      "tags" : [
        { "name" : "awesome" },
        { "name" : "funny" },
        { "name" : "spiffy" }
      ]
    },
    {
      "title" : "My awesome second post",
      "body" : "My awesome body of a second post",
      "created_at" : "<timestamp>",
      "updated_at" : "<timestamp>",
      "tags" : [
        { "name" : "not_so_awesome" },
        { "name" : "not_funny" },
        { "name" : "not_at_all_spiffy" }
      ]
    }
  ]
}
```

POST /api/notes -d {"title" : "My created post", "body" : "My created body", "tags" : "api, machine, first"}

``` json
{
  "note" : {
    "title" : "My created post",
    "body" : "My created body",
    "created_at" : "<timestamp>",
    "updated_at" : "<timestamp>",
    "tags" : [
      { "name" : "api" },
      { "name" : "machine" },
      { "name" : "first" }
    ]
  }
}
```

If I try to create a note without a title or body, I should get back a JSON-formatted error message and a status code of 400

GET /api/notes/tag/funny

``` json
{
  "tag" : {
    "name" : "funny"
  },
  "notes" : [
    {
      "title" : "My awesome post",
      "body" : "My awesome body of a post",
      "created_at" : "<timestamp>",
      "updated_at" : "<timestamp>",
      "tags" : [
        { "name" : "awesome" },
        { "name" : "funny" },
        { "name" : "spiffy" }
      ]
    },
    {
      "title" : "My awesome second post",
      "body" : "My awesome body of a second post",
      "created_at" : "<timestamp>",
      "updated_at" : "<timestamp>",
      "tags" : [
        { "name" : "not_so_awesome" },
        { "name" : "funny" },
        { "name" : "not_at_all_spiffy" }
      ]
    }
  ]
}
```
