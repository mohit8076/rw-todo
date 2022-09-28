// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route } from '@redwoodjs/router'
import HomePage from './pages/HomePage/HomePage'

const Routes = () => {
  return (
    <Router>
      <Route path="/home" page={HomePage} name="home" />
      {/* <Private unauthenticated="home"> */}
        <Route path="/admin/todo" page={TodoPage} name="todo" />
        <Route notfound page={NotFoundPage} />
      {/* </Private> */}
    </Router>
  )
}

export default Routes
