"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Linkedin, Mail, Phone, User } from "lucide-react";

const adminTeam = [
    {
        name: "Dr. P. L. Patel",
        position: "Director, VNIT",
        image: "/director.webp",
    },
    {
        name: "Dr. Amrut Agasti",
        position: "Professor Incharge",
        image: "/agasti_sir.webp",
    },
    {
        name: "Dr. Ashish P. Khatri",
        position: "Professor Incharge",
        image: "/khatri.webp",
    },
    {
        name: "Dr. Chayan Das",
        position: "Professor Incharge",
        image: "/chayan.webp",
    },
];

const coreTeam = [
    {
        name: "Abhijeet Singh",
        position: "President",
        image: "/abhijeet.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Tanvi Malode",
        position: "Vice President",
        image: "/tanvi.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Prashant T Labde",
        position: "Treasurer",
        image: "/Prashant.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Prince Kumar",
        position: "Head of Brand Marketing",
        image: "/princ.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Saurabh Chavan",
        position: "Head of Brand Marketing",
        image: "/chavan.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Sahil Shetty",
        position: "Head of Public Relations",
        image: "/Sahils.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Arja Kaur Wadhva",
        position: "Head of Public Relations",
        image: "/arja.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Aryan Singh",
        position: "Head of Technical Affairs",
        image: "/AryanSingh.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Pragya Chakravarty",
        position: "Head of Operations and Planning",
        image: "/Pragya.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Arpit Sahu",
        position: "Head of Operations and Planning",
        image: "/Arpi.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Mohit Chavan",
        position: "Head of Operations and Planning",
        image: "/mohit.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Dhruv Jindal",
        position: "Head of Growth & Partnerships",
        image: "/Dhrooooov.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Tanisha Kanchan",
        position: "Head of Growth & Partnerships",
        image: "/Tanisha.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "K D Sriram",
        image: "/Sram.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Anushka Kumari",
        image: "/Anushka25.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Rakshit Singhvi",
        image: "/Rkashit.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
];

const advisoryTeam = [
    {
        name: "Anshul Mukati",
        position: "Treasurer",
        image: "/Anshul.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Rohit Shrivas",
        position: "Head of Operations & Planning",
        image: "/rohit2.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Harsh Agrawal",
        position: "Head of Technical Affairs",
        image: "/harsh2.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Bhakti Umarkar",
        position: "Head of Brand Marketing",
        image: "/bhakti.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Anurag Tiwari",
        position: "Head of Brand Marketing",
        image: "/anurag1.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Apurva Ugale",
        position: "Head of Corporate Communications",
        image: "/apurva.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Sudhanshu Tiwari",
        position: "Head of Corporate Communications",
        image: "/sudhanshu.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Aquib Iqbal Shaikh",
        position: "Head of Public Relations",
        image: "/aquib.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Anuj Singh",
        position: "Head of Public Relations",
        image: "/anuj.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Mayank Gupta",
        position: "Client Services and Partnership Director",
        image: "/mayank.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Varad Nilawar",
        position: "Consulting Director",
        image: "/varad.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Sourav Vishwakarma",
        position: "Client Services and Partnership Director",
        image: "/sourav.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
    {
        name: "Kaushik Kumar Reddyshetty",
        position: "Consulting Director",
        image: "/kaushik.webp",
        links: {
            linkedin: "#",
            email: "#",
            phone: "#",
        },
    },
];

type TeamGroup = {
    role: string;
    members: { name: string; position: string }[];
};

const team: TeamGroup[] = [];

function TeamCard({ name, position }: { name: string, position: string }) {
    return (
        <div className="group relative">
            <div className="aspect-square bg-white/5 rounded-xl overflow-hidden mb-4 border border-white/5 group-hover:border-conso-red/50 transition-colors flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <User size={80} className="text-white/20 group-hover:text-white/40 transition-colors" />

                {/* Social Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="w-10 h-10 bg-conso-red rounded-full flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
            <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-1">{name}</h3>
                <p className="text-sm font-mono text-conso-red uppercase tracking-wider">{position}</p>
            </div>
        </div>
    );
}

function AdminCard({ name, position, image }: { name: string; position: string; image: string }) {
    return (
        <div className="relative rounded-2xl overflow-hidden bg-black/80 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.45)]">
            <div className="h-24 bg-conso-red" />
            <div className="-mt-12 flex justify-center">
                <div className="h-28 w-28 rounded-full overflow-hidden ring-4 ring-black/90 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                    <Image
                        src={image}
                        alt={name}
                        width={112}
                        height={112}
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
            <div className="px-6 pb-8 pt-4 text-center">
                <h3 className="text-lg font-bold text-white mb-1">{name}</h3>
                <p className="text-sm font-mono text-white/70">{position}</p>
            </div>
        </div>
    );
}

type CoreLinks = {
    linkedin?: string;
    email?: string;
    phone?: string;
};

function CoreCard({
    name,
    position,
    image,
    links,
}: {
    name: string;
    position?: string;
    image: string;
    links?: CoreLinks;
}) {
    return (
        <div className="relative rounded-2xl overflow-hidden bg-black/80 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.45)]">
            <div className="h-24 bg-conso-red" />
            <div className="-mt-12 flex justify-center">
                <div className="h-28 w-28 rounded-full overflow-hidden ring-4 ring-black/90 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                    <Image
                        src={image}
                        alt={name}
                        width={112}
                        height={112}
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
            <div className="px-6 pb-8 pt-4 text-center">
                <h3 className="text-lg font-bold text-white mb-1">{name}</h3>
                {position ? (
                    <p className="text-sm font-mono text-white/70">{position}</p>
                ) : null}
                {links ? (
                    <div className="mt-4 flex items-center justify-center gap-4 text-white/80">
                        {links.linkedin ? (
                            <a
                                href={links.linkedin}
                                aria-label={`${name} LinkedIn`}
                                className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-conso-red transition-colors"
                            >
                                <Linkedin size={18} />
                            </a>
                        ) : null}
                        {links.email ? (
                            <a
                                href={links.email}
                                aria-label={`${name} email`}
                                className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-conso-red transition-colors"
                            >
                                <Mail size={18} />
                            </a>
                        ) : null}
                        {links.phone ? (
                            <a
                                href={links.phone}
                                aria-label={`${name} phone`}
                                className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-conso-red transition-colors"
                            >
                                <Phone size={18} />
                            </a>
                        ) : null}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-conso-red selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 px-6 container mx-auto">
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase tracking-tight">
                        Meet the <span className="text-conso-red">Team</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        The minds behind Central India's Largest Management Festival.
                    </p>
                </div>

                <div className="space-y-24">
                    <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto text-center uppercase tracking-[0.3em] text-sm md:text-base">
                        <a href="#admins" className="group flex flex-col items-center gap-3">
                            <span className="text-white/90">Admin</span>
                            <span className="h-2 w-24 bg-conso-red" />
                        </a>
                        <a href="#core" className="group flex flex-col items-center gap-3">
                            <span className="text-white/90">Core</span>
                            <span className="h-2 w-24 bg-conso-red" />
                        </a>
                        <a href="#advisory" className="group flex flex-col items-center gap-3">
                            <span className="text-white/90">Advisory</span>
                            <span className="h-2 w-24 bg-conso-red" />
                        </a>
                    </div>

                    <section id="admins">
                        <h2 className="text-3xl font-display font-bold text-center mb-12 relative">
                            <span className="relative z-10 bg-background px-6">Admins</span>
                            <div className="absolute inset-x-0 top-1/2 h-px bg-white/10 -z-10" />
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {adminTeam.map((member) => (
                                <AdminCard
                                    key={member.name}
                                    name={member.name}
                                    position={member.position}
                                    image={member.image}
                                />
                            ))}
                        </div>
                    </section>

                    <section id="core">
                        <h2 className="text-3xl font-display font-bold text-center mb-12 relative">
                            <span className="relative z-10 bg-background px-6">Core</span>
                            <div className="absolute inset-x-0 top-1/2 h-px bg-white/10 -z-10" />
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {coreTeam.map((member) => (
                                <CoreCard
                                    key={member.name}
                                    name={member.name}
                                    position={member.position}
                                    image={member.image}
                                    links={member.links}
                                />
                            ))}
                        </div>
                    </section>

                    <section id="advisory">
                        <h2 className="text-3xl font-display font-bold text-center mb-12 relative">
                            <span className="relative z-10 bg-background px-6">Advisory</span>
                            <div className="absolute inset-x-0 top-1/2 h-px bg-white/10 -z-10" />
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {advisoryTeam.map((member) => (
                                <CoreCard
                                    key={member.name}
                                    name={member.name}
                                    position={member.position}
                                    image={member.image}
                                    links={member.links}
                                />
                            ))}
                        </div>
                    </section>

                    {team.map((group, groupIndex) => (
                        <section key={groupIndex}>
                            <h2 className="text-3xl font-display font-bold text-center mb-12 relative">
                                <span className="relative z-10 bg-background px-6">{group.role}</span>
                                <div className="absolute inset-x-0 top-1/2 h-px bg-white/10 -z-10" />
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-6xl mx-auto">
                                {group.members.map((member, i) => (
                                    <TeamCard key={i} name={member.name} position={member.position} />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
