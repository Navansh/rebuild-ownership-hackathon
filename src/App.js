import "./App.css";
import { useState } from "react";
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
import { Routes, Route } from "react-router-dom";
import  Home  from "../src/components/Home";
import Dashboard from "./components/Dashboard";
const runtimeConnector = new RuntimeConnector(Extension);

const app = "test001"; //fxy001 (mainnet)   test001 (testnet)
const slug = "test001";
const postVersion = "0.0.1";

const modelId =
  "kjzl6hvfrbw6c9k5a5v8gph1asovcygtq10fhuhp96q527ss6czmy95eclkdhxo"; // (testnet)
// kjzl6hvfrbw6c7gkypf9654o0vu1jd1q85fcnyrpc1koobuys71zhp0m7kbmrvs // (mainnet)
const storageProvider = {
  name: StorageProviderName.Lighthouse,
  apiKey: "152ea4b1.65eecbe7e75645c0b3c9cbdad33fa252", // input your api key to call uploadFile successfully
};

function App() {
  const [address, setAddress] = useState("");
  const [wallet, setWallet] = useState();
  const [pkh, setPkh] = useState("");
  const connectWallet = async () => {
    try {
      console.log("hi");
      const res = await runtimeConnector.connectWallet(wallet);
      console.log(res);
      setWallet(res.wallet);
      setAddress(res.address);
      console.log(res.address);
      return address;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="overall">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
