import React,{useState,useEffect} from 'react'
import Proser from '../Service/ProductService'
import { useParams } from 'react-router-dom';

function Upd()
{
    const { id } = useParams();
    const [name,setName]=useState("");
    const [discription,setDesc]=useState("");
    const [stock,setStock]=useState("");
    const [catogery,setCat]=useState("");
    const [storeid,setStid]=useState("");
    const [price,setPrice]=useState("");
    const [url,setUrl]=useState("");
    const [pro, srtpro]=useState([]);
    const obj={
        id:id,
        name:name,
        discription:discription,
        stock:stock,
        catogery:catogery,
        storeid:storeid,
        price:price,
        url:url};

    const handelEve=(e)=>{
        e.preventDefault();
            Proser.updateProducts(id,obj)
            .then((res)=>{
                console.log(res);
            })
            .catch(err=>{
                console.log(err);
            })
        alert("Product updated successfully.,")

    }

    function getProductById(id){
        Proser.getProductById(id)
        .then((res)=>{
            srtpro(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{     
        getProductById(id);
    })

    return(
        <div id="con">
            <h2>Update Product</h2>
            <form style={{display:'grid', gridTemplateColumns:'auto auto'}}>
                <div style={{width:'30rem', textAlign:'right'}}>
                    <h3 style={{marginBottom:'30px'}}>Product Id: {pro.id}</h3>
                    <h3 style={{marginBottom:'30px'}}>Name: {pro.name}</h3>
                    <h3 style={{marginBottom:'30px'}}>Discription: {pro.discription}</h3>
                    <h3 style={{marginBottom:'30px'}}>Stock Count: {pro.stock}</h3>
                    <h3 style={{marginBottom:'30px'}}>Category: {pro.catogery}</h3>
                    <h3 style={{marginBottom:'30px'}}>store Id: {pro.storeid}</h3>
                    <h3 style={{marginBottom:'30px'}}>Price: {pro.price}</h3>
                    <h3 style={{marginBottom:'30px'}}>Image: {pro.  url}</h3>
                </div>
                <div style={{textAlign:'left'}}>
                    <input disabled placeholder="Enter product Id" type='text' name='id' value={id}/><br/>
                    <input placeholder="Enter product Name" type='text' name='name' onChange={(e)=>setName(e.target.value)} /><br/>
                    <input placeholder="Enter product Discription" type='text' name='desc'  onChange={(e)=>setDesc(e.target.value)} /><br/>
                    <input placeholder="Enter stock count " type='number' name='stock' onChange={(e)=>setStock(e.target.value)} /><br/>
                    <input placeholder="Enter Product Category" type='text' name='cat' onChange={(e)=>setCat(e.target.value)} /><br/>
                    <input placeholder="Enter Store ID" type='text' name='stid' onChange={(e)=>setStid(e.target.value)} /><br/>
                    <input placeholder="Enter product Price" type='number' name='price'  onChange={(e)=>setPrice(e.target.value)} /><br/>
                    <input placeholder="Enter file name /image" type='text' name='url' onChange={(e)=>setUrl(e.target.value)} /><br/>
                    <button onClick={handelEve} className='btn add' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Upd;