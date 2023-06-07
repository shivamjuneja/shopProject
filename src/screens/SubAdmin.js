import React,{useState} from 'react'
import Sidebar from '../common/SideBar'
import TableRow from '../components/Table/TableRow'
import ProductStyles from './Product.module.css'
import dustbin from '../Assets/🦆 icon _trash_.png'
import NavBar from '../common/NavBar'
import SubAdminPopup from '../components/SubAdminPopup'
import styles from './SubAdmin.module.css'
export default function SubAdmin() {
  const [open,setOpen]=useState(0);
  const [data,setData]=useState([1,20,3,4,5,6,7,8,9,10,11,12])
  const deleteElement=(index,ar)=>{
    for(let i=0;i<ar.length;i++){
        if(i<index){
          console.log("delete index ->",i)
          continue;
        }
        ar[i]=ar[i+1]
    }
    ar.pop()
    // data=[...ar]
    console.log(data);
    return ar;
}
  const deleteHandler=(val)=>{
    console.log(val)
    let ar= deleteElement(val,data)

    setData([...ar]); 
    
  }

  const popcontainer={
    height:'60%',
    width:'40%',
    position:'absolute',
    top: '20%',
    left: '28%',
    // borderColor: 'red'
    // border: "5px solid red",
    backgroundColor:'#fff'

  }
  const image={
    width:"17px",
    height:"17px",
    display:'flex',
    alignSelf:'center'
  }

  const showPopUp=(value)=>{
    // console.log(value ,"Hello")
    setOpen(value)
  }
  const closePopUp=()=>{
    setOpen(0)
  }
  return (
    <>
            <NavBar buttonFlag={true} popUp={showPopUp} buttonName={"Create New admin"} />
            <div className='container-fluid' >
                <div className='row'>
                    <div className={`col-lg-2 col-md-3 ${styles.left}`} >
                        <Sidebar />
                    </div>

                    <div className={`col-lg-10 col-md-9 col-sm-12 col-12 `} style={{ overflowY: 'auto', height: '91vh' }}>
                       
                        {data.map((item,index) => {
                            return (
                                <div  className={`my-2 `} >
                                    {/* <TableRow productName={"Jalaj Gupta"} productId={"#1243"} category={"Pop"}
                                        status={"ordered"} dateAdded={"12/05/2023"} price={"50,000"}
                                        quantity={"20"} /> */}
                                      <TableRow height={60}>
                                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                          <div>
                                            <p style={{margin:0,fontSize:14}}>Rahul Sharma{item}</p>
                                            <p style={{margin:0,fontSize:14}}>Rahul@gmail.com</p>
                                          </div>


                                          <div style={image} onClick={()=>{deleteHandler(index)}}  >
                                            <img className={ProductStyles.iconSize} src={dustbin} alt="dustbin" />
                                          </div>
                                        </div>
                                      </TableRow>
                                </div>
                            )
                        })}

                    </div>

                </div>

                <div style={popcontainer} hidden={!open?true:false}>
                  {open && <SubAdminPopup closePopUp={closePopUp} />}
                </div>
                
            </div>
        </>
  )
}
