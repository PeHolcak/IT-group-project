import { getMenuData } from "./actions"
import { MenuPageClient } from "./_components/MenuPageClient"
import { menuSection } from "./styles"

export default async function MenuPage() {
  const { categories, menu } = await getMenuData()

  return (
    <section className={menuSection}>
      <MenuPageClient categories={categories} menu={menu} />
    </section>
  )
}
