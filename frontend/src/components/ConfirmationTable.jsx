import React from 'react'
import PropTypes from 'prop-types'

const ConfirmationTable = () => {
  return (
    <div className="fixed th-fl w-full h-screen top-0 left-0 bg-gray-400 bg-opacity-10 z-50">
      <div className='fixed w-[500px] h-80 p-8 bg-white rounded-md'>
        <div className='text-2xl text-red-500 mb-10'>Do you want to remove this item?</div>
        <div className='text-base mb-10'>Thắt lưng nam mặt cá sấu, dây lưng nam khóa tự động mặt kim loại nguyên khối trẻ trung lịch lãm TLCS001 (Mặt đen trơn2 dây da)</div>
        <div className='w-full flex justify-between gap-4'>
          <button className='px-[90px] text-base font-semibold text-white rounded-sm bg-red-500 hover:bg-red-600 py-2'>Yes</button>
          <button className='px-[90px] text-base font-semibold text-gray-500 rounded-sm border-[1px] hover:bg-gray-100 border-gray-300 py-2'>No</button>
        </div>
      </div>
    </div>
  )
}

ConfirmationTable.propTypes = {

}

export default ConfirmationTable
