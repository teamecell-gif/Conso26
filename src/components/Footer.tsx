"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div>
                        <Link href="/" className="relative block w-32 h-32 mb-6">
                            <Image
                                src="/Untitled design-63.png"
                                alt="Consortium '26"
                                fill
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            The Annual Entrepreneurship Summit of VNIT Nagpur. Igniting minds, fostering innovation.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="https://www.instagram.com/ecellvnit/"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-conso-red hover:text-white transition-all"
                            >
                                <Instagram size={20} />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/theentrepreneurshipcellvnit/mycompany/"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-conso-red hover:text-white transition-all"
                            >
                                <Linkedin size={20} />
                            </Link>
                            <Link
                                href="https://twitter.com/ecell_vnit"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-conso-red hover:text-white transition-all"
                            >
                                <Twitter size={20} />
                            </Link>
                            <Link
                                href="https://m.facebook.com/vnitecell/"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-conso-red hover:text-white transition-all"
                            >
                                <Facebook size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Events', 'Speakers', 'Register'].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-conso-red transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Contact</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-center gap-3 hover:text-white transition-colors">
                                <Mail size={16} className="text-conso-red" />
                                <a href="mailto:team_ecell@vnit.ac.in">team_ecell@vnit.ac.in</a>
                            </li>
                            <li className="flex items-center gap-3 hover:text-white transition-colors">
                                <Mail size={16} className="text-conso-red" />
                                <a href="mailto:corporateaffairs@ecellvnit.co.in">corporateaffairs@ecellvnit.co.in</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Location</h3>
                        <p className="text-gray-400 leading-relaxed">
                            E-Cell Office, First Floor Student Canteen ,<br />
                            Visvesvaraya National Institute of Technology,<br />
                            South Ambazari Road, Nagpur,<br />
                            Maharashtra -440010
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; 2026 E-Cell VNIT. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        Designed with <span className="text-conso-red">♥</span> by Web Team
                    </p>
                </div>
            </div>
        </footer>
    );
}
