import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Info from "./Info";
import { BrowserRouter } from "react-router-dom";
import { Result } from "./Result";
import { Scan } from "./\bScan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Info />} />
        <Route path="result" element={<Result />} />
        <Route path="scan" element={<Scan />} />

        {/* <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
