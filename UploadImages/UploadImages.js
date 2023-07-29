import React,{useContext, useState } from 'react'
import './UploadImages.css'
import styled from 'styled-components'
// import { CloudEvent } from '../App' 


const Line = styled.div`
position: absolute;
${()=> {
  if(window.innerWidth < 459){
    return 'width: 100vw;'
  }
  return 'width: 60vw;'
}}

height: 1.5px;
background: black;
opacity: .15;
left: 0;
${(props)=> props.side}: 0;
`
const Bottom =styled.div`
position: relative;
display: flex;
justify-content: end;
align-items: center;
${()=> {
  if(window.innerWidth < 459){
    return 'width: 100vw;'
  }
  return 'width: 60vw;'
}}
`
const Button = styled.div`
${()=> {
  if(window.innerWidth < 480){
    return 'width: 90px;height: 30px;font-size: 14px;'
  }else{
    return 'width: 120px;height: 40px;'
  }
}}

background: ${(props)=> props.color};
color: white;
display: flex;
align-items: center;
justify-content: center;
border-radius: 4px;
margin-right: 3vw;
`



function UploadImages() {
    // const {events, setevents} = useContext(CloudEvent)
    function closePopupImages(){ ////////////////////////////////////////////////////////////////////
    //     setevents((item)=>{
    //       return { ...item, uploadeImages:null}
    // })

    // your funtion close popup UploadImages
  }
    const [Images, setImages] = useState([
        'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?cs=srgb&dl=pexels-christian-heitz-842711.jpg&fm=jpg',
        'https://images4.alphacoders.com/168/thumb-1920-168614.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmI-tYxWeIZGoMENNS2GaHjr1BZi-t9Qg1plI-NBRiW4ZHksHQdaSl1eokWBGv66Vd8k&usqp=CAU',
        'https://png.pngtree.com/background/20221103/original/pngtree-4k-neon-light-wallpaper-picture-image_1944501.jpg',
        'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://wallpapersmug.com/large/59a776/glacier-mountains-iceland.jpg',
    ])
    function ImageToText(e){
      console.log(e.target.files);
      const data = new FileReader();
      data.addEventListener('load',()=> setImages((item) =>{ return [...item , data.result]} ))
      data.readAsDataURL(e.target.files[0])
    }

    function centerImge(){
        const Images = document.querySelectorAll('.child_img_upload');
        if( window.innerWidth < 459){
          Images.forEach((item, index) => {
            if(item.width >= item.height){
              item.style.height = '60vw'
              item.style.width = 'auto'
            }else{
              item.style.height = 'auto'
              item.style.width = '60vw'
            }
          });
        }
        else{
          Images.forEach((item, index) => {
            if(item.width >= item.height){
              item.style.height = '20vw'
              item.style.width = 'auto'
            }else{
              item.style.height = 'auto'
              item.style.width = '20vw'
            }
          });
        }
        
      }
      

    const picture = Images.map((item,index)=>{
        return (
            <div className='Realative' key={index}>
                <div className='circle_white_bg'></div>
                <i class="fa-solid fa-circle-xmark" id='close_upload_img' onClick={()=>{
                  setImages((item) => {
                    return item.filter((icon,number)=> number !== index)
                  })
                }}></i>
                <div className='UploadImages_bg'>
                    <img src={item} className='child_img_upload' onLoad={centerImge} />
                </div>
            </div>
        )
    })
  return (
    <div>
        <div className='popup_upload' onClick={closePopupImages}></div>
        <div className='container_popup_upload'>
            <div className='center'>
                <h3>รูปภาพ</h3>
                <i class="fa-solid fa-circle-xmark" id='close_upload_img' onClick={closePopupImages}></i>
                <div className='circle_white_bg'></div>
                <Line side='bottom' />
            </div>
            <div className='scrollY'>
                <div className='UploadImages'>
                    {picture}
                </div>
            </div>
            
            <Bottom>
                <input id="files" className='inputfile' type="file" onChange={ImageToText} />
                <Button color='#575757'><label for="files" >เพิ่มรูปภาพ</label></Button>
                <div onClick={closePopupImages}>
                    <Button color='#6967C7'>ยืนยัน</Button>
                </div>
                
                <Line side='top' />
            </Bottom>
        </div>
    </div>
    
  )
}

export default UploadImages