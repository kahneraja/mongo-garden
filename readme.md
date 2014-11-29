# Exploring mongoDB

## Tools

- writing html with jade.
- nodejs and express-generator.
- cloud based hosting using mongolab, or just faffing around on localhost :)
- to view the data i'm using the robomongo tool.
- text editor: atom by github.
- postman is a great chrome extension that makes it easy to test RESTful api services.

## Setup

- install nodejs.
- generate boilerplate express app.
- setup swig templating engine.
- setup mongodb database.
- ...

## How would you go about moving from a relational database model schema to a "nosql" mongoose schema?

RDBMS schemas lead us down the path of normalisation. THis can involve creating endless complex table structures.

With NoSQL this can all be done more easily, with a single table.

This means we can leave our decisions to structure till later.

We work with trees of data rather than flat wide normalised structures.

NoSQL deals with structured "documents". Typically, JSON.

Using nested schema (sub document) definitions helps a lot with complex NoSQL data modeling.

## Documents?

Documents in a NoSQL database are basically records.

MongoDB documents are basically the "records". The file.

ORM. ODM. Object Relational Mapping. Object Document Modelling. They are quite different in practice.

Schema > Model > Document.

A Document in an instance of a Model.
