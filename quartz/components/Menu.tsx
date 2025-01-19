import { QuartzComponent, QuartzComponentConstructor } from "./types"

const Menu: QuartzComponent = () => {
  return (
    <div class="flex header-links">
      <a class="header-link" href="/blog/">Blog</a>
      <a class="header-link" href="/contact">Contact</a>
    </div>
  )
}

Menu.css = `
.header-links {
  background-color: var(--light);
  padding-right: .5em;
  display: flex;
  overflow: hidden;
}
.header-link {
  color: var(--darkgray);
  font-family: var(--headerFont);
  padding: .75em .5em;
  font-size: 1.125rem;
  transition: all .2s ease-in-out;
}
.header-link:last-child {
  padding-right: 0;
}
`

export default (() => Menu) satisfies QuartzComponentConstructor
