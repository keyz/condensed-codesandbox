import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import { enUS as localeEnUs } from "date-fns/locale";

/**
 * See https://date-fns.org/v2.30.0/docs/formatDistanceToNowStrict
 */
export function formatRelativeTime(secondTimestamp: number): string {
  return formatDistanceToNowStrict(
    secondTimestamp * 1000, // seconds -> milliseconds
    {
      addSuffix: true, // add "ago"
      locale: localeEnUs,
    },
  );
}
