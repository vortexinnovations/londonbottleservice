# Automated Blog Post Generator — London Bottle Service

## SAFETY CONSTRAINT — READ FIRST

You may ONLY modify these files:

1. `src/data/blog.ts` — add one new entry to the `blogPosts` array
2. `src/data/blogContent.tsx` — add one new entry to the `blogContent` record
3. `src/data/images.ts` — add one new entry to the `blogImages` record
4. `src/data/used-images.json` — update with the newly used image filename

You must NOT modify any other file. The sitemap, blog listing page, and blog post page are all auto-generated from these data files. No other files need changing.

---

## SITE IDENTITY

**Site:** londonbottleservice.com
**Repo:** vortexinnovations/londonbottleservice (branch: `master`)
**Framework:** Next.js 16 (App Router, TypeScript, SSG)
**Purpose:** Primary commercial VIP table booking site for London's high-end Mayfair nightclubs. This is the main transaction site in a multi-site nightlife portfolio.
**Tone:** Premium, knowledgeable, insider, direct. Like a well-connected friend who knows the London club scene inside out. British English. Never cheesy, spammy, or generic. Never make guaranteed-entry claims.
**WhatsApp number:** 447880662708
**WhatsApp CTA link:** `https://wa.me/447880662708`

### Open clubs we promote (use these slugs in `relatedClubs`):
- `cirque-le-soir` — Cirque Le Soir (circus-themed, Ganton Street, from £1,000)
- `tape-london` — Tape London (members club, Hanover Square, from £1,500)
- `cuckoo-club` — Cuckoo Club (Swallow Street, two floors, from £1,000)
- `maddox` — Maddox Club (restaurant-club hybrid, from £1,000)
- `tabu-london` — Tabu London (Japanese underground theme, from £1,000)
- `london-reign` — Reign London (showclub, Piccadilly, from £1,000)
- `selene-london` — Selene London (three rooms, bowling, from £1,000)
- `funky-buddha` — Funky Buddha (open format, from £1,000)
- `scotch-of-st-james` — Scotch of St James (exclusive, from £1,000)
- `dear-darling` — Dear Darling Mayfair (from £1,000)
- `beat-london` — Beat London (from £1,000)
- `the-box` — The Box (performance venue, Soho, from £1,500)
- `luna-club-london` — Luna Club London (from £1,000)

### Permanently closed clubs (do NOT include in relatedClubs):
- `libertine`
- `lio-london`

---

## STEP 1 — AUDIT EXISTING CONTENT

Before writing anything, read all existing blog post titles and slugs:

```bash
grep -E "slug:|title:" src/data/blog.ts | grep -v "string;" | grep -v "metaTitle" | head -60
```

Count existing posts:
```bash
grep -c "slug:" src/data/blog.ts
```

Read the last 3 entries to understand the most recent topics:
```bash
tail -200 src/data/blog.ts
```

You MUST:
- Never duplicate an existing topic or angle
- Never create a slug that already exists
- Avoid topics too close to recent posts (check the last 5)
- Focus on gaps in the existing coverage

---

## STEP 2 — CHOOSE TODAY'S TOPIC

Select ONE topic that is:
- Not already covered by an existing post
- Genuinely useful to someone considering booking a table in London
- Searchable (targets a real keyword people Google)
- Appropriate for a commercial booking site (not pure editorial fluff)
- In the correct tone (premium, insider, helpful)

### Categories (use EXACTLY these strings — case-sensitive):
- `"Pricing"` — cost breakdowns, budget guides, value comparisons
- `"Guides"` — how-to guides, comparisons, recommendations, nightlife knowledge
- `"Tips"` — practical advice, dress code, entry, etiquette, what to expect
- `"Events"` — birthdays, stag/hen, corporate, group celebrations, seasonal
- `"Club Guides"` — deep dives into specific venues or venue comparisons

### Topic ideas by category:

**Pricing:** bottle menu deep-dives, champagne vs spirits value, tipping etiquette, cost per head by venue, premium vs standard table costs, split-bill strategies, weeknight vs weekend value

**Guides:** new-to-Mayfair orientation, best clubs by music genre, which club for which occasion, London nightlife calendar, after-dinner club recommendations, couples night out, mixed group dynamics, club hopping routes, Mayfair area walking guide

**Tips:** table etiquette, how to impress at your table, dress code mistakes, photography policies, phone use etiquette, arriving late, leaving early, tipping your waitress, bringing your own cake, re-entry policies

**Events:** proposal nights, anniversary celebrations, work parties, Christmas parties, New Year's Eve, summer bank holidays, graduation celebrations, divorce parties, reunion nights, milestone birthdays (21st/30th/40th)

