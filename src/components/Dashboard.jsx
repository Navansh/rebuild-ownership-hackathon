import React, { useEffect } from "react";
import { FiCloud } from "react-icons/fi";
import { BsBox, BsPersonCircle } from "react-icons/bs";
import { AiOutlineShareAlt, AiOutlineDelete } from "react-icons/ai";
import { MdOutlineStarRate } from "react-icons/md";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { AiOutlineFileImage } from "react-icons/ai";
import {
  FcAudioFile,
  FcVideoFile,
  FcImageFile,
  FcFile,
  FcAreaChart,
} from "react-icons/fc";
import { IoDocumentsOutline } from "react-icons/io5";
import { IoMdDocument } from "react-icons/io";
import { FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";
import lighthouse from "@lighthouse-web3/sdk";
import {
  RuntimeConnector,
  Extension,
  FolderType,
  StructuredFolders,
  Currency,
  Mode,
  StorageProviderName,
  DecryptionConditions,
  SignMethod,
  WALLET,
  RESOURCE,
} from "@dataverse/runtime-connector";
import { useNavigate } from "react-router-dom";
import Row from "./Row";
const app = "hitest"; //mainnet002 (mainnet)   test001 (testnet)
const slug = "test001";
const postVersion = "0.0.1";

const modelId =
  "kjzl6hvfrbw6c9k5a5v8gph1asovcygtq10fhuhp96q527ss6czmy95eclkdhxo"; // (testnet)
// kjzl6hvfrbw6c7zy79iqdnav50bustri0cnubdgshp4562iin3zdpkuivk0bqrq // (mainnet)
const storageProvider = {
  name: StorageProviderName.Lighthouse,
  apiKey: "6c25798c.81d6f7c5657f43b4bbbd21e745834b78", // input your api key to call uploadFile successfully
};
const runtimeConnector = new RuntimeConnector(Extension);
const Dashboard = ({ wallet, setWallet }) => {
  const [uploads, setUploads] = useState();
  const [pkh, setPkh] = useState("");
  const [currentPkh, setCurrentPkh] = useState("");
  const [pkpWallet, setPKPWallet] = useState({
    address: "",
    publicKey: "",
  });
  const [folderId, setFolderId] = useState("");
  const [indexFileId, setIndexFileId] = useState("");
  const [folders, setFolders] = useState();
  useEffect(async () => {
    const c = await lighthouse.getUploads(
      "0x6456368f9149DE6015d939f19571B231ab72297E"
    );
    setUploads(c);
    console.log("The value is ",setUploads);

    return () => {};
  }, []);

  const [selectedFile, setSelectedFile] = useState(null);

  const getDAppInfo = async () => {
    const appsInfo = await runtimeConnector.getDAppInfo(app);
    console.log(appsInfo);
    return appsInfo;
  };

  const createCapability = async () => {
    // await connectWallet();
    // // await switchNetwork();
    const pkh = await runtimeConnector.createCapability({
      app,
      resource: RESOURCE.CERAMIC,
      wallet,
    });
    setPkh(pkh);
    console.log(pkh);
    return pkh;
  };

  const getDefaultFolderId = async () => {
    if (!folders) {
      throw "Please call readFolders first";
    }
    const { defaultFolderName } = await getDAppInfo();
    const folder = Object.values(folders).find(
      (folder) => folder.options.folderName === defaultFolderName
    );
    return folder.folderId;
  };
  /*** Folders ***/

  /*** Files ***/
  const uploadFile = async (event) => {
    createCapability();
    try {
      const file = event.target.files[0];
      console.log(file);
      const fileName = file.name;

      const reader = new FileReader();
      reader.readAsDataURL(file);
      const fileBase64 = await new Promise((resolve) => {
        reader.addEventListener("load", async (e) => {
          resolve(e.target.result);
        });
      });

      console.log(fileBase64);

      const res = await runtimeConnector.uploadFile({
        folderId,
        fileBase64,
        fileName,
        encrypted: false,
        storageProvider,
      });
      setIndexFileId(res.newFile.indexFileId);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    console.log(selectedFile);
    // Add the logic to upload the file to the Dataverse's Server
  };

  return (
    <div className=' max-w-[1440px] h-screen mx-auto py-6 flex flex-row'>
      {/* //Sidebar  */}
      <div className='w-[20%] px-4 rounded-lg max-h-[800px] bg-[#18192D] flex flex-col text-white '>
        <div className=' flex flex-row items-center gap-5'>
          <p className=' text-[30px]'>DocProtect </p>
          <span>
            <FiCloud></FiCloud>
          </span>
        </div>

        <div className=' mt-[100px] flex flex-col items-center'>
          <input
            type='file'
            onChange={uploadFile}
            className='file-input file-input-bordered file-input-info w-full max-w-xs'
          />
          {/* <button onClick={uploadFile} className='nav-ctf mt-5'>
            Upload
          </button> */}
        </div>

        <div className=' mt-[150px] flex flex-col gap-3 text-[23px]'>
          <div className=' bg-[#1C2334] rounded-lg py-2 px-2 flex gap-5 items-center'>
            <BsBox></BsBox>
            <p>Dashboard</p>
          </div>

          <div className=' flex gap-5 items-center'>
            <AiOutlineShareAlt></AiOutlineShareAlt>
            <p>Shared</p>
          </div>
          <div className=' flex gap-5 items-center'>
            <MdOutlineStarRate></MdOutlineStarRate>
            <p>Starred</p>
          </div>
          <div className=' flex gap-5 items-center'>
            <AiOutlineDelete></AiOutlineDelete>
            <p>Deleted</p>
          </div>
        </div>
      </div>

      {/* Main Section  */}
      <div className='w-[60%] px-4 flex flex-col text-white'>
        <div className=' flex gap-2 items-center'>
          <textarea
            name=''
            id=''
            cols='30'
            rows='2'
            className=' rounded-lg w-full'
          ></textarea>
          <AiOutlineSearch className=' text-[30px]'></AiOutlineSearch>
        </div>

        <div className='flex flex-col text-white mt-5 w-full'>
          <p className=' text-[30px]'>Category</p>
          <div className='flex flex-row justify-evenly mt-5'>
            <div className=' flex flex-col rounded-lg items-center border py-3 px-4 border-gray-400'>
              <FcImageFile className=' text-[50px]'></FcImageFile>
              <p>Image</p>
              <p>477 files</p>
            </div>

            <div className=' flex flex-col rounded-lg items-center border py-3 px-4 border-gray-400'>
              <FcFile className=' text-[50px]'></FcFile>
              <p>Document</p>
              <p>477 files</p>
            </div>

            <div className=' flex flex-col rounded-lg  items-center border py-3 px-4 border-gray-400'>
              <FcAudioFile className=' text-[50px]'></FcAudioFile>
              <p>Audio</p>
              <p>477 files</p>
            </div>

            <div className=' flex flex-col rounded-lg items-center border py-3 px-4 border-gray-400'>
              <FcVideoFile className=' text-[50px]'></FcVideoFile>
              <p>Video</p>
              <p>477 files</p>
            </div>
          </div>
        </div>

        <div className=' mt-5'>
          <p className=' text-[30px]'>Recent Files</p>
          <div className=' flex flex-col gap-2'>
          {
            <>
            console.log(uploads);
            ((uploads))
                ?  
                {

                    uploads.map((upload) => {
                    return (
                        <Row fileName={upload.fileName} fileSize={upload.fileSizeInBytes}></Row>
                    )
                    })
                    
                } 
                :
                {
                    (
                        <div className=' flex flex-col gap-2'>
                            <div className=' flex flex-row gap-2 items-center'>
                                <FcFile className=' text-[50px]'></FcFile>
                                <p>No files uploaded yet</p>
                            </div>
                        </div>
                    )
                }
          
            </>
            
          }
          </div>
        </div>
      </div>

    {/* Last Section  */}
      <div className=' w-[20%] flex flex-col text-white ml-9 items-center'>
        <div className=' flex gap-4 items-center'>
          <AiOutlineUser className=' text-[30px]'></AiOutlineUser>
          <p className=' text-[23px]'>Hello Degen !</p>
        </div>

        <div className='stats stats-vertical bg-primary gap-x-1 text-primary-content relative top-[9.25rem] -left-[1rem]'>
          <div className='stat gap-x-1'>
            <div className='stat-title'>Account Storage</div>
            <div className='stat-value'>1 TB</div>
            <div className='stat-actions'>
              <button className='btn btn-sm btn-success'>Add more</button>
            </div>
          </div>

          <div className='stat'>
            <div className='stat-title'>Current Usage</div>
            <div className='stat-value'>512.75 GB</div>
            <div className='stat-actions'>
              <button className='btn btn-sm'>Optimize</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
