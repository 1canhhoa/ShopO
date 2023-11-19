import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai'
import LoaderBig from '../LoaderBig'
import { DataGrid } from '@mui/x-data-grid'
import { ActionDeleteEvent, ActionGetAllEventByShopId } from '~/Redux/actions/event'
const DashBoardAllEvent = () => {
  window.scrollTo(0, 0)
  const { isLoading, events, message } = useSelector((state) => state.event);
  const { seller } = useSelector((state) => state.seller);
  console.log('events', events);
  console.log('message', message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActionGetAllEventByShopId(seller._id));
  }, [dispatch]);
  const handleDelete = (id) => {
    console.log('id', id);
    dispatch(ActionDeleteEvent(id));
    window.location.reload();
  };


  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.5,
    },

    {
      field: "sold",
      headerName: "Sold out",
      type: "number",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "Preview",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
    {
      field: "Delete",
      flex: 0.8,
      minWidth: 120,
      headerName: "Delete",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <div>{params.id}</div>
            <Button onClick={() => handleDelete(params.id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];

  events &&
    events.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        price: "US$ " + item.discountPrice,
        Stock: item.stock,
        sold: item?.sold_out,
      });
    });

  return (
    <>
      {isLoading ? (
        <LoaderBig />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      )}
    </>
  )
}

DashBoardAllEvent.propTypes = {

}

export default DashBoardAllEvent
