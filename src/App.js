import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdfFile from './GasBill.pdf'
import { pdfjs } from 'react-pdf';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PdfViewer from './pdfViewer';
import Home from './home';

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(null);
  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdfViewer" element={<PdfViewer />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
