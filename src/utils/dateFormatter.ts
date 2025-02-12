const DEFAULT_LOCALE = "en-US";
const FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "2-digit",
  year: "numeric",
};

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date provided");
  }

  return new Intl.DateTimeFormat(DEFAULT_LOCALE, FORMAT_OPTIONS).format(date);
}
