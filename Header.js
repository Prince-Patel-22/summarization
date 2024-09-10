import React, { useEffect, useState } from 'react';
import { FaFilePen } from "react-icons/fa6";
import {Link} from 'react-router-dom';
import { FaFilePdf } from "react-icons/fa6";
import { GrTextAlignLeft } from "react-icons/gr";

const Header = () => {
 
  const[active, setActive] = useState("Text");

  // const handleActive = (val)=>{
  //   setActive(val);
  // }
  // useEffect(()=>{
  //   handleActive()
  // }, []);

  return (
    <div>
      <nav>
        <h1 className='head-container'>
          <div className='head'>
          <FaFilePen />
          Summarizer
          </div>
          <ul className='nav-items'>
            <Link onClick={()=>{}} className={`${active === "Text" ? "link active" : "link"}`} to={"/"}><li><GrTextAlignLeft /> Text</li></Link>
            <Link onClick={()=>{}} className={`${active === "PDF" ? "link active" : "link"}`}  to={"/pdfSummary"}><li><FaFilePdf /> PDF </li></Link>
          </ul>
        </h1>
      </nav>
    </div>
  )
}

export default Header;