**Club Guides:** venue-specific deep-dives (music, crowd, best nights, worst nights), two-club comparison posts, "if you liked X try Y" posts, seasonal venue highlights

---

## STEP 3 — SELECT AN IMAGE FROM SUPABASE

### Fetch all available images:

The Supabase service key is stored in `.env` (gitignored) as `SUPABASE_SERVICE_KEY`. The bucket URL is `SUPABASE_BUCKET_URL`. Read these before running the fetch command.

```bash
node -e "
require('dotenv').config();
const https = require('https');
const url = process.env.SUPABASE_BUCKET_URL;
const options = {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + process.env.SUPABASE_SERVICE_KEY,
    'Content-Type': 'application/json',
  },
};
const req = https.request(url, options, (res) => {
  let body = '';
  res.on('data', (c) => body += c);
  res.on('end', () => {
    const files = JSON.parse(body);
    console.log(JSON.stringify(files.map(f => f.name)));
  });
});
req.write(JSON.stringify({ prefix: '', limit: 1000, offset: 0 }));
req.end();
"
```

**If `dotenv` is not installed**, read the `.env` file manually:
```bash
node -e "
const fs = require('fs');
const env = Object.fromEntries(fs.readFileSync('.env','utf8').trim().split('\n').map(l=>l.split('=')).map(([k,...v])=>[k,v.join('=')]));
const https = require('https');
const url = env.SUPABASE_BUCKET_URL;
const options = {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + env.SUPABASE_SERVICE_KEY,
    'Content-Type': 'application/json',
  },
};
const req = https.request(url, options, (res) => {
  let body = '';
  res.on('data', (c) => body += c);
  res.on('end', () => {
    const files = JSON.parse(body);
    console.log(JSON.stringify(files.map(f => f.name)));
  });
});
req.write(JSON.stringify({ prefix: '', limit: 1000, offset: 0 }));
req.end();
"
```

### Read the used-images tracker:
```bash
cat src/data/used-images.json
```

### Select an unused image:
1. Parse the full image list from Supabase
2. Parse `src/data/used-images.json` as an array of used filenames
3. Filter to only `.jpg` files NOT in the used list
4. If fewer than 5 unused images remain, reset: overwrite `used-images.json` with `[]`
5. From the unused images, pick one using this deterministic method:
   - Count existing blog posts (N)
   - Get today's date as YYYYMMDD number
   - Index = (date_number + N) % unused_count
   - Select the image at that index
6. The image path for the blog data is: `/gallery/images/FILENAME.jpg`
7. The alt text should be descriptive and relevant to the blog topic (e.g. "VIP bottle service celebration at a London Mayfair nightclub")

### Update used-images.json:
After selecting the image, add the filename to the JSON array in `src/data/used-images.json`.

---

## STEP 4 — GATHER VALID INTERNAL LINKS

### Static pages you can link to:
- `/` (homepage)
- `/book-a-table`
- `/bottle-service-guide`
- `/clubs-by-night`
- `/best-clubs-bottle-service-london`
- `/best-vip-tables-in-london`
- `/club-table-prices-london`
- `/guestlist-vs-table-booking-london`
- `/mayfair-table-booking-guide`
- `/blog`

### Club pages (use format `/clubs/SLUG`):
- `/clubs/cirque-le-soir`
- `/clubs/tape-london`
- `/clubs/cuckoo-club`
- `/clubs/maddox`
- `/clubs/tabu-london`
- `/clubs/london-reign`
- `/clubs/selene-london`
- `/clubs/funky-buddha`
- `/clubs/scotch-of-st-james`
- `/clubs/dear-darling`
- `/clubs/beat-london`
- `/clubs/the-box`
- `/clubs/luna-club-london`

### Booking pages (use format `/SLUG`):
- `/cirque-le-soir-table-booking`
- `/tape-london-table-booking`
- `/cuckoo-club-table-booking`
- `/maddox-club-table-booking`
- `/tabu-london-table-booking`
- `/reign-london-table-booking`
- `/selene-london-table-booking`
- `/funky-buddha-table-booking`
- `/scotch-of-st-james-table-booking`
- `/dear-darling-table-booking`
- `/beat-london-table-booking`
- `/the-box-london-table-booking`
- `/luna-club-london-table-booking`

### Get all existing blog post URLs:
```bash
grep 'slug:' src/data/blog.ts | grep -v 'string' | grep -v 'function' | sed 's/.*slug: "//; s/".*//' | while read s; do echo "/blog/$s"; done
```

**CRITICAL:** Only link to URLs that exist in the lists above or that you confirmed via the grep command. NEVER invent a URL. NEVER link to a page that does not exist.

