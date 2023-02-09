import Pusher from 'pusher'

const pusher = new Pusher({
    host: '127.0.0.1',
    useTLS: true,
    appId: '15491912',
    key: '68f0c85cd7de937a88bde',
    secret: 'd913796cec657059198e'
})

export default pusher