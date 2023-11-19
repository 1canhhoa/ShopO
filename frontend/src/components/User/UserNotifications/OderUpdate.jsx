import React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { DataGrid } from '@mui/x-data-grid';
const OderUpdate = props => {
  const orders = [
    {
      _id: 'jdhhhh28828282hxhshshsh222',
      orderItems: [
        { name: 'iphone 14 pro max' }
      ],
      totalPrice: 120,
      oderStatus: "processing"
    }
  ]
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      // cellClassName: (params) => {
      //   return params.getValue(params.id, "status") === "Delivered"
      //     ? "greenColor"
      //     : "redColor";
      // },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 200,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/notifications/oder/${params?.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];
  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item?.orderItems?.length,
        total: "US$ " + item?.totalPrice,
        status: item?.oderStatus,
      });
    });
  return (
    <div className='w-full h-full bg-white rounded-md shadow-md p-4'>
      <div className='w-full flex py-4 min-w-[770px] flex-col items-center justify-center  '>
        <span className='text-xl font-medium'>Lists Order</span>
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={80}
          disableSelectionOnClick
          autoHeight
        />
      </div>
    </div>

  );
}

OderUpdate.propTypes = {

}

export default OderUpdate
