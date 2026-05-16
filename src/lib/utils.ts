export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

export function formatYear(year: number): string {
  if (year < 0) return `${Math.abs(year)} BC`;
  return year.toString();
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trimEnd() + "...";
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    life: "bg-red-500",
    education: "bg-blue-500",
    travel: "bg-green-500",
    literary: "bg-yellow-500",
    legacy: "bg-purple-500",
  };
  return colors[category] || "bg-gray-500";
}

export function getWorkTypeIcon(type: string): string {
  const icons: Record<string, string> = {
    novel: "📖",
    poem: "📜",
    essay: "📝",
    play: "🎭",
    article: "📰",
  };
  return icons[type] || "📄";
}
