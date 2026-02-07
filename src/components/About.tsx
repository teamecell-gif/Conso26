"use client";

export default function About() {
    return (
        <section id="about" className="relative py-32 overflow-hidden bg-background">
            {/* Decorative Blur */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-conso-red/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-12 uppercase tracking-tight">
                        About <span className="text-conso-red">Consortium</span>
                    </h2>

                    <div className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden group">
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-conso-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <p className="text-gray-300 text-lg md:text-2xl leading-relaxed relative z-10">
                            <span className="text-white font-bold">Consortium</span> is the flagship annual entrepreneurship summit and management festival of <span className="text-white font-bold">VNIT Nagpur</span>.
                            We bring together visionaries, industry leaders, and aspiring entrepreneurs to foster innovation and leadership.
                            <br /><br />
                            Join us to <span className="text-conso-red font-bold">ignite your entrepreneurial spark</span> and witness the convergence of technology, business, and creativity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
