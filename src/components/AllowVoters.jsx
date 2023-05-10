import React , {useContext , useState, useEffect,useCallback} from 'react'
import { VotingContext } from '../App.js'
import {useDropzone} from 'react-dropzone'

import Button  from  "./Button/Button.jsx"
import Input from "./Input/Input.jsx"
import "./AllowVoter.css"




const Allowedvoters = () => {
    const [fileurl , setfileurl] = useState(null)
    const [forminput,setforminput] = useState({
      name : "",
      address: "",
      position:""
    });
    const [votersarray , setvotersarray] = useState([])

  const {uploadtoIPFS} = useContext(VotingContext)

  // voters image drop 

  const onDrop = useCallback(async(acceptedFil) => {
    const url = await uploadtoIPFS(acceptedFil[0])
    setfileurl(url)
  })

  const {getRootProps , getInputProps} = useDropzone({
    onDrop,
    accept:"image/*",
    maxSize:5000000,

  })
 
  return (
    <div className='allowedvoter'>
      {fileurl ?  (
        <div className='voterinfo'>
        <img src={fileurl}  alt='voter image'/>
        <div className='voterinfo-para'>
          <p>
              Name:<span>&nbps;{forminput.name}</span>
              
          </p>
          <p>
            Address : <span>&nbps;{forminput.address}</span>
          </p>

          <p>
            Position : <span>&nbps;{forminput.position}</span>
          </p>
          
        </div>
        </div>
      ) :
      <div className='notuploaded'>
        <div>
          <h3>Create Candidate for Voting </h3>
          <p>D-Voting Corporation</p>
          <p className='inpit'>Contract Candidate</p>
          <div>
            <div className='card'>
              {votersarray.map((el,i) => (
                <div className='card_box'>
                  <div key={i+1} className='image'>
                    <img src={el.image} alt='photp' />
                  </div>
                  <div className='card_info'>
                    <p>
                      name
                    </p>
                    <p>
                      address
                    </p>
                    <p>
                      Deatails
                    </p>

                  </div>
                </div>
              ))}
            </div>

            <div className='voter'>
                  <div className='voter_container'> 
                    <h1>Create new Voter </h1>
                    <div className='voter_container_box'>
                      <div className='voter_container_box_div'>
                        <div {...getRootProps()}>
                          
                          <input {...getInputProps()} />

                          <div className='voter_container-box-info'>
                            <p>
                              Upload File : JPG , PNG  ,GIF Max Size 10Mb
                            </p>
                            <div className='voter_conatiner-div-box-image'>
                              <img src='' alt='file upload ' />

                            </div>

                            <p>Drag & Drop</p>
                            <p>Browse Media</p>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
            </div>
          </div>

         
        </div>
         </div>
      }
       <div className='input-container'> 
          <Input  inputtype="text" title="Name" placeholder="Voter Name " 
          handleClick={(e) => setforminput({...forminput,name:e.target.value})}
          />
            <Input  inputtype="text" title="Address" placeholder="Voter Address " 
          handleClick={(e) => setforminput({...forminput,address:e.target.value})}
          />
            <Input  inputtype="text" title="Position" placeholder="Voter Position " 
          handleClick={(e) => setforminput({...forminput,position:e.target.value})}
          />

          </div>

          <div className='button-div'>
              <Button btnName="AuthoriseVoter" handleClick={() => {}}  />
          </div>

          <div className='created-voter'>
            <div className='creater-voter-info'>
              <img src='' alt='user photo' />
              <p>Notice for user </p>
              <p>Organiser <span>address here comes </span></p>
              <p>Only Orgainzer of the voting contract can create voter </p>

            </div>

          </div>
    </div>
  )
}

export default Allowedvoters