import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import { enUS as localeEnUs } from "date-fns/locale";

/**
 * See https://date-fns.org/v2.30.0/docs/formatDistanceToNowStrict
 */
export function formatRelativeTime(isoDateTime: string): string {
  return formatDistanceToNowStrict(
    new Date(isoDateTime), // parse ISO 8601 date time string
    {
      addSuffix: true, // add "ago"
      locale: localeEnUs,
    },
  );
}
