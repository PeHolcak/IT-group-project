import { menuHeader, menuTitle, menuSubtitle } from "./styles";

export const MenuHeader = () => (
    <header className={menuHeader}>
        <h1 className={menuTitle}>Menu a bar</h1>
        <p className={menuSubtitle}>
            Načerpejte energii k náročným partiím. Od výběrového piva přes drinky bez
            alkoholu až po teplé speciality.
        </p>
    </header>
);
