import { QuartzComponent, QuartzComponentConstructor } from "./types"

const Headshot: QuartzComponent = () => {
  return (
    <div class="page-title">
      <a class="headshot" href="/">
        <img src="/static/headshot.png" alt="Christopher Klint" />
      </a>
    </div>
  )
}

Headshot.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  margin-right: auto;
}
.headshot img {
  z-index: 998;
  border: 4px solid var(--lightgray);
  border-radius: 1000px;
  max-width: 80px;
  max-height: 80px;
  margin: 0;
  position: relative;
}
`

export default (() => Headshot) satisfies QuartzComponentConstructor
