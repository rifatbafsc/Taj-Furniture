import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>Q1: Difference between javascript and nodejs?</h1>
            <p>Answer: JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use. </p>

            <h1>Q2: When should you use nodejs and when should you use mongodb?</h1>
            <p>Answer: There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database.</p>

            <h1>Q3: Differences between sql and nosql databases?</h1>
            <p>Answer: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>

            <h1>Q4: What is the purpose of jwt and how does it work?</h1>
            <p>Answer: JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
        </div>
    );
};

export default Blogs;