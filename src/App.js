
import './App.css';
import React, {useState } from 'react';
import Navbar from "./components/Navbar/Navbar.jsx"
import { BrowserRouter , Route,Routes} from 'react-router-dom';
import Countdown from "react-countdown"
import { click } from '@testing-library/user-event/dist/click';
import { create } from "ipfs-http-client"
import Allowedvoters from './components/AllowVoters';


export const VotingContext = React.createContext(null);

function App() { 

  // defining client 
  const client = create("https://ipfs.infura.io:5001/api/v0")

  // candidate 
  const [currentAccount , setcurrentAccount] = useState('')
  const [candidateLength , setcandidateLength ] = useState('')
  const pushcandidate = [];
  const candidateIndex = []
  const [candidateArray , setcandidateArray] = useState(pushcandidate)
  const creator = 'madhav'

  


  // states for error 
    const [error, seterror] = useState('')
    const highestVote = []


    // voter 
    const pushVoter = []
    const [voterArray , setvoterArray] = useState(pushVoter)
    const [voterLength , setvoterLength] = useState([]);
    const [voterAddress , setvoterAddress] = useState([])


    // connecting wallet 

    const connectMetamask  = async()  => {
      if(!window.ethereum) return seterror('Metamask is not installed /n Please Install Metamask') 

      const account  = await window.ethereum.request({method:"eth_requestAccounts",})
      console.log(account)

      if(account.length){
        setcurrentAccount(account[0])
        console.log(currentAccount)
      }else{
        seterror('Please Install Metamask & Connect and Reload it ')
      }
    }


    // ipfs 

    const uploadtoIPFS = async(file) => {
          try{
            const added = await client.add({content:file})
            console.log(added.cid)
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            return url
          }catch(error){
            seterror('Error Occured while Uploading file to IPFS. Please Try Again')
          }
    }
    

  return (
    <>
      <VotingContext.Provider value={{creator , connectMetamask , uploadtoIPFS}}>
       <BrowserRouter>
       <Navbar/>
       <Allowedvoters/>
       <Routes>

       </Routes>
       </BrowserRouter>
      </VotingContext.Provider>

    </>
    
  );
}

export default App;
