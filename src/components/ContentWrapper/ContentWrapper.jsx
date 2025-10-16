/**
 * @param {*} props
 * @returns
 */
export const ContentWrapper = ({ title, subtitle, description, hidetitle, children }) => {
  document.title = title;

  if (description) {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }

  return (
    <>
      <section>
        <div>
          {!hidetitle && (
            <h1 className="text-3xl">{title}</h1>
          )}
          {subtitle && <h3>{subtitle}</h3>}
        </div>
        <div>{children}</div>
      </section>
    </>
  )
}
