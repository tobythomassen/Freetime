const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

admin.firestore().settings({ timestampsInSnapshots: true });


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.newUser = functions.https.onRequest(async (request, response) => {
    if (request.method != 'POST') {
        await response.status(405).send('Method Not Allowed');
        return;
    }
    var data = request.body;

    var query = await admin.firestore().collection('users').where('displayName', '==', data.displayName).get();
    console.log(!query.empty);
    console.log(query.docs[0].data());
    
    var user = await admin.auth().createUser({
        displayName: data.displayName,
        password: data.password,
        email: data.email
    }).catch(error =>{
        console.log("I screwed")
    });
    await admin.firestore().collection("users").doc(user.uid).create({
        "displayName": data.displayName,
        "name": data.name,
        "points": 0,
        "teacher": false
    });
    await response.status(200).send('Success');
});

