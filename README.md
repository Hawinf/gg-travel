# Notepaths — Next.js travel website

A multilingual travel website for Bali and Bandung, structured so additional destinations and tours can be added through `lib/data.ts`.

## Features
- Next.js App Router + TypeScript
- English (`/en`), Indonesian (`/id`), Russian (`/ru`), and Simplified Chinese (`/zh`)
- Destinations directory and destination-specific tour listings
- Tour detail pages with WhatsApp enquiry links
- Blog listing, article detail pages, and related-article recommendations
- Contact form API that emails `hello@notepaths.com` through Resend
- Responsive layouts

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Configure contact email

The contact form sends submissions to **hello@notepaths.com** through [Resend](https://resend.com/). Create a Resend account, verify a sending domain/address, then set these values in `.env.local`:

```env
RESEND_API_KEY=re_your_key
RESEND_FROM_EMAIL=Notepaths <hello@notepaths.com>
```

The `RESEND_FROM_EMAIL` must be a sender verified in your Resend account. The recipient is fixed to `hello@notepaths.com` in `app/api/contact/route.ts`. Do not expose the API key in a `NEXT_PUBLIC_` variable.

WhatsApp enquiries are configured to **+62 822-2123-3898**. To change it later, update `NEXT_PUBLIC_WHATSAPP_NUMBER`.

## Add a destination or tour

Edit `lib/data.ts`. Add a destination object to `destinations`, then add tour objects to `tours` using the destination's `slug` in the `destination` field. Destination pages automatically list their matching tours.

## Add blog posts

Add a post object to `posts` in `lib/data.ts`. Each post has a unique `slug`, `title`, `excerpt`, `date`, `category`, `image`, and `content`. The detail page automatically displays other published posts as related reading. For Indonesian, Russian, and Chinese translations, add the translated fields for the post in `lib/localized-content.ts`.

## Images and licensing

Demo travel photography uses image URLs hosted by Unsplash. Unsplash images are free to use for commercial and non-commercial purposes under the Unsplash License, subject to its restrictions; this is not a blanket waiver of all rights in recognizable people, trademarks, or third-party artwork. Review the license and the specific image before publishing: https://unsplash.com/license. Replace demo images with your own licensed photography where possible.

## Production build

```bash
npm run lint
npm run build
npm start
```
