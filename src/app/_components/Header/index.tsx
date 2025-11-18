"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

import { shell } from "../../styles";
import {
    siteHeader,
    siteHeaderInner,
    siteHeaderBrand,
    siteHeaderWordmark,
    siteHeaderToggle,
    siteHeaderNav,
    siteHeaderNavList,
    siteHeaderCta,
    navLink,
    navLinkActive,
    burger,
    burgerOpen,
    srOnly,
} from "./styles";

import { Button } from "@/components/Button";
import { LoginDialog } from "./LoginDialog";
import { RegisterDialog } from "./RegisterDialog";
import { MobileMenu } from "./MobileMenu";

const navItems = [
    { id: "home", label: "Domů", href: "/" },
    { id: "reservation", label: "Rezervace", href: "/reservation" },
    { id: "menu", label: "Menu", href: "/menu" },
    { id: "contact", label: "Kontakt", href: "/contact" },
];

type ModalType = "login" | "register" | null;

export const Header = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState<ModalType>(null);

    const { status } = useSession();
    const isAuthenticated = status === "authenticated";

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    const handleCloseMenu = () => setIsOpen(false);

    const openLogin = () => setModalType("login");
    const openRegister = () => setModalType("register");
    const closeDialog = () => setModalType(null);

    const handleLogout = async () => {
        await signOut({ callbackUrl: "/" });
        setIsOpen(false);
        setModalType(null);
    };

    // Tyhle funkce použijeme pro mobilní menu, aby zároveň zavíralo drawer
    const handleMobileLogin = () => {
        setIsOpen(false);
        setModalType("login");
    };

    const handleMobileRegister = () => {
        setIsOpen(false);
        setModalType("register");
    };

    console.log("MobileMenu render, isOpen:", isOpen);
    return (
        <header className={siteHeader} data-component="site-header">
            <div className={`${shell} ${siteHeaderInner}`}>
                <Link
                    href="/"
                    className={siteHeaderBrand}
                    aria-label={`BoardZone domů`}
                    onClick={handleCloseMenu}
                >
                    <>
                        <Image
                            src="/images/logo.svg"
                            alt="Deskové hry a pivo"
                            width={80}
                            height={67}
                            loading="lazy"
                        />
                        <span className={siteHeaderWordmark}>BoardZone</span>
                    </>
                </Link>

                <button
                    type="button"
                    className={siteHeaderToggle}
                    aria-expanded={isOpen}
                    aria-controls="mobile-nav"
                    onClick={() => setIsOpen(true)}
                >
                    <span className={srOnly}>Otevřít menu</span>
                    <span
                        aria-hidden="true"
                        className={`${burger} ${isOpen ? burgerOpen : ""}`}
                    />
                </button>

                <nav className={siteHeaderNav} aria-label="Hlavní navigace">
                    <ul className={siteHeaderNavList}>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className={`${navLink} ${isActive(item.href) ? navLinkActive : ""
                                        }`}
                                    aria-current={isActive(item.href) ? "page" : undefined}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={siteHeaderCta}>
                    {!isAuthenticated ? (
                        <>
                            <Button variant="primary" onClick={openLogin}>
                                Přihlásit
                            </Button>
                            <Button variant="ghost" onClick={openRegister}>
                                Registrovat
                            </Button>
                        </>
                    ) : (
                        <>
                            <Link href="/profile">
                                <Button variant="ghost">Profil</Button>
                            </Link>
                            <Button variant="primary" onClick={handleLogout}>
                                Odhlásit
                            </Button>
                        </>
                    )}
                </div>
            </div>

            <MobileMenu
                isOpen={isOpen}
                navItems={navItems}
                isAuthenticated={isAuthenticated}
                onClose={handleCloseMenu}
                onLogin={handleMobileLogin}
                onRegister={handleMobileRegister}
                onLogout={handleLogout}
                isActive={isActive}
            />

            {modalType === "login" ? <LoginDialog onClose={closeDialog} /> : null}
            {modalType === "register" ? <RegisterDialog onClose={closeDialog} /> : null}
        </header>
    );
};
