const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }), (err, result) => {
    //     if(err) {
    //         return console.log('unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined,2));
    // }

    db.collection('Users').insertOne({
        name: 'Dhruv',
        age:24,
        location: 'Ahmedabad'
    }, (err, result) => {
        if(err){
            return console.log('unable to insert user', err);
        }
        console.log(result.ops);
    })

    db.close();
});