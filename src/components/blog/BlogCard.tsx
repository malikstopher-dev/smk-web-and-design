import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block ${featured ? "col-span-full" : ""}`}
    >
      <article
        className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
          featured ? "md:grid md:grid-cols-2 md:gap-0" : ""
        }`}
        style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
      >
        <div
          className={`relative overflow-hidden ${
            featured ? "h-[300px] md:h-full" : "h-[220px]"
          }`}
        >
          <Image
            src={
              post.image ||
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=85&w=800&auto=format&fit=crop"
            }
            alt={post.title}
            fill
            className="project-image"
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
          />
          <div className="project-overlay" />
          {featured && (
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent md:bg-gradient-to-r md:from-[var(--color-surface)]" />
          )}
        </div>
        <div
          className={`flex flex-col justify-center p-6 md:p-8 ${
            featured ? "md:pl-0 md:pr-8" : ""
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full" style={{ background: "rgba(44, 74, 138, 0.12)", color: "var(--color-spot-cobalt, #2C4A8A)" }}>
              {post.category}
            </span>
            {featured && (
              <span className="text-[11px] uppercase tracking-wider" style={{ color: "var(--color-accent)", opacity: 0.7 }}>
                Featured
              </span>
            )}
          </div>
          <h3
            className={`font-[var(--font-display)] leading-tight tracking-[-0.02em] transition-colors duration-300 ${
              featured
                ? "text-[clamp(1.25rem,2.5vw,2.5rem)]"
                : "text-lg"
            }`}
            style={{ color: "var(--color-text-primary)" }}
          >
            {post.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed line-clamp-2" style={{ color: "var(--color-text-muted)" }}>
            {post.description}
          </p>
          <div className="flex items-center gap-4 mt-4 text-xs" style={{ color: "var(--color-text-dim)" }}>
            <span>{formatDate(post.date)}</span>
            <span className="w-1 h-1 rounded-full" style={{ background: "var(--color-text-dim)" }} />
            <span>{post.readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
