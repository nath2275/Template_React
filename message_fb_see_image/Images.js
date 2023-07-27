import React, { useEffect, useState } from 'react'
import './Images.css'
import styled from 'styled-components'

const Color = styled.div`
color: ${(props) => props.color};
font-size: 28px;
position: absolute;
left: 5vh;
top: 3vh;
`

const NextIcon = styled.div`
width: 10vh;
height: 10vh;
background: white;
border-radius: 100%;
opacity: .9;
display: flex;
align-items: center;
justify-content: center;
font-size: 24px;
position: absolute;
top: 40%;
transform: translateY(-50%);
${(props)=> {
  if(props.side === 'left'){
    return "left: 8vw;transform: rotate(180deg);"
  }else if(props.side === 'right'){
    return "right: 8vw;transform: rotate(0deg);"
  }
}}
`


function Images() {

  // fill images 
  const imgUrl = [
    'https://scontent.fbkk2-4.fna.fbcdn.net/v/t1.15752-9/361408992_1002451047424624_4766785465349382079_n.jpg?stp=dst-jpg_p280x280&_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeH4JuZH_yDJmsVdS9xx4feLzLRSFlkhKY7MtFIWWSEpjrMXJqy05QM4anQZrnfKtZra5hgU71Dm8ToSF8wI0nuE&_nc_ohc=DcMjfNIOwjAAX_eEY_9&_nc_ht=scontent.fbkk2-4.fna&oh=03_AdT5tbpd2GWj4M5CcT5feNH8RGCrtWdP6nPh5DRkkCXEhA&oe=64E977E5',
]


  function centerImge(){
    const Images = document.querySelectorAll('.child_img');
    Images.forEach((item, index) => {
      if(item.width >= item.height){
        item.style.height = '12vh'
        item.style.width = 'auto'
      }else{
        item.style.height = 'auto'
        item.style.width = '12vh'
      }
    });
  }
  // setTimeout(centerImge,10)
  const [positionImg,setpositionImg] = useState(0)
  const OPacity = styled.div`
  opacity: ${(props)=>{
    if(props.number === positionImg) return 1
    else return .4
  }};
  `

  let centerImg = 0
  if(imgUrl.length > 12){
    for(let i = 1;i < Math.ceil(imgUrl.length / 12) * 2 ;i++){
      if(positionImg > 6 * i) centerImg = 6 * i
      
    }
    if(positionImg <= 6) centerImg = 0
  }
  
  
  const number = [1,2,3,4,5,6,7,8,9,10,11,12]
  const Element_img = number.map((item,index)=>{
    if(imgUrl.length > index && (index + centerImg) < imgUrl.length ){
      return (
        <OPacity number={index + centerImg} >
          <div className='child_popup_img' onClick={()=> setpositionImg(index + centerImg)} onLoad={centerImge}>
            <img className='child_img' src={imgUrl[index + centerImg]} />
          </div>
        </OPacity>
      )
    }
    return (
      <div className='child_popup_img'>
        <img className='child_img' src='' />
      </div>
    )
  })
  
  
  

  let nextLeft = null
  if(positionImg !== 0){
    nextLeft = (
      <div onClick={()=> setpositionImg(positionImg - 1)}>
        <NextIcon side="left">
          <i class="fa-solid fa-chevron-right"></i>
        </NextIcon>
      </div>
      
    )
  }
  let nextRight = null
  if(positionImg !== imgUrl.length-1){
    nextRight = (
      <div onClick={()=> setpositionImg(positionImg + 1)}>
        <NextIcon side="right">
          <i class="fa-solid fa-chevron-right" ></i>
        </NextIcon>
      </div>
    )
  }

  

  return (
    <div className='popup_imges'>
      <Color color="white">
        <i class="fa-solid fa-xmark" ></i> 
        {positionImg}
      </Color>
      

      {/* click next  at icon next left and right */}
      {nextLeft}
      {nextRight}

      <img className='main_popup_img' src={imgUrl[positionImg]} />
        <div className='container_child_popup_img'>
          {Element_img}
        </div>
    </div>
  )
}

export default Images