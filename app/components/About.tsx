import { portfolioData } from "../data/portfolio";

export default function About() {
    return (
        <section
            id="about"
            className="py-20 md:py-32 container mx-auto px-6 max-w-4xl"
        >
            <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="md:w-3/5">
                    <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-8 text-zinc-300">
                        <span className="text-blue-500 mr-2 text-xl font-mono">01.</span>
                        {portfolioData.about.title}
                        <span className="ml-4 h-px bg-zinc-700 flex-grow max-w-[200px]"></span>
                    </h2>

                    <div className="text-zinc-400 space-y-4 leading-relaxed">
                        <p>{portfolioData.about.description}</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <p>Here are a few technologies I've been working with recently:</p>

                        <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
                            {portfolioData.about.skills.map((skill) => (
                                <li key={skill} className="flex items-center gap-2">
                                    <span className="text-blue-500">▹</span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="md:w-2/5 relative group">
                    <div className="relative w-full aspect-square rounded overflow-hidden z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1">
                        {/* Placeholder for profile image - using a colored div for now */}
                        <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600 font-mono text-xs border border-zinc-700">
                            [Profile Image Placeholder]
                        </div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-blue-500 opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
                    </div>
                    {/* Border Design */}
                    <div className="absolute inset-0 border-2 border-blue-500 translate-x-4 translate-y-4 rounded -z-10 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
                </div>
            </div>
        </section>
    );
}
