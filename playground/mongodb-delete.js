const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');

    //delete many
    // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    //delete one
    db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result) => {
        console.log(JSON.stringify(result));
    });

    //find one and delete

    //db.close();
});