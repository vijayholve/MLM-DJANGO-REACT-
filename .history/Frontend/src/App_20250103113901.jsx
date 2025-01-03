<Router>
<div>
  <Navbar />
  <div className="container-fluid">
    <div className="row">
      <Sidebar />
      <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
    </div>
  </div>
</div>
</Router>