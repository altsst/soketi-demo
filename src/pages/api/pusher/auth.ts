import { NextApiRequest, NextApiResponse } from "next"
import pusher from "../../../server/pusher"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { socket_id, channel_name } = req.body

    try {
        const channelAuthResponse = pusher.authorizeChannel(
            socket_id,
            channel_name,
            {
                user_id: "test_user_id",
                user_info: {
                    name: "test user name",
                    email: "test@user.mail"
                }
            }
        )

        return res.send(channelAuthResponse)
    } catch (err) {
        return res.json({ success: false, message: 'Unauthorized - catch' })
    }
    return res.json({ success: false, message: 'Unauthorized - fallback' })
}