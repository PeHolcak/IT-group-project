import { loadingWrapper, loadingCard } from "./styles"

const LoadingPage = () => {
    return (
        <div className={loadingWrapper}>
            <div className={loadingCard} aria-busy="true" aria-live="polite">
                <p>Načítání…</p>
            </div>
        </div>
    )
}

export default LoadingPage
