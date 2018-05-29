const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');
    // db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID('5b06d52ab3a00fdd42c48129')
    // },{
    //     $set:{
    //         completed: false
    //     }
    // },{
    //     returnOrigional: false
    // }). then ((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b0d6878c761ff30d8df8a5f')
    },{
            $set: {
                name: 'Jay'
            },
            $inc: {
                age: 1
            }
    },{
        returnOrigional: false
    }).then((result) => {
        console.log(result);
    });
    //db.close();
});