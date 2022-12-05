import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import TopBar from './scenes/global/TopBar'
import SideBar from './scenes/global/SideBar'
import Dashboard from './scenes/dashboard/Dashboard'
import Team from './scenes/team/Team'
import Invoices from './scenes/invoices/Invoices'
import Contacts from './scenes/contacts/Contacts'
// import Bar from './scenes/global/Bar'
// import Form from './scenes/global/Form'
// import Line from './scenes/global/Line'
// import Pie from './scenes/global/Pie'
// import FAQ from './scenes/global/FAQ'
// import Geography from './scenes/global/Geography'
// import Calendar from './scenes/global/Calendar'


const App = () => {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <SideBar />
          <main className='content'>
            <TopBar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              {/* <Route path='/form' element={<Form />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/line' element={<Line />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/geography' element={<Geography />} />
              <Route path='/calendar' element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App