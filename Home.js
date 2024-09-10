import React, { useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { VscSend } from "react-icons/vsc";
import Header from '../components/Header';
import { toast } from 'react-toastify';

const Home = () => {
    const [formData, setFormData] = useState({
        txtToSummarize: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const [generatedSummery, setGeneratedSummery] = useState("");

    const handleSummary = async (e) => {
        const toastId = toast.loading("Generating summary...", {
            position:"bottom-right",
        });
        try {
            e.preventDefault();
            const result = await axios.post("http://127.0.0.1:5000/summary", formData);
            toast.update(toastId, { render: "Summary generated successfully!", type: "success", isLoading: false, autoClose: 5000});
            console.log(result.data);
            setGeneratedSummery(result.data.summary);

        } catch (error) {
            console.log(error);
            toast.update(toastId, { render: `Error: ${error.message}`, type: "error", isLoading: false, autoClose: 5000 });
        }
        console.log(generatedSummery);
    }


    

    return (
        <div className=' main'>
            <Layout>
                {/* <h1 className='head'>
                    <FaFilePen />
                    Summarizer
                </h1> */}
                <Header/>
                <hr />
                <div className='mainbody'>
                <div className='upper'>
                    {/* <h5>Provide text to summarize:</h5> */}
                    <h2>Paste text :</h2>
                    <form onSubmit={handleSummary} method='post'>
                        {/* <input type='text' name='txtToSummarize' value={formData.txtToSummarize} onChange={handleChange} /> */}
                        <textarea className='txt' name='txtToSummarize' value={formData.txtToSummarize} onChange={handleChange}></textarea>
                        <button className='btn'>Summarize text <VscSend /></button>
                    </form>
                </div>
                <div className='lower'>
                    <h2>Summary :</h2>
                    <p className='para'>{generatedSummery}</p>
                </div>
                </div>
            </Layout>
        </div>
    )
}

export default Home;
