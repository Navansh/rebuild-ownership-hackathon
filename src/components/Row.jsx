import React from 'react'
import { FcAreaChart } from 'react-icons/fc'
import { FiLinkedin, FiMoreHorizontal } from 'react-icons/fi'

const Row = ({fileName, fileSize}) => {
  return (
    <div className=' flex flex-row border-b-2 items-center gap-8 justify-around'>
        <FcAreaChart className=' text-[40px]'></FcAreaChart>
        <p className=' text-[23px]'>{fileName}</p>
        <p>{fileSize}</p>
        <FiMoreHorizontal className=' text-[30px]' />
    </div>

  )
}

export default Row