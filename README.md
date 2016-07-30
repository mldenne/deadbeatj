Deadbeat Jacques

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
