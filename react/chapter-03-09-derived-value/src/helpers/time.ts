import { formatDistanceToNowStrict } from "date-fns/formatDistanceToNowStrict";
import { enUS as localeEnUs } from "date-fns/locale/en-US";

/**
 * See https://date-fns.org/v2.30.0/docs/formatDistanceToNowStrict
 */
export function formatRelativeTime(isoDateTime: string): string {
  return formatDistanceToNowStrict(
    new Date(isoDateTime), // Parse ISO 8601 date time string
    {
      addSuffix: true, // Add "ago"
      locale: localeEnUs,
    },
  );
}
