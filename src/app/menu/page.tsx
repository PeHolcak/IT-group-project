"use client";

import { useEffect, useState } from "react";
import {
  menuSection,
  menuInner,
  menuHeader,
  menuTitle,
  menuSubtitle,
  pillNav,
  pillButton,
  pillButtonActive,
  itemsList,
  itemCard,
  itemHeader,
  itemLeft,
  itemTitle,
  itemDescription,
  itemMeta,
  itemPriceWrapper,
  itemPrice,
  itemPriceTag,
  paginationWrapper,
  paginationInfo,
  paginationButtons,
  paginationButton,
  paginationButtonActive,
} from "./styles";

type Category = "napoje" | "jidlo" | "snacky";

type MenuItem = {
  id: number;
  name: string;
  description?: string;
  meta?: string;
  price: string;
};

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "napoje", label: "Nápoje" },
  { id: "jidlo", label: "Jídlo" },
  { id: "snacky", label: "Snacky" },
];

const MENU: Record<Category, MenuItem[]> = {
  napoje: [
    {
      id: 1,
      name: "IPA 12°",
      description: "Lokální řemeslné pivo s citrusovým aroma.",
      meta: "0,5 l",
      price: "69 Kč",
    },
    {
      id: 2,
      name: "Cola",
      description: "Klasická limonáda, led + citron.",
      meta: "0,33 l",
      price: "39 Kč",
    },
    {
      id: 3,
      name: "Tmavý stout",
      description: "Pražené tóny, jemná pěna a kakaový dozvuk.",
      meta: "0,5 l",
      price: "75 Kč",
    },
    {
      id: 4,
      name: "Zázvorová limonáda",
      description: "Domácí, jemně perlivá, ideální nealko volba.",
      meta: "0,4 l",
      price: "55 Kč",
    },
    {
      id: 11,
      name: "Nealko pivo",
      description: "Pro řidiče i taktikou partii.",
      meta: "0,5 l",
      price: "49 Kč",
    },
    {
      id: 12,
      name: "Espresso",
      description: "Doppio, aby se ti nezavíraly oči u kampaně.",
      meta: "0,08 l",
      price: "45 Kč",
    },
  ],
  jidlo: [
    {
      id: 5,
      name: "Nachos s cheddarem",
      description: "Křupavé nachos, rozpuštěný sýr, salsa.",
      price: "89 Kč",
    },
    {
      id: 6,
      name: "Quesadilla",
      description: "Pšeničná tortilla, kuřecí maso, cheddar, salsa.",
      price: "139 Kč",
    },
    {
      id: 7,
      name: "Burger BoardZone",
      description: "Hovězí patty, chedar, okurky, domácí omáčka.",
      price: "189 Kč",
    },
    {
      id: 13,
      name: "Grilovaný hermelín",
      description: "Bylinkový olej, pečivo.",
      price: "129 Kč",
    },
  ],
  snacky: [
    {
      id: 8,
      name: "Arašídy ve slupce",
      description: "Ideální k pivu i partii.",
      price: "39 Kč",
    },
    {
      id: 9,
      name: "Tyčinky / preclíky",
      description: "Sdílecí miska na stůl.",
      price: "35 Kč",
    },
    {
      id: 10,
      name: "Olivy a sýr",
      description: "Malý snack pro fajnšmekry.",
      price: "69 Kč",
    },
  ],
};

const ITEMS_PER_PAGE = 4;

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("napoje");
  const [page, setPage] = useState(1);

  // při přepnutí kategorie skoč na stranu 1
  useEffect(() => {
    setPage(1);
  }, [activeCategory]);

  const allItems = MENU[activeCategory];
  const totalPages = Math.max(1, Math.ceil(allItems.length / ITEMS_PER_PAGE));

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const visibleItems = allItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className={menuSection}>
      <div className={menuInner}>
        <header className={menuHeader}>
          <h1 className={menuTitle}>Menu a bar</h1>
          <p className={menuSubtitle}>
            Načerpejte energii k náročným partiím. Od výběrového piva přes drinky bez
            alkoholu až po teplé speciality.
          </p>
        </header>

        <nav className={pillNav} aria-label="Kategorie menu">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={activeCategory === cat.id ? pillButtonActive : pillButton}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </nav>

        <div className={itemsList}>
          {visibleItems.map((item) => (
            <article key={item.id} className={itemCard}>
              <div className={itemHeader}>
                <div className={itemLeft}>
                  <h2 className={itemTitle}>{item.name}</h2>
                  {item.description && (
                    <p className={itemDescription}>{item.description}</p>
                  )}
                  {item.meta && <p className={itemMeta}>{item.meta}</p>}
                </div>

                <div className={itemPriceWrapper}>
                  <span className={itemPriceTag}>cena</span>
                  <span className={itemPrice}>{item.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* PAGINACE */}
        {totalPages > 1 && (
          <div className={paginationWrapper}>
            <span className={paginationInfo}>
              Strana {page} / {totalPages}
            </span>

            <div className={paginationButtons}>
              <button
                type="button"
                className={paginationButton}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Předchozí
              </button>

              {Array.from({ length: totalPages }, (_, i) => {
                const pageNumber = i + 1;
                const isActive = pageNumber === page;
                return (
                  <button
                    key={pageNumber}
                    type="button"
                    className={
                      isActive ? paginationButtonActive : paginationButton
                    }
                    onClick={() => setPage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                type="button"
                className={paginationButton}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Další
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
