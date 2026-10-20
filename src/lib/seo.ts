import type { Metadata } from "next";

export const SITE_NAME = "London Bottle Service";

const SUFFIX = ` | ${SITE_NAME}`;

/** Longest <title> that Google shows in full. */
const MAX_TITLE = 60;

/**
 * A page title for Next.js metadata. The layout template appends
 * " | London Bottle Service"; when that would push the full title over 60
 * characters, the body is used on its own (absolute) so Google does not cut
 * it off.
 */
export function fitTitle(body: string): NonNullable<Metadata["title"]> {
  return body.length + SUFFIX.length <= MAX_TITLE ? body : { absolute: body };
}
