import { stripe } from "src/utils/stripe"

export default async function handler(req, res) {
    if(req.method !== "GET") {
        const { id } = req.query.id;

        try {
            if(!id.startsWith("cs_")) {
                throw Error("Incorrect checkout session id")
            }
            const checkoutsession = await stripe.checkout.sessions.retrieve(id);
            res.status(200).json(checkoutsession);
        } catch (error) {
            console.error(error)
            res.status(500).json({ statusCode: 500, message: error.message })
        }
    }
    else {
        res.setHeader("Allow", "GET");
        res.status(405).end("Method Not Allowed");
    }
}

