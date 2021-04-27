var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();

// console.log(vapidKeys);

let vapidKeys = {
    publicKey: 'BPNsFueO_Q2kH4-GAunYBDFo2wbRq0yF22I5VVPvLLd1hVOr5cyribW6QLfjlu7h8TiG91wEAjzN9MDI9qkhFsk',
    privateKey: 'BGuSYq0Odm67K2TD4FAAGjErAbTfos1ng00ITrb2mjY'
  };

push.setVapidDetails('mosesarulvin@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'Test Message');
