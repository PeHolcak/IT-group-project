"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { shell } from "../../styles"
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
} from "./styles"
import { Button } from "@/components/Button"



const navItems = [
    { id: "home", label: "Domů", href: "/" },
    { id: "reservation", label: "Rezervace", href: "/reservation" },
    { id: "menu", label: "Menu", href: "/menu" },
    { id: "contact", label: "Kontakt", href: "/contact" },
]

export const Header = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/"
        }
        return pathname.startsWith(href)
    }

    const handleClose = () => setIsOpen(false)

    return (
        <header className={siteHeader} data-component="site-header">
            <div className={`${shell} ${siteHeaderInner}`}>
                <Link
                    href="/"
                    className={siteHeaderBrand}
                    aria-label={`BoardZone domů`}
                    onClick={handleClose}
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

                <div className={siteHeaderCta}>
                    <Button variant="primary">Přihlásit</Button>
                    <Button variant="ghost">Registrovat</Button>
                </div>
            </div>

            {/* Mobile drawer */}
            <div
                id="mobile-nav"
                aria-hidden={!isOpen}
                className={`${mobileDrawer} ${isOpen ? mobileDrawerOpen : ""}`}
            >
                <button
                    type="button"
                    className={mobileDrawerClose}
                    onClick={handleClose}
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
                                    className={`${mobileDrawerNavLink} ${isActive(item.href) ? mobileDrawerNavLinkActive : ""
                                        }`}
                                    aria-current={isActive(item.href) ? "page" : undefined}
                                    onClick={handleClose}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={mobileDrawerCta}>
                    <Button variant="primary">Přihlásit</Button>
                    <Button variant="ghost">Registrovat</Button>
                </div>
            </div>
        </header>
    )
}
