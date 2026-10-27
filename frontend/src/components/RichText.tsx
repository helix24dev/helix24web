import Link from 'next/link';
import { Fragment } from 'react';

// Plain CMS text with inline links written as [label](/path) or [label](https://…); nothing else is parsed
export default function RichText({ text, linkClassName = 'text-purple-300 underline underline-offset-4 hover:text-white' }: { text: string; linkClassName?: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)\s]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(part);
        if (!m) return <Fragment key={i}>{part}</Fragment>;
        const [, label, href] = m;
        return href.startsWith('/') ? (
          <Link key={i} href={href} className={linkClassName}>{label}</Link>
        ) : (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={linkClassName}>{label}</a>
        );
      })}
    </>
  );
}
