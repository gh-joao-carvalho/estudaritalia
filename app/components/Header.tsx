"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const WHATSAPP_LINK = "https://wa.me/5511967529160";

export default function Header() {
    const pathname = usePathname(); // ✅ inside component


    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(href + "/");
    };

    const navLinkClass = (href: string) =>
        [
            "rounded-lg px-2 py-1 transition-colors",
            isActive(href)
                ? "bg-slate-200/60 text-slate-900"
                : "text-slate-700 hover:text-slate-900 hover:underline hover:underline-offset-8",
        ].join(" ");

    return (
        <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F8F7F3]">
            <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-5">
                <Link href="/" className="flex items-center h-full py-2">
                    <Image
                        src="/images/logo.png"
                        alt="Estudar Itália"
                        width={260}
                        height={80}
                        priority
                        className="block h-16 w-auto md:h-18"
                    />
                </Link>



                <nav className="hidden items-center gap-7 text-[15px] font-semibold md:flex">
                    <Link
                        href="/"
                        className={[
                            "rounded-lg px-2 py-1 transition-colors",
                            isActive("/") ? "bg-slate-200 text-slate-900" : "text-slate-700 hover:text-slate-900 hover:underline hover:underline-offset-8",
                        ].join(" ")}
                    >
                        Home
                    </Link>

                    <Link href="/universidades" className={navLinkClass("/universidades")}>
                        Universidades
                    </Link>
                    <Link href="/sobre" className={navLinkClass("/sobre")}>
                        Sobre
                    </Link>

                    {/* If these are anchors on the home page, make them work from any page: */}
                    <Link href="/#como-funciona" className="text-slate-700 hover:text-slate-900 transition-colors">
                        Como funciona
                    </Link>
                    <Link href="/#faq" className="text-slate-700 hover:text-slate-900 transition-colors">
                        FAQ
                    </Link>

                    <a
                        href={WHATSAPP_LINK}
                        className="rounded-xl bg-emerald-950 px-4 py-2 text-white shadow-sm hover:bg-emerald-900"
                    >
                        WhatsApp
                    </a>
                </nav>

                <a
                    href={WHATSAPP_LINK}
                    className="md:hidden rounded-xl bg-emerald-950 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-emerald-900"
                >
                    WhatsApp
                </a>
            </div>
        </header>
    );
}
