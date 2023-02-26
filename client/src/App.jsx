import { ConnectWallet } from '@thirdweb-dev/react'
import { Route, Routes } from 'react-router-dom'
import './styles/index.css'

import { CampaignDetails, CreateCampaign, Home, Profile } from './pages'
import { Sidebar, Navbar } from './components'

const App = () => {
  return (
    <div className="relative sm:-8 p-4  min-h-screen bg-[#13131a] flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App