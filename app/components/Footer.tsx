import { portfolioData } from "../data/portfolio";

export default function Footer() {
    return (
        <footer className="py-8 bg-black" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-xs font-mono" style={{ color: "#374151" }}>
                    © 2025 {portfolioData.name}. Designed & Built with ❤️
                </p>
                <div className="flex gap-6">
                    {[
                        { label: "LinkedIn", href: portfolioData.contact.linkedin },
                        { label: "GitHub", href: portfolioData.contact.github },
                        { label: "Email", href: `mailto:${portfolioData.contact.email}` },
                    ].map((l) => (
                        <a key={l.label} href={l.href}
                            target={l.href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            className="text-xs font-mono transition-colors hover:text-white"
                            style={{ color: "#374151" }}>
                            {l.label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
