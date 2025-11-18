import { loadingWrapper, spinner } from "./styles"

const LoadingPage = () => {
  return (
    <div className={loadingWrapper}>
      <div className={spinner} />
    </div>
  )
}

export default LoadingPage
