import { useState } from 'react'
import React from 'react'
import { MdCloudUpload } from 'react-icons/md'
import './uploader.css'

function Uploader() {
  const[image, setImage] = useState(null)
  const[fileName, setFileName] = useState("No selected file")
  return (
    <main class="content">
      {/*prompt user to select an image */}
      <form action="" onClick={() => document.querySelector(".input-field").click()}>
        <input type="file" accept='image/*' className='input-field' hidden
        onChange={({target: {files}}) => {
          //create file array after user selects image, put the image in the array as the first element and set the image.//
          files[0] && setFileName(files[0].name)
          if(files.length !== 0){
            setImage(window.webkitURL.createObjectURL(files[0]))
          }
          else setImage(null)
        }}
        />
        {/*render image if it exists.*/}
        {image ? 
        <img src={image} width={400} height={400} alt={fileName} id='filterableImage'/>
        :
        <>
        <MdCloudUpload color='#1475cf' size={50} />
        <p>Choose Image to Upload</p>
        </>
      }
      </form>



      <div id="gallery">


        {/*apply different color filters defined in CSS files*/}
        <div class="img-text">
            <img src={image} width={400} height={350} position='center' alt={""} className="protanopia"/>
            <p class="img-text">Protanopia</p>
        </div>
        <div class="img-text">
            <img src={image} width={400} height={350} position='center' alt={""} className="tritanopia"/>
            <p class="img-text">Tritanopia</p>
        </div>
        <div class="img-text">
            <img src={image} width={400} height={350} position='center' alt={""} className="deuteranopia"/>
            <p class="img-text">Deuteranopia</p>
        </div>
      </div>
    </main>
  )
  
}

export default Uploader