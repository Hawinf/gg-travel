# Adding blog posts manually

For this starter version, blog posts are stored in `lib/data.ts` in the `posts` array. Add a new object with a unique `slug`, `title`, `excerpt`, ISO date (`YYYY-MM-DD`), `category`, an image URL, and `content` (separate paragraphs with `\n\n`). The post automatically appears on `/[locale]/blog` and gets a detail page at `/[locale]/blog/[slug]`.

For a non-technical editorial workflow, connect a CMS such as Sanity later. The current project intentionally keeps content local and easy to understand; it does not include an admin dashboard or hosted database.