### Internal link format in blogContent.tsx:
```tsx
<Link href="/clubs/cirque-le-soir" className="text-gold hover:underline">Cirque Le Soir</Link>
```

Always use the `Link` component from `next/link`. Always use `className="text-gold hover:underline"`. Use relative paths (no domain).

---

## STEP 5 — WRITE THE POST

You must modify exactly 3 files (plus used-images.json). Here is exactly what to add to each:

### FILE 1: `src/data/blog.ts`

**Where:** Add the new entry as the LAST item in the `blogPosts` array, BEFORE the closing `];` on line that ends the array.

**Format — copy this template exactly:**

```typescript
  {
    slug: "your-slug-here",
    title: "Your Full Title Here",
    metaTitle: "Your SEO Title | London Bottle Service",
    metaDescription:
      "Your meta description here. Maximum 155 characters. Must include primary keyword.",
    excerpt:
      "Your excerpt here. 1-2 sentences. Compelling summary that makes people want to click. Shown on blog listing cards.",
    publishedAt: "YYYY-MM-DD",
    updatedAt: "YYYY-MM-DD",
    category: "Guides",
    readingTime: "X min read",
    keywords: [
      "primary keyword",
      "secondary keyword 1",
      "secondary keyword 2",
      "secondary keyword 3",
      "secondary keyword 4",
    ],
    relatedClubs: ["club-slug-1", "club-slug-2", "club-slug-3"],
    faqs: [
      {
        question: "Question 1?",
        answer:
          "Answer 1. Detailed, helpful, specific.",
      },
      {
        question: "Question 2?",
        answer:
          "Answer 2. Detailed, helpful, specific.",
      },
      {
        question: "Question 3?",
        answer:
          "Answer 3. Detailed, helpful, specific.",
      },
    ],
  },
```

**Field rules:**
- `slug`: kebab-case, no trailing slash, unique, descriptive, keyword-rich. 3-8 words.
- `title`: 50-70 characters. Include primary keyword. Title case.
- `metaTitle`: Max 60 characters. Primary keyword near the start. End with `| London Bottle Service` if space allows.
- `metaDescription`: Max 155 characters. Include primary keyword. Compelling, specific.
- `excerpt`: 1-2 sentences. Shown on cards. Must be engaging and specific.
- `publishedAt`: Today's date in YYYY-MM-DD format.
- `updatedAt`: Same as publishedAt for new posts.
- `category`: One of EXACTLY: `"Pricing"`, `"Guides"`, `"Tips"`, `"Events"`, `"Club Guides"` (case-sensitive).
- `readingTime`: Format as `"X min read"` where X is estimated minutes (usually 6-10).
- `keywords`: 4-6 keywords. Primary keyword first. Include long-tail variations.
- `relatedClubs`: 3-5 club slugs from the open clubs list. Must be relevant to the post content.
- `faqs`: 3-4 FAQ entries. Questions people actually ask. Answers must be specific, helpful, and factual.

### FILE 2: `src/data/blogContent.tsx`

**Where:** Add the new entry as the LAST item in the `blogContent` record, BEFORE the closing `};` on the last line of the file.

**Format:**

```tsx
  "your-slug-here": (
    <>
      <p>
        Opening paragraph. Hook the reader immediately. State what they&apos;ll learn.
        Reference the problem or question they searched for.
      </p>

      <h2>First Major Section</h2>
      <p>
        Content here. Use <strong>bold</strong> for key facts and figures.
        Link to relevant club pages:{" "}
        <Link href="/clubs/cirque-le-soir" className="text-gold hover:underline">Cirque Le Soir</Link>.
      </p>

      <h2>Second Major Section</h2>
      <p>Paragraph content.</p>
      <ul>
        <li><strong>Item:</strong> Description</li>
        <li><strong>Item:</strong> Description</li>
      </ul>

      <h2>Third Major Section</h2>
      <p>Content with internal links to relevant pages.</p>

      <h2>Final Section / Summary</h2>
      <p>
        Wrap up with a natural CTA. Link to{" "}
        <Link href="/book-a-table" className="text-gold hover:underline">book a table</Link>{" "}
        or mention WhatsApp booking.
      </p>
    </>
  ),
```

**Content rules:**
- **Word count:** 1,000-1,500 words.
- **Heading structure:** 4-7 H2 sections. No H1 (the page template adds it). No H3 unless necessary.
- **HTML tags allowed:** `<p>`, `<h2>`, `<h3>`, `<ul>`, `<ol>`, `<li>`, `<strong>`, `<em>`, `<Link>`.
- **Escaping:** Use `&apos;` for apostrophes, `&quot;` for quotes, `&amp;` for ampersands, `&pound;` for £. This is JSX — standard HTML entities.
- **Link component:** Always import is already done at the top of the file. Use `<Link href="/path" className="text-gold hover:underline">text</Link>`. Add `{" "}` before/after inline Links to preserve spacing.
- **Internal links:** Include 4-8 internal links throughout the article. Link to relevant club pages, booking pages, and guide pages. Use descriptive anchor text (not "click here").
- **Tone:** Insider, premium, direct. Write as if you book tables at these venues every week. British English spelling. No fluff, no filler, no generic AI tone.
- **CTA:** End with a natural call to action mentioning WhatsApp booking or linking to `/book-a-table`. Do not be pushy.
- **Accuracy:** Only state facts that are consistent with the club data. Do not invent prices, opening nights, or venue details that contradict the data in `src/data/clubs.ts`.

### FILE 3: `src/data/images.ts`

**Where:** Add the new entry inside the `blogImages` record, BEFORE the closing `};` that ends the blogImages object (around line 230).

**Format:**

```typescript
  "your-slug-here": {
    featured: `${G}/SELECTED_IMAGE.jpg`,
    alt: "Descriptive alt text relevant to the blog topic",
    inline: [],
  },
```

**Rules:**
- Use the image filename selected in Step 3
- Alt text must be descriptive and relevant to the post topic
- `inline` can be empty `[]` for automated posts

### FILE 4: `src/data/used-images.json`

**Where:** Add the new image filename to the existing JSON array.

Read the current file, parse it, push the new filename, and write it back:

```bash
node -e "
const fs = require('fs');
const used = JSON.parse(fs.readFileSync('src/data/used-images.json', 'utf8'));
used.push('NEW_FILENAME.jpg');
fs.writeFileSync('src/data/used-images.json', JSON.stringify(used));
"
```

---

## STEP 6 — COMMIT AND PUSH

```bash
git add src/data/blog.ts src/data/blogContent.tsx src/data/images.ts src/data/used-images.json
git commit -m "Add blog post: YOUR POST TITLE

Co-Authored-By: Claude <noreply@anthropic.com>"
git push origin master
```

---

## STEP 7 — VERIFY

Before committing, confirm:
- [ ] The slug is unique (not in any existing post)
- [ ] The category is one of the 5 exact strings
- [ ] `publishedAt` and `updatedAt` are today's date
- [ ] `relatedClubs` only contains open club slugs
- [ ] All internal links point to pages that actually exist
- [ ] The content is valid JSX (all tags closed, entities escaped)
- [ ] The blogContent entry key matches the blog.ts slug exactly
- [ ] The blogImages entry key matches the blog.ts slug exactly
- [ ] The image filename exists in the Supabase bucket
- [ ] The used-images.json is valid JSON

After committing, verify the build passes:
```bash
npm run build 2>&1 | tail -5
```

If the build fails, read the error, fix it, and commit again.

---

## ABSOLUTE RULES

### A. FILE SAFETY
- ONLY modify the 4 files listed in the Safety Constraint section
- NEVER modify `next.config.ts`, `layout.tsx`, `page.tsx`, `sitemap.ts`, or any component file
- NEVER create new files
- NEVER delete files
- NEVER modify existing blog entries — only ADD new ones
- If you break the build, fix it immediately before pushing

### B. CONTENT RULES
- NEVER duplicate an existing blog topic or slug
- NEVER use a category string that is not in the exact list
- NEVER include a closed club in relatedClubs
- NEVER link to a URL that does not exist on this site
- NEVER make guaranteed-entry claims (e.g. "you will definitely get in")
- NEVER invent venue details that contradict `src/data/clubs.ts`
- NEVER use American English spelling (use "favourite" not "favorite", "realise" not "realize")
- NEVER write generic AI filler content — every sentence must be specific and useful
- NEVER use emojis in the content
- NEVER use first person ("I recommend") — use "we" or impersonal constructions
- Content must be 1,000-1,500 words minimum
- Must include 3-4 FAQ entries
- Must include 4-8 internal links to existing pages

### C. SEO BEST PRACTICES
- Title tag: 50-60 characters, primary keyword near the start
- Meta description: max 155 characters, includes primary keyword
- H1 (provided by template): matches the `title` field
- H2s: include secondary keywords naturally
- First paragraph: include primary keyword within the first 100 words
- Internal link anchor text: descriptive, keyword-relevant (not "click here" or "read more")
- FAQ questions: phrase as actual questions people would Google
- FAQ answers: start with a direct answer, then elaborate
- Keyword density: natural, not stuffed — aim for 2-4 uses of primary keyword
- Unique value: every post must offer something the reader cannot easily find elsewhere
