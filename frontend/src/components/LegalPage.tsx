export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
  note?: string;
};

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 space-y-10">
      <div className="space-y-3">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">{title}</h1>
        <p className="text-xs text-purple-200/60">{updated}</p>
        <p className="text-base text-purple-200/80 leading-relaxed">{intro}</p>
      </div>

      {sections.map((section) => (
        <section key={section.heading} className="space-y-3">
          <h2 className="text-xl font-bold text-white">{section.heading}</h2>
          {section.paragraphs?.map((p) => (
            <p key={p} className="text-sm text-purple-200/80 leading-relaxed">{p}</p>
          ))}
          {section.items && (
            <ul className="list-disc pl-5 space-y-2 text-sm text-purple-200/80 leading-relaxed">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {section.note && (
            <p className="text-sm text-purple-100 leading-relaxed font-semibold">{section.note}</p>
          )}
        </section>
      ))}
    </div>
  );
}
