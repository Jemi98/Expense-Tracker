import "./App.css";
import AddTransaction from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <div className="main">
          <div className="container">
            <Header />
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
        </div>
        <Footer />
      </GlobalProvider>
    </>
  );
}

export default App;
