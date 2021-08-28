import React, { useState, useEffect } from 'react';
import MaterialTable, { MTablePagination } from 'material-table'
import Creds from '../creds/creds.json'
import styles from './MUI.css'
import { Divider, Grid, TablePagination, Typography } from '@material-ui/core';

    const columns = [
      {title: "Rider ID", field: "emp_riderid"  },
      {title: "Name", field: "emp_name" },
      {title: "Payment Method", field: "cod_method" },
      {title: "Dashboard Balance", field: "opening_balance" },
      {title: "Balance Paid", field: "paid_balance" },
      {title: "Remaining Balance", field: "remaining_balance", editable: 'never'},  //HERE
      {title: "Reference No", field: "reference_no" },
      {title: "Date", field: "req_date" }
      ]

export default function CashOnDelivery() {

  const { GoogleSpreadsheet } = require('google-spreadsheet');    //googlesheet npm package require
  const RESPONESES_SHEET_ID = '1SClfrYMDxlFOIsPPNye8TmchD04P-etzoO1_qA7MlTQ';   //spreadsheet key/id
  const doc = new GoogleSpreadsheet(RESPONESES_SHEET_ID);   //Create new document object
  
  const [data, setData] = useState([]);
  var sum1 = 0;
  var sum2 = 0;
  var sum3 = 0; 

  useEffect(()=>{
    fetchitems()
  },[])

  const fetchitems = async () => {
    await doc.useServiceAccountAuth({     //user service acc creds
      client_email: Creds.client_email,
      private_key: Creds.private_key
    });
    await doc.loadInfo();   //load the documents info
    let sheet = doc.sheetsByIndex[1]; //CODEntries    //index of the sheet
    const rows = await sheet.getRows();     //get all the rows
      let SheetData = rows.map(preview=>{ return {
        cod_status: preview.cod_status,
        emp_name: preview.emp_name,
        emp_riderid: preview.emp_riderid,
        cod_method: preview.cod_method,
        opening_balance: preview.opening_balance,
        paid_balance: preview.paid_balance,
        remaining_balance: preview.remaining_balance,
        reference_no: preview.reference_no,
        req_date: preview.req_date,
        tot1: sum1 += parseInt(preview.opening_balance),
        tot2: sum2 += parseInt(preview.paid_balance),
        tot3: sum3 += parseInt(preview.remaining_balance),
      };});
      setData(SheetData);
    }
    //console.log(data);
    //console.log(data[data.length-1]?.tot1);
  
  return (
    <div>
      <MaterialTable
      title={"Cash on Delivery"}
      columns={columns}
      data={data}
      components={{
        Pagination:(props)=><div>
          <Grid container style={{ padding: '15px 10px 10px 10px', fontWeight: 'bold', lineHeight:'.5em' }}>
            <Grid sm={3} Item align="center" padding="10px" lineHeight="2em"><Typography variant="subtitle3">Total Rows:  {props.count}</Typography></Grid>
            <Grid sm={3} Item align="center" padding="10px" ><Typography variant="subtitle3">Dashboard Balance: <p>  </p> {data[data.length-1]?.tot1}</Typography></Grid>
            <Grid sm={3} Item align="center" padding="10px" ><Typography variant="subtitle3">Paid Balance: <p>  </p> {data[data.length-1]?.tot2}</Typography></Grid>
            <Grid sm={3} Item align="center" padding="10px" ><Typography variant="subtitle3">Remaining Balance: <p>  </p> {data[data.length-1]?.tot3}</Typography></Grid>
          </Grid>
          <Divider/>
          <Grid container style={{ padding: '15px 10px 10px 10px', fontWeight: 'bold', lineHeight:'1.5em' }}>
            <Grid sm={12} Item align="right" ><TablePagination {...props} /></Grid>
          </Grid>
        </div>
      }}

        editable={{
          onRowAdd:(newData)=>new Promise((resolve,reject)=>{
            const writeRow = async () => {
              await doc.useServiceAccountAuth({   //user service acc creds
                client_email: Creds.client_email,
                private_key: Creds.private_key
              });
              await doc.loadInfo();   //load the documents info
              let sheet = doc.sheetsByIndex[1]; //CODEntries    //index of the sheet
              const rows = await sheet.addRow({   //get all the rows
                'emp_riderid': newData.emp_riderid,
                'emp_name': newData.emp_name,
                'cod_method' : newData.cod_method,
                'opening_balance' : newData.opening_balance,
                'paid_balance' : newData.paid_balance,
                'remaining_balance' : parseInt(newData.opening_balance) - parseInt(newData.paid_balance),
                'req_date' : newData.req_date,
              });
              setData(data => [...data, newData]);
              console.log('successful row append')
              fetchitems();
              }
              writeRow();
              resolve();              
            }),
            onRowUpdate: (newData,oldData) => new Promise((resolve,reject)=>{
              //console.log(newData);
              //console.log(oldData);
              //console.log(oldData?.tableData?.id);
              //console.log(oldData?.opening_balance);
              const updateRow = async () => {
                await doc.useServiceAccountAuth({   //user service acc creds
                  client_email: Creds.client_email,
                  private_key: Creds.private_key
                });
                await doc.loadInfo();   //load the documents info
                let sheet = doc.sheetsByIndex[1]; //CODEntries    //index of the sheet
                const rows = await sheet.getRows();    //get all the rows
                //console.log(rows[oldData?.tableData?.id]);
                //rows[oldData?.tableData?.id]?.opening_balance = newData?.opening_balance;
                //rows[oldData?.tableData?.id]?.opening_balance = '800';
                let index = oldData?.tableData?.id;
                rows[index].emp_riderid = newData?.emp_riderid;
                rows[index].emp_name = newData?.emp_name;
                rows[index].cod_method = newData?.cod_method;
                rows[index].opening_balance = newData?.opening_balance;
                rows[index].paid_balance = newData?.paid_balance;
                rows[index].remaining_balance = parseInt(newData?.opening_balance) - parseInt(newData?.paid_balance);
                rows[index].req_date = newData?.req_date;

                //console.log(rows[oldData?.tableData?.id]?.opening_balance)
                await rows[index].save();
                console.log(rows[index]);
                setData(data => [...data, newData]);
                fetchitems();
                }
                updateRow();
                console.log('successful row update')
                resolve();              
            })
          }}
          options={{
            paging: true,
            pageSize: 40,
            paginationType: "stepped",
            search: true,
            minBodyHeight: 'auto',
            exportButton:true,
            addRowPosition: "first",
            actionsColumnIndex: -1,

            rowStyle: (data, index) => {
              if (index % 2) {
                return { backgroundColor: "#f9f9f9" }  //striped rows
              }
            },
            "&:hover": { backgroundColor: "#357EBD" }
           }}/>      
      </div>
  );
}