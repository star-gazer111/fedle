const USER = 'Sh0g0-1758'
const EMAIL = 'shouryagoel10000@gmail.com'
const github = require('octokat')({ token: 'GITHUB_TOKEN' })

return github.fromUrl(`https://api.github.com/users/${USER}/events/public`)
    .fetch()
    .then(events => {
        console.log(events.items[0].payload.commits[0].sha);
    })
