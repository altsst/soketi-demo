import Pusher from "pusher-js"

export default new Pusher('68f0c85cd7de937a88bde', {
    cluster: 'eu', // typescript requires this, although soketi ignores this ?
    channelAuthorization: {
        transport: 'ajax',
        endpoint: `/api/pusher/auth`,
        headersProvider: () => ({
            authorization: `Bearer ${localStorage.getItem('access_token')}`
        })
    },
    disableStats: true,
    wsHost: '127.0.0.1',
    forceTLS: true,
    enabledTransports: ['ws', 'wss']
})