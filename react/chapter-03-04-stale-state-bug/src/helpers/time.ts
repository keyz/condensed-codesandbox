import { formatDistanceToNowStrict } from "date-fns/formatDistanceToNowStrict";
import { enUS as localeEnUs } from "date-fns/locale/en-US";

/**
 * See https://date-fns.org/docs/formatDistanceToNowStrict
 */
export function formatRelativeTime(isoDateTime: string): string {
  return formatDistanceToNowStrict(
    isoDateTime, // Parse ISO 8601 date time string
    {
      addSuffix: true, // Add "ago"
      locale: localeEnUs,
    },
  );
}
