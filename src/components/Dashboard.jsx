
import React from "react";
import {FiCloud} from "react-icons/fi";
import {BsBox, BsPersonCircle} from "react-icons/bs";
import {AiOutlineShareAlt, AiOutlineDelete} from "react-icons/ai";
import {MdOutlineStarRate} from "react-icons/md";
import {AiOutlineSearch, AiOutlineUser} from "react-icons/ai";
import {AiOutlineFileImage} from "react-icons/ai";
import { FcAudioFile, FcVideoFile , FcImageFile, FcFile, FcAreaChart} from "react-icons/fc";
import {IoDocumentsOutline} from "react-icons/io5";
import {IoMdDocument} from "react-icons/io";
import {FiMoreHorizontal} from "react-icons/fi";
import { useState } from "react";

const Dashboard = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleUpload = () => {
      console.log(selectedFile);
      // Add the logic to upload the file to the Dataverse's Server
    };

    return (
    <div className=" max-w-[1440px] h-screen mx-auto py-6 flex flex-row">
        {/* //Sidebar  */}
        <div className="w-[20%] px-4 rounded-lg max-h-[800px] bg-[#18192D] flex flex-col text-white ">
            <div className=" flex flex-row items-center gap-5">
                <p className=" text-[30px]">DocProtect </p>
                <span><FiCloud></FiCloud></span>
            </div>

            <div className=" mt-[100px] flex flex-col items-center" >
            <input type="file" onChange={handleFileChange} className="file-input file-input-bordered file-input-info w-full max-w-xs" />
                <button onClick={handleUpload} className="nav-ctf mt-5">Upload</button>
            </div>

            <div className=" mt-[150px] flex flex-col gap-3 text-[23px]">
                <div className=" bg-[#1C2334] rounded-lg py-2 px-2 flex gap-5 items-center">
                    <BsBox></BsBox>
                    <p>Dashboard</p>
                </div>

                <div className=" flex gap-5 items-center">
                    <AiOutlineShareAlt></AiOutlineShareAlt>
                    <p>Shared</p>
                </div>
                <div className=" flex gap-5 items-center">
                    <MdOutlineStarRate></MdOutlineStarRate>
                    <p>Starred</p>
                </div>
                <div className=" flex gap-5 items-center">
                    <AiOutlineDelete></AiOutlineDelete>
                    <p>Deleted</p>
                </div>

            </div>


        </div>

        {/* Main Section  */}
        <div className="w-[60%] px-4 flex flex-col text-white">
            <div className=" flex gap-2 items-center">
                <textarea name="" id="" cols="30" rows="2" className=" rounded-lg w-full"></textarea>
                <AiOutlineSearch className=" text-[30px]"></AiOutlineSearch>
            </div>

            <div className="flex flex-col text-white mt-5 w-full">
                <p className=" text-[30px]">Category</p>
                <div className="flex flex-row justify-evenly mt-5">
                    <div className=" flex flex-col rounded-lg items-center border py-3 px-4 border-gray-400">
                        <FcImageFile className=" text-[50px]"></FcImageFile>
                        <p>Image</p>
                        <p>477 files</p>
                    </div>

                    <div className=" flex flex-col rounded-lg items-center border py-3 px-4 border-gray-400">
                        <FcFile className=" text-[50px]"></FcFile>
                        <p>Document</p>
                        <p>477 files</p>
                    </div>

                    <div className=" flex flex-col rounded-lg  items-center border py-3 px-4 border-gray-400">
                        <FcAudioFile className=" text-[50px]"></FcAudioFile>
                        <p>Audio</p>
                        <p>477 files</p>
                    </div>

                    <div className=" flex flex-col rounded-lg items-center border py-3 px-4 border-gray-400">
                        <FcVideoFile className=" text-[50px]"></FcVideoFile>
                        <p>Video</p>
                        <p>477 files</p>
                    </div>
                </div>


            </div>

            <div className=" mt-5">
                <p className=" text-[30px]">Recent Files</p>
                <div className=" flex flex-col gap-2">
                    <div className=" flex flex-row border-b-2 items-center gap-8 justify-around">
                        <FcAreaChart className=" text-[40px]"></FcAreaChart>
                        <p className=" text-[23px]">My Report.docx</p>
                        <p>7 MB</p>
                        <FiMoreHorizontal  className=" text-[30px]"/>
                    </div>

                    <div className=" flex flex-row border-b-2 items-center gap-8 justify-around">
                        <FcAreaChart className=" text-[40px]"></FcAreaChart>
                        <p className=" text-[23px]">My Report.docx</p>
                        <p>7 MB</p>
                        <FiMoreHorizontal  className=" text-[30px]"/>
                    </div>

                    <div className=" flex flex-row border-b-2 items-center gap-8 justify-around">
                        <FcAreaChart className=" text-[40px]"></FcAreaChart>
                        <p className=" text-[23px]">My Report.docx</p>
                        <p>7 MB</p>
                        <FiMoreHorizontal  className=" text-[30px]"/>
                    </div>

                    <div className=" flex flex-row border-b-2 items-center gap-8 justify-around">
                        <FcAreaChart className=" text-[40px]"></FcAreaChart>
                        <p className=" text-[23px]">My Report.docx</p>
                        <p>7 MB</p>
                        <FiMoreHorizontal  className=" text-[30px]"/>
                    </div>

                    <div className=" flex flex-row border-b-2 items-center gap-8 justify-around">
                        <FcAreaChart className=" text-[40px]"></FcAreaChart>
                        <p className=" text-[23px]">My Report.docx</p>
                        <p>7 MB</p>
                        <FiMoreHorizontal  className=" text-[30px]"/>
                    </div>

                    <div className=" flex flex-row border-b-2 items-center gap-8 justify-around">
                        <FcAreaChart className=" text-[40px]"></FcAreaChart>
                        <p className=" text-[23px]">My Report.docx</p>
                        <p>7 MB</p>
                        <FiMoreHorizontal  className=" text-[30px]"/>
                    </div>

                    <div className=" flex flex-row border-b-2 items-center gap-8 justify-around">
                        <FcAreaChart className=" text-[40px]"></FcAreaChart>
                        <p className=" text-[23px]">My Report.docx</p>
                        <p>7 MB</p>
                        <FiMoreHorizontal  className=" text-[30px]"/>
                    </div>
                </div>

            </div>
        </div>

        <div className=" w-[20%] flex flex-col text-white ml-9 items-center">
            <div className=" flex gap-4 items-center">
                <AiOutlineUser className=" text-[30px]"></AiOutlineUser>
                <p className=" text-[23px]">Hello Degen !</p>
            </div>

            <div className="stats stats-vertical bg-primary gap-x-1 text-primary-content relative top-[9.25rem] -left-[1rem]">
                <div className="stat gap-x-1">
                    <div className="stat-title">Account Storage</div>
                    <div className="stat-value">1 TB</div>
                    <div className="stat-actions">
                    <button className="btn btn-sm btn-success">Add more</button>
                    </div>
                </div>
                
                <div className="stat">
                    <div className="stat-title">Current Usage</div>
                    <div className="stat-value">512.75 GB</div>
                    <div className="stat-actions">
                    <button className="btn btn-sm">Optimize</button> 
                    </div>
                </div>
            </div>
        </div>
        {/* Last Section  */}
    </div>
);}


export default Dashboard ;