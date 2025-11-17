// app/menu/MenuPageClient.tsx
"use client";

import { useEffect, useState } from "react";
import type { Category, CategoryDef, MenuItem } from "../../actions";
import { MenuHeader } from "./MenuHeader";
import { CategoryPills } from "./CategoryPills";
import { MenuItemsList } from "./MenuItemsList";
import { Pagination } from "./Pagination";

const ITEMS_PER_PAGE = 4;

type Props = {
    categories: CategoryDef[];
    menu: Record<Category, MenuItem[]>;
};

export const MenuPageClient = ({ categories, menu }: Props) => {
    const [activeCategory, setActiveCategory] = useState<Category>("napoje");
    const [page, setPage] = useState(1);

    useEffect(() => {
        setPage(1);
    }, [activeCategory]);

    const allItems = menu[activeCategory] ?? [];
    const totalPages = Math.max(1, Math.ceil(allItems.length / ITEMS_PER_PAGE));

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const visibleItems = allItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <>
            <MenuHeader />

            <CategoryPills
                categories={categories}
                activeCategory={activeCategory}
                onChange={setActiveCategory}
            />

            <MenuItemsList items={visibleItems} />

            <Pagination currentPage={page} totalPages={totalPages} onChange={setPage} />
        </>
    );
};
