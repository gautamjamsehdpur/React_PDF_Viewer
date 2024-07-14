import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    function viewPdf()
    {
        navigate('/pdfViewer');
    }
    return (
        <div className="App">
            <button onClick={viewPdf}>Click the button!</button>
        </div>
    );
};
export default Home;