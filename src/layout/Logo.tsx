export default ({ collapsed }: { collapsed: boolean }) => {
  return (
    <div class="app-layout-logo" onClick={() => (location.href = '/')}>
      <img src="/assets/logo.png" alt="Logo" />
      {collapsed ? null : <h1>{import.meta.env.VITE_APP_NAME}</h1>}
    </div>
  )
}
