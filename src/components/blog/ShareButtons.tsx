"use client";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs uppercase tracking-wider text-[var(--color-text-dim)]">
        Share
      </span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
      >
        Twitter
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
      >
        LinkedIn
      </a>
      <button
        onClick={() => navigator.clipboard.writeText(url).catch(() => {})}
        className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors bg-transparent border-none cursor-pointer"
      >
        Copy Link
      </button>
    </div>
  );
}
