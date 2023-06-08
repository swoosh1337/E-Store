require('dotenv').config({ path: '.env.local' });


const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const products = require('./products');

(async () => {
    for (const product of products) {
        const stripeProduct =  await stripe.products.create({
            name: product.name,
            default_price_data: {
                currency: product.currency,
                unit_amount_decimal: product.price,
            },
            images: [product.image],
        });
        console.log(`Product ${stripeProduct.name} created with ${stripeProduct.id} id`);
    }

})();

console.log(process.env.STRIPE_SECRET_KEY)
