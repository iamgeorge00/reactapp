import React, { useState, useEffect } from 'react';
import MaterialTable, { MTablePagination } from 'material-table'
import Creds from '../creds/creds.json'
import styles from './MUI.css'
import { Divider, Grid, TablePagination, Typography } from '@material-ui/core';

    const columns = [
      { title: "DataID", field: "dataID", hidden: true  },
      { title: "Company Name", field: "comp_name" },
//      { title: "Account Name", field: "acc_name", wraptext: true, editable: true, sortable: true, },
      { title: "Tax Reg Number", field: "vat_number" },
      { title: "Contact Person", field: "contact_person" },
      { title: "Mobile", field: "contact_mobile" },
      { title: "Address", field: "comp_add"  },
//      { title: "Contract", field: "comp_valid", wraptext: true, editable: true  },
      ]

export default function Customers() {

  const { GoogleSpreadsheet } = require('google-spreadsheet');    //googlesheet npm package require
  const RESPONESES_SHEET_ID = '1SClfrYMDxlFOIsPPNye8TmchD04P-etzoO1_qA7MlTQ';   //spreadsheet key/id
  const doc = new GoogleSpreadsheet(RESPONESES_SHEET_ID);   //Create new document object
  
  const [data, setData] = useState([]);
  //const [ForUpdateData, setForUpdateData] = useState([]);
  const [AltData, setAltData] = useState([]);

  useEffect(()=>{
    fetchitems()
  },[])

  const fetchitems = async () => {
    await doc.useServiceAccountAuth({     //user service acc creds
      client_email: Creds.client_email,
      private_key: Creds.private_key
    });
    await doc.loadInfo(); //load the documents info
      let sheet = doc.sheetsByIndex[3]; //index of the sheet // Companies
      const rows = await sheet.getRows(); //get all the rows
          //setAltData(rows);
        let SheetData = 
        rows.map(preview=>{
          if(preview.comp_type==='customer'){
          return {
                dataID: preview.dataID,
                account_id: preview.account_id,
                comp_name: preview.comp_name,
                comp_type: preview.comp_type,
                vat_number: preview.vat_number,
                contact_person: preview.contact_person,
                contact_mobile: preview.contact_mobile,
                comp_add: preview.comp_add,
                comp_valid: preview.comp_valid
                };
            }
          });
          setAltData(rows);
          setData(SheetData.filter(filterdata=>filterdata!==undefined));
    }
    console.log(data);
    console.log(AltData);
  
  return (
    <div>
      <MaterialTable
      title={"Customers"}
      columns={columns}
      data={data}
      components={{
        Pagination:(props)=><div>
          <Grid container style={{ padding: '15px 10px 10px 10px', fontWeight: 'bold', lineHeight:'.5em' }}>
            <Grid sm={3} Item align="center" padding="10px" lineHeight="2em"><Typography variant="subtitle3">Total Rows:  {props.count}</Typography></Grid>
{/*            <Grid sm={3} Item align="center" padding="10px" ><Typography variant="subtitle3">Dashboard Balance: <p>  </p> {data[data.length-1]?.tot1}</Typography></Grid>
            <Grid sm={3} Item align="center" padding="10px" ><Typography variant="subtitle3">Paid Balance: <p>  </p> {data[data.length-1]?.tot2}</Typography></Grid>
            <Grid sm={3} Item align="center" padding="10px" ><Typography variant="subtitle3">Remaining Balance: <p>  </p> {data[data.length-1]?.tot3}</Typography></Grid>
*/}          </Grid>
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
              let sheet = doc.sheetsByIndex[3]; //Companies    //index of the sheet
              const rows = await sheet.addRow({   //get all the rows
                'dataID': parseInt(AltData.length),
                'comp_name': newData.comp_name,
                'vat_number' : newData.vat_number,
                'contact_person' : newData.contact_person,
                'contact_mobile' : newData.contact_mobile,
                'comp_add' : newData.comp_add,
                'comp_type' : 'customer',

//                'remaining_balance' : parseInt(newData.opening_balance) - parseInt(newData.paid_balance),
              });
              setData(data => [...data, newData]);
              console.log('successful row append')
              fetchitems();
              }
              writeRow();
              resolve();              
            }),
            onRowUpdate: (newData,oldData) => new Promise((resolve,reject)=>{
              console.log(oldData);
              console.log(newData);  
              const updateRow = async () => {
                await doc.useServiceAccountAuth({   //user service acc creds
                  client_email: Creds.client_email,
                  private_key: Creds.private_key
                });
                await doc.loadInfo();   //load the documents info
                let sheet = doc.sheetsByIndex[3]; //Companies    //index of the sheet
                const rows = await sheet.getRows();    //get all the rows
                let index = parseInt(oldData?.dataID);
                //console.log(rows);
                console.log(index);
                console.log(oldData?.dataID);
                console.log(newData?.dataID);
                //console.log(rows[index]);
                rows[index].comp_name = newData?.comp_name;
                rows[index].comp_type = newData?.comp_type;
                rows[index].vat_number = newData?.vat_number;
                rows[index].contact_person = newData?.contact_person;
                rows[index].contact_mobile = newData?.contact_mobile;
                rows[index].comp_add = newData?.comp_add;
                //console.log(rows[oldData?.tableData?.id]?.opening_balance)
                await rows[index].save();
                console.log(rows[index]);
                fetchitems();
                //setData(data => [...data, newData]);
                }
                updateRow();
                //fetchitems();
                console.log('successful row update')
                resolve();              
            })
          }}
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
                return { backgroundColor: "#f9f9f9" }  //striped rows
              }
            },
            "&:hover": { backgroundColor: "#357EBD" }
           }}/>      
      </div>
  );
}