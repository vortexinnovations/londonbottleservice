/**
 * Single source of truth for the WhatsApp booking number.
 *
 * Set NEXT_PUBLIC_WHATSAPP_NUMBER in Vercel using international format with no
 * "+", spaces or dashes — e.g. 447880662708.
 *
 * The NEXT_PUBLIC_ prefix is required: this value is read inside client
 * components, so it has to be inlined into the browser bundle. That inlining
 * happens at build time, which means changing the value in Vercel only takes
 * effect after a redeploy.
 *
 * The fallback keeps the site working if the variable is ever missing or
 * misspelled, rather than shipping a broken booking link.
 */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "447880662708";

/** E.164 form, for schema.org `telephone` and `tel:` links. */
export const WHATSAPP_TEL = `+${WHATSAPP_NUMBER}`;

/** Plain chat link, no prefilled message. */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/**
 * Human-readable display form, e.g. "+44 7880 662708".
 * A printed, readable phone number is a deliberate trust device —
 * it appears in the header and footer like an office letterhead.
 */
export const WHATSAPP_DISPLAY =
  WHATSAPP_NUMBER.startsWith("44") && WHATSAPP_NUMBER.length === 12
    ? `+44 ${WHATSAPP_NUMBER.slice(2, 6)} ${WHATSAPP_NUMBER.slice(6)}`
    : `+${WHATSAPP_NUMBER}`;

export function getWhatsAppLink(clubName?: string): string {
  let message: string;
  if (clubName) {
    message = `Hi, I'd like to book a table at ${clubName}. Here are my details:\n\nDate:\nGroup size:\nOccasion:\nAny preferences:`;
  } else {
    message = `Hi, I found you on londonbottleservice.com and I'd like to book a table. Here are my details:\n\nClub:\nDate:\nGroup size:\nOccasion:\nAny preferences:`;
  }
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
