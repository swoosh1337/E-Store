import { CheckCircleIcon } from "@heroicons/react/24/solid"
import axios from "axios"
import useSWR from "swr"
import { useRouter } from "next/router"
import Link from "next/link"
import { useShoppingCart } from "use-shopping-cart"
import { useEffect } from "react"

export default function Success() {
    const router = useRouter()
    const { clearCart } = useShoppingCart()
    const sessionId = router.query.session_id;
    const { data, error } = useSWR(() => sessionId ? `/api/checkout-sessions/${sessionId}`: 
    null, url => 
    axios.get(url).then(res => res.data),
    {
        onSuccess(){
            clearCart()
        }
     }
);
     
    const email = data?.customer_details?.email;
    return (
        <div className="container xl:max-w-screen-xl mx-auto py-12 px-6 text-center">
            {error ? (
                <div className="p-2 rounded-md bg-rose-100 text-rose-500 max-w-md mx-auto">
                <p className="text-lg font-semibold">Sorry, something went wrong!</p>
                </div>

            ) : !data ? (
                <div className="p-2 rounded-md bg-rose-100 text-rose-500 max-w-md mx-auto">
                <p className="text-lg font-semibold">Loading...</p>

                </div>
            ) : (
                <div className="py-4 px-8 space-y-4 rounded-md max-wlg mx-auto">
                    <CheckCircleIcon className="w-24 h-24 text-green-500 mx-auto flesh-shrink-0" />
                    <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
                     Thanks for your order!
                    </h2>
                    <p className="text-lg">
                        Your order has been placed and is being processed. Check your ({email} ) for confirmation, shortly.
                    </p>
                </div>
            )}
        </div>
    )

}