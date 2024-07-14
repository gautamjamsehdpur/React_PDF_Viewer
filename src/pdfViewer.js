import React from 'react';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdfFile from './Doc.pdf'
import { pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
const PdfViewer = () => {    
    const [numPages, setNumPages] = useState(null);
    //const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div>
            <div>
                <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess} renderTextLayer={false} renderAnnotationLayer={false} >
                    {
                        Array(numPages).fill().map((_, i) => (
                            <Page pageNumber={i+1} key={i} width={400}/>
                        ))
                    }
                </Document>
            </div>
        </div>
    );
};

export default PdfViewer;