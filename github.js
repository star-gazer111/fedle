const USER = 'Sh0g0-1758'
const EMAIL = 'shouryagoel10000@gmail.com'
// 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
const github = require('octokat')({ token: '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' })

return github.fromUrl(`https://api.github.com/users/${USER}/events/public`)
    .fetch()
    .then(events => {
        console.log(events.items[0].payload.commits[0].sha);
    })
// client secret == 399204fe394fa7a74412b49fa1ffadb103201bb6    
// client id == 340a1cea603c168283e3
// https://github.com/login/oauth/authorize?client_id=340a1cea603c168283e3&scope=public_repo