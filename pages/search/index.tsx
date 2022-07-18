import type { NextPageWithLayout } from '../_app'
import type { ReactElement } from 'react'
import Layout from '../../src/components/page-structure/Layout'
import SearchModule from '../../src/components/page-structure/SearchModule'

const Search: NextPageWithLayout = () => {
  return (
    <div>
          <SearchModule />
    </div>
  )
}

Search.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Search