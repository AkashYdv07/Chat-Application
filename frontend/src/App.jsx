import Login from "./pages/login/Login"
import SignUp from "./pages/signup/SignUp"

function App() {

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
    {/* <Login></Login> */}
    <SignUp></SignUp>
			{/* <Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
			</Routes>
			<Toaster /> */}
		</div>
  )
}

export default App
