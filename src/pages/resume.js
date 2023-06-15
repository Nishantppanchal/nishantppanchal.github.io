import * as React from "react"
import PageTemplate from "../components/pageTemplate"
import Page from "../enums/pages"

const NotFoundPage = () => {
  return (
    <PageTemplate page={Page.Resume}>
      <section>
        <div class="font-bold text-xl">Education</div>
      </section>
    </PageTemplate>
  )
}

export default NotFoundPage
