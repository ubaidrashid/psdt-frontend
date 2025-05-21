import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Contact } from './Pages/Contact.js';
import { DL } from './Pages/Dl.js';
import { ID } from './Pages/ID.js';
import { PR } from './Pages/PR.js';
import { BasicExample } from './Components/Nav/index.js'; // ✅ Navbar
import { Home } from './Pages/Home/index.js';
import { Others } from './Pages/Others.js';
import { Bill } from './Pages/Bill.js';
import { PP } from './Pages/PP.js';
import { PDF } from './Pages/PDF.js';
import { Statement } from './Pages/Statement.js';
import { Vector } from './Pages/Vector.js';
import { USA } from './Pages/USA.js';
import { DetailedCard } from './Pages/detailcard/index.js';
import {About} from "./Pages/about.js"
import { EditDocumentDetail } from './Pages/EditDocumentDetailsPage/index.js';
import Footer from './Components/Footer/footer.js';

function App() {
  return (
    <Router>
      <BasicExample /> {/* ✅ This stays always on top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/id" element={<ID />} />
        <Route path="/dl" element={<DL />} />
        <Route path="/pr" element={<PR />} />
        <Route path="/bill" element={<Bill />} />
        <Route path="/pp" element={<PP />} />
        <Route path="/statement" element={<Statement />} />
        <Route path="/pdf" element={<PDF />} />
        <Route path="/vector" element={<Vector />} />
        <Route path="/other" element={<Others />} />
        <Route path="/usa" element={<USA />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/detailcardpage/:id" element={<DetailedCard />} />
        <Route path="/editdocumentdetails" element={<EditDocumentDetail />} />
      </Routes>
        <Footer />
    </Router>

  );
}

export default App;
