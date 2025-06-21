import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 ">
            <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-700 dark:text-gray-300">
                <h2 className="text-xl font-semibold mb-2">👋 About Me</h2>
                <p className="max-w-xl mx-auto text-sm">
                    I’m Ujjwal Bansal, a passionate full-stack web developer who enjoys building clean, performant apps with modern technologies like <strong>Next.js</strong>, <strong>MongoDB</strong>, and <strong>Tailwind CSS</strong>.
                </p>

                <div className="mt-6 flex justify-center gap-6 text-gray-600 dark:text-gray-300">
                    <Link href="https://github.com/UjjwalBansal2002" target="_blank" aria-label="GitHub">
                        <Github className="w-5 h-5 hover:text-black dark:hover:text-white" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/ujjwalbansal1810" target="_blank" aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5 hover:text-blue-600 dark:hover:text-blue-400" />
                    </Link>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bansalujjwal2002@gmail.com" target='_blank' aria-label="Email">
                        <Mail className="w-5 h-5 hover:text-red-600 dark:hover:text-red-400" />
                    </a>

                </div>

                <p className="mt-6 text-xs text-gray-500 dark:text-gray-500">
                    &copy; {new Date().getFullYear()} Ujjwal Bansal. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
