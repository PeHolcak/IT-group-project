"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { shell } from "../../styles";
import {
    siteHeader,
    siteHeaderInner,
    siteHeaderBrand,
    siteHeaderLogo,
    siteHeaderWordmark,
    siteHeaderToggle,
    siteHeaderNav,
    siteHeaderNavList,
    siteHeaderCta,
    navLink,
    navLinkActive,
    burger,
    burgerOpen,
    mobileDrawer,
    mobileDrawerOpen,
    mobileDrawerClose,
    mobileDrawerCloseIcon,
    mobileDrawerNav,
    mobileDrawerNavList,
    mobileDrawerNavLink,
    mobileDrawerNavLinkActive,
    mobileDrawerCta,
    srOnly,
} from "./styles";
import { Button } from "@/components/Button";
import { LoginDialog } from "./LoginDialog";
import { RegisterDialog } from "./RegisterDialog";

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

    const { data: session, status } = useSession();          // 👈 přidáno
    const isAuthenticated = status === "authenticated";      // 👈 helper

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };

    const handleCloseMenu = () => setIsOpen(false);

    const openLogin = () => setModalType("login");
    const openRegister = () => setModalType("register");
    const closeDialog = () => setModalType(null);

    const handleLogout = async () => {                      // 👈 logout helper
        await signOut({ callbackUrl: "/" });
        setIsOpen(false);
        setModalType(null);
    };

    return (
        <header className={siteHeader} data-component="site-header">
            <div className={`${shell} ${siteHeaderInner}`}>
                <Link
                    href="/"
                    className={siteHeaderBrand}
                    aria-label={`BoardZone domů`}
                    onClick={handleCloseMenu}
                >
                    <span className={siteHeaderLogo} aria-hidden="true">
                        🎲
                    </span>
                    <span className={siteHeaderWordmark}>BoardZone</span>
                </Link>

                <button
                    type="button"
                    className={siteHeaderToggle}
                    aria-expanded={isOpen}
                    aria-controls="mobile-nav"
                    onClick={() => setIsOpen((prev) => !prev)}
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

                {/* DESKTOP CTA */}
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
                                <Button variant="ghost">
                                    Profil
                                </Button>
                            </Link>
                            <Button variant="primary" onClick={handleLogout}>
                                Odhlásit
                            </Button>
                        </>
                    )}
                </div>
            </div>

            {/* MOBILE DRAWER */}
            <div
                id="mobile-nav"
                aria-hidden={!isOpen}
                className={`${mobileDrawer} ${isOpen ? mobileDrawerOpen : ""}`}
            >
                <button
                    type="button"
                    className={mobileDrawerClose}
                    onClick={handleCloseMenu}
                >
                    <span className={srOnly}>Zavřít menu</span>
                    <span aria-hidden="true" className={mobileDrawerCloseIcon} />
                </button>

                <nav className={mobileDrawerNav} aria-label="Mobilní navigace">
                    <ul className={mobileDrawerNavList}>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className={`${mobileDrawerNavLink} ${isActive(item.href)
                                        ? mobileDrawerNavLinkActive
                                        : ""
                                        }`}
                                    aria-current={isActive(item.href) ? "page" : undefined}
                                    onClick={handleCloseMenu}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* MOBILE CTA */}
                <div className={mobileDrawerCta}>
                    {!isAuthenticated ? (
                        <>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    openLogin();
                                    handleCloseMenu();
                                }}
                            >
                                Přihlásit
                            </Button>
                            <Button
                                variant="ghost"
                                onClick={() => {
                                    openRegister();
                                    handleCloseMenu();
                                }}
                            >
                                Registrovat
                            </Button>
                        </>
                    ) : (
                        <>
                            <Link href="/profile" onClick={handleCloseMenu}>
                                <Button variant="ghost">
                                    Profil
                                </Button>
                            </Link>
                            <Button
                                variant="primary"
                                onClick={handleLogout}
                            >
                                Odhlásit
                            </Button>
                        </>
                    )}
                </div>
            </div>

            {modalType === "login" ? <LoginDialog onClose={closeDialog} /> : null}
            {modalType === "register" ? <RegisterDialog onClose={closeDialog} /> : null}
        </header>
    );
};
