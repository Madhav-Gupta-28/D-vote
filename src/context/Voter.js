import React , {useState} from "react"
import Web3Modal from "web3modal"
import {ethers} from "ethers"
import axios from "axios";
import { BrowserProvider , Routes , Route } from "react-router-dom";


import {address , abi} from "./constants.js"

const fetchContract = (provider) => {
    new ethers.Contract(address,abi,provider)
}


const Voter = () => {
  return (
    <div>Voter</div>
  )
}

export default Voter