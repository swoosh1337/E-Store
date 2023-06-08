require('dotenv').config({ path: '.env.local' });
import Stripe from 'stripe';

export const stripe = Stripe(process.env.STRIPE_SECRET_KEY);