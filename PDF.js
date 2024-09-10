import React, { useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import Header from '../components/Header';
import { toast } from 'react-toastify';

const PDF = () => {

    const [file, setFile] = useState(null);
    const [summary, setSummary] = useState("")

    const upload = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        console.log(formData)
        const toastId = toast.loading("Generating summary...", {
            position:"bottom-right",
        });
        try {
            e.preventDefault();
            toast.success("PDF Uploaded",{
                position:"bottom-right",
            });
            const result = await axios.post("http://127.0.0.1:5000/pdfSummary", formData);
            toast.update(toastId, { render: "Summary generated successfully!", type: "success", isLoading: false, autoClose: 5000});
            setSummary(result.data.summary)

        } catch (error) {
            toast.update(toastId, { render: `Error: ${error.message}`, type: "error", isLoading: false, autoClose: 5000 });
        }
    }

    return (
        <>
            <Layout>
                <div className=' main'>
                    <Header />
                    <hr />
                    <div className='mainbody'>
                        <div className="center">
                            <h2>Upload PDF :</h2>
                            <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
                                <input className="file" type="file" accept="application/pdf" name="testReport" onChange={upload} required />
                                <button className="op btn">Upload</button>
                            </form>
                        </div>
                        <div className='lower'>
                            <h2>Summary :</h2>
                            <p className='para'>{summary}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default PDF;
