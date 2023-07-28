import React, { useContext } from 'react'
import styled from 'styled-components'
import './Confirm.css'
import { CloudEvent } from '../App'

function Confirm(props) {
    const {events, setevents} = useContext(CloudEvent)
    const {text, closePopup} = props

    function checkStatus(event){
        if(event === 'ok') {
            setevents((item)=>{
                return { ...item, confirm:'yes'}
            })
        }
        closePopup(null) //'close popup confirm'
    }
  return (
    <div>
        <div className='Confirm'>
            <p>{text} </p>
            <div className='confirm_click'>
                <button className='confirm_ok' onClick={()=> checkStatus('ok')}>Ok</button>
                <button className='confirm_cancel' onClick={()=> checkStatus('cancel')}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Confirm