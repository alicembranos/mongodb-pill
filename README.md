`#mongodb` `#database` `#nrdb` `#master-in-software-engineering`

# MongoDB Pill <!-- omit in toc -->

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
</p>

> The purpose of this project is to learn the basics of MongoDB for modeling, storing, retrieving and updating data.
>
> You will need to install the database engine and work locally.

## Index <!-- omit in toc -->

- [Requirements](#requirements)
- [Repository](#repository)
- [Technologies used](#technologies-used)
- [Project delivery](#project-delivery)
- [Resources](#resources)

## Requirements

- Install MongoDB Community version engine locally from [here](https://www.mongodb.com/try/download/community).
- Record your queries on a .js file.
- Document your process on the README.md.

## Repository

First of all you must fork this project into your GitHub account.

To create a fork on GitHub is as easy as clicking the “fork” button on the repository page.

<img src="https://docs.github.com/assets/images/help/repository/fork_button.jpg" alt="Fork on GitHub" width='450'>

### Installing 

Go to the official MongoDB website and download the Community version of the engine from [here](https://www.mongodb.com/try/download/community).

#### On Windows:
Execute the installer.

#### On UNIX / MacOS:
Extract the content of the tgz file and move it to a directory on your PATH system variable:

```sh
sudo cp /path/to/the/mongodb-directory/bin/* /usr/local/bin/
```

Check that the engine is properly installed with the following command on your teerminal

```sh
mongo --version

>> MongoDB shell version v5.0.0
```

Create a directory to store MongoDB Data
```sh
mkdir mongodb-data
```

Start the MongoDB server
```sh
mongod --dbpath mongodb-data
```

After some logs from the server, you should see a message like this:
```sh
{"t":{"$date":"2021-07-15T16:41:47.587+02:00"},"s":"I",  "c":"NETWORK",  "id":23016,   "ctx":"listener","msg":"Waiting for connections","attr":{"port":27017,"ssl":"off"}}
```

Start the database client on a diferent terminal
```sh
mongo
```

Create a new databse
```sh
use books
```

## Tasks
Execute MongoDB queries for the following operations

### Insert data
1. Insert at least 3 authors with the following fields
    - Name: String
    - Last name: String
    - Date of Birth: Date
    - Date of death: Date
    - Country: String

2. Insert at least 10 books with the following fields:
    - Title: String
    - Release Year: [Date]
    - Category: String
    - Authors (id, name, lastName): [{id, name, lastName}, … ]

### Update data
1. Add a date of death to one Author
2. Add a new release year to a book
3. Change the title of a book adding (“New Edition”)

### Get data
1. Select all books
2. Select all books for a given category
3. Select all books published before 2002
4. Select all books with more than one author
5. Select all authors
6. Select all death authors
7. Select all authors born before 1990
8. Select all authors from a given country

### DELETE DATA
1. Eliminate all the books for a given author
2. Eliminate all the death authors

## Technologies used

\* MongoDB

## Project delivery

To deliver this project you must follow the steps indicated in the document:

- [Submitting a solution](https://www.notion.so/Submitting-a-solution-524dab1a71dd4b96903f26385e24cdb6)

## Resources
- [Official MongoDB documentation](https://www.mongodb.com)
- [W3Schools MongoDB](https://www.w3schools.in/mongodb/query-operations)
- [MongoDB queries](https://docs.mongodb.com/manual/tutorial/query-documents/)
- [MongoDB University](https://university.mongodb.com/)
