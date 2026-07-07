import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, siteConfig } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { BlogCard } from "@/components/blog/BlogCard";
import { ShareButtons } from "@/components/blog/ShareButtons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — ${siteConfig.name}`,
    description: post.description,
  };
}

function renderContent(content: string) {
  const blocks = content.split(/\n\n+/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    if (trimmed.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="heading-lg mt-10 mb-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          {renderInline(trimmed.replace(/^##\s+/, ""))}
        </h2>
      );
    }

    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").filter((l) => l.trim().startsWith("- "));
      return (
        <ul key={i} className="space-y-2 my-4">
          {items.map((item, j) => (
            <li
              key={j}
              className="flex items-start gap-3 text-base leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-accent)" }} />
              {renderInline(item.replace(/^-\s+/, ""))}
            </li>
          ))}
        </ul>
      );
    }

    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split("\n").filter((l) => /^\d+\.\s/.test(l.trim()));
      return (
        <ol key={i} className="space-y-2 my-4 list-decimal list-inside">
          {items.map((item, j) => (
            <li
              key={j}
              className="text-base leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              {renderInline(item.replace(/^\d+\.\s+/, ""))}
            </li>
          ))}
        </ol>
      );
    }

    return (
      <p
        key={i}
        className="text-base leading-[1.75] my-4"
        style={{ color: "var(--color-text-muted)" }}
      >
        {renderInline(trimmed)}
      </p>
    );
  });
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold" style={{ color: "var(--color-text-primary)" }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter(
    (p) => p.slug !== slug && p.category === post.category
  ).slice(0, 3);

  const currentUrl = `${siteConfig.name.toLowerCase().replace(/\s+/g, "")}/blog/${slug}`;

  return (
    <>
      <section className="relative section-padding px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="section-light" aria-hidden="true" />
        <div className="mx-auto max-w-7xl relative z-10">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-wider mb-8" style={{ color: "var(--color-text-dim)" }}>
            <Link
              href="/"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Home
            </Link>
            <span className="opacity-40">/</span>
            <Link
              href="/blog"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Blog
            </Link>
            <span className="opacity-40">/</span>
            <span className="truncate max-w-[200px]" style={{ color: "var(--color-text-muted)" }}>
              {post.title}
            </span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full" style={{ background: "rgba(44, 74, 138, 0.12)", color: "var(--color-spot-cobalt, #2C4A8A)" }}>
              {post.category}
            </span>
          </div>

          <h1 className="heading-hero max-w-4xl" style={{ color: "var(--color-text-primary)" }}>
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-6 text-sm" style={{ color: "var(--color-text-dim)" }}>
            <span>{post.author}</span>
            <span className="w-1 h-1 rounded-full" style={{ background: "var(--color-text-dim)" }} />
            <span>{formatDate(post.date)}</span>
            <span className="w-1 h-1 rounded-full" style={{ background: "var(--color-text-dim)" }} />
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="section-padding px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="section-light-2" aria-hidden="true" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <div className="prose-custom">
              {renderContent(post.content)}
            </div>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t" style={{ borderColor: "var(--color-border)" }}>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-full border"
                    style={{ background: "var(--color-surface)", borderColor: "var(--color-border)", color: "var(--color-text-dim)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-8 pt-8 border-t" style={{ borderColor: "var(--color-border)" }}>
              <ShareButtons title={post.title} url={currentUrl} />
            </div>

            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-opacity"
                style={{ color: "var(--color-accent)" }}
              >
                &larr; Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="section-padding px-6 md:px-12 lg:px-20 overflow-hidden">
          <div className="section-light" aria-hidden="true" />
          <div className="mx-auto max-w-7xl relative z-10">
            <div className="pt-16 border-t" style={{ borderColor: "var(--color-border)" }}>
              <h2 className="heading-lg mb-8" style={{ color: "var(--color-text-primary)" }}>
                Related Articles
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((related) => (
                  <BlogCard key={related.slug} post={related} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
