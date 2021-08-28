import React, { useState, useEffect } from 'react';
import MaterialTable, { MTablePagination } from 'material-table'
import Creds from '../creds/creds.json'
import styles from './MUI.css'
import { Divider, Grid, TablePagination, Typography } from '@material-ui/core';

    const columns = [
      { title: "Account Code", field: "shCode", flex: 1 },
      { title: "Account Name", field: "shName", flex: 1 },
      { title: "Type", field: "shType", flex: 1 },
      { title: "OP Dr/Cr", field: "OPType", editable: "never" },
      { title: "OP Balance", field: "shOP", editable: "never" },
      { title: "CL Dr/Cr", field: "CLType", editable: "never" },
      { title: "CL Balance", field: "shCL", editable: "never" }
      ]

export default function AccChart() {

  const { GoogleSpreadsheet } = require('google-spreadsheet');    //googlesheet npm package require
  const RESPONESES_SHEET_ID = '1SClfrYMDxlFOIsPPNye8TmchD04P-etzoO1_qA7MlTQ';   //spreadsheet key/id
  const doc = new GoogleSpreadsheet(RESPONESES_SHEET_ID);   //Create new document object
  
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetchitems()
  },[])

  const fetchitems = async () => {
    await doc.useServiceAccountAuth({     //user service acc creds
      client_email: Creds.client_email,
      private_key: Creds.private_key
    });
    await doc.loadInfo();   //load the documents info
    let sheet = doc.sheetsByIndex[0]; //index of the sheet // AccChart
      const rows = await sheet.getRows(); //get all the rows
      let SheetData =
      rows.map(preview=>{ return {
        shCode: preview.Code,
        shName: preview.Name,
        shType: preview.Type,
        OPType: preview.OPType,
        shOP: preview.OP,
        CLType: preview.CLType,
        shCL: preview.CL
      };});
      setData(SheetData);
    }
    //console.log(data);
    //console.log(data[data.length-1]?.tot1);
  
  return (
    <div>
      <MaterialTable
      title={"Chart of Accounts"}
      columns={columns}
      data={data}
/*      components={{
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
*/
        editable={{
          onRowAdd:(newData)=>new Promise((resolve,reject)=>{
            const writeRow = async () => {
              await doc.useServiceAccountAuth({   //user service acc creds
                client_email: Creds.client_email,
                private_key: Creds.private_key
              });
              await doc.loadInfo();   //load the documents info
              let sheet = doc.sheetsByIndex[0]; //AccChart   //index of the sheet
              const rows = await sheet.addRow({   //get all the rows
                'Code': newData.shCode,
                'Name': newData.shName,
                'Tyoe' : newData.shType,
              //  'remaining_balance' : parseInt(newData.opening_balance) - parseInt(newData.paid_balance),
              });
              setData(data => [...data, newData]);
              console.log('successful row append')
              fetchitems();
              }
              writeRow();
              resolve();              
            }),
/*            onRowUpdate: (newData,oldData) => new Promise((resolve,reject)=>{
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
                rows[index].opening_balance = newData?.opening_balance;
                //console.log(rows[oldData?.tableData?.id]?.opening_balance)
                await rows[index].save();
                console.log(rows[index]);
                }
                updateRow();
                console.log('successful row append')
                fetchitems();
                resolve();              
            })
*/          }}
          options={{
            paging: false,
            //pageSize: 40,
            //paginationType: "stepped",
            search: true,
            minBodyHeight: 'auto',
            exportButton:true,
            addRowPosition: "first",
            actionsColumnIndex: 0,

            rowStyle: (data, index) => {
              if (index % 2) {
                return { backgroundColor: "#f9f9f9" }  //stripped rows
              }
            },
            "&:hover": { backgroundColor: "#357EBD" }
           }}/>      
      </div>
  );
}