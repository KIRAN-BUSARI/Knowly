import { Routes, Route } from 'react-router-dom';

//components
import AuthHome from './components/AuthHome.js';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import Webpay from './components/Webpay';
import Payment from './components/Payment';
import Chat from './components/Chat';
import CommunityPage from './components/CommunityPage';
import JoinCommunity from './components/JoinCommunity';
import Checkout from './components/Checkout';


function App() {
  return (
    <Routes>
      <Route path="/payment/webpay" element={<Webpay />} />
      <Route path="/auth-home" element={<AuthHome />} />
      <Route path="/" element={<Home />} />
      <Route path='/chatbot' element={<Chat />} />
      <Route path="/communityPage" element={<CommunityPage />} />
      <Route path="/join-community" element={<JoinCommunity />} />
      <Route path="/courses/checkout" element={<Checkout />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<AuthHome />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route
        path="/reset-password/:resetPasswordToken"
        element={<ResetPassword />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
