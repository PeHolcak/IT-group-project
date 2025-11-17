
import { getMenuData } from "./actions";
import { MenuPageClient } from "./_components/MenuPageClient";
import { menuSection, menuInner } from "./styles";

export default async function MenuPage() {
  const { categories, menu } = await getMenuData();

  return (
    <section className={menuSection}>
      <div className={menuInner}>
        <MenuPageClient categories={categories} menu={menu} />
      </div>
    </section>
  );
}
