import React,{useState} from 'react'
import Proser from '../Service/ProductService'

function Add()
{
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [discription,setDesc]=useState("");
    const [stock,setStock]=useState("");
    const [catogery,setCat]=useState("");
    const [storeid,setStid]=useState("");
    const [price,setPrice]=useState("");
    const [url,setUrl]=useState("");
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
            Proser.createProducts(obj)
            .then((res)=>{
                console.log(res);
            })
            .catch(err=>{
                alert(err);
            })
        alert("Product added successfully.,!");   
    }

    return(
        <div id="con">
            <h2>Add Product</h2>
            <form>
                <div>
                    <input placeholder="Enter product Id" type='text' name='id' value={id} onChange={(e)=>setId(e.target.value)} /><br/>
                    <input placeholder="Enter product Name" type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} /><br/>
                    <input placeholder="Enter product Discription" type='text' name='desc' value={discription} onChange={(e)=>setDesc(e.target.value)} /><br/>
                    <input placeholder="Enter stock count " type='number' name='stock' value={stock} onChange={(e)=>setStock(e.target.value)} /><br/>
                    <input placeholder="Enter Product Category" type='text' name='cat' value={catogery} onChange={(e)=>setCat(e.target.value)} /><br/>
                    <input placeholder="Enter Store ID" type='text' name='stid' value={storeid} onChange={(e)=>setStid(e.target.value)} /><br/>
                    <input placeholder="Enter product Price" type='number' name='price' value={price} onChange={(e)=>setPrice(e.target.value)} /><br/>
                    <input placeholder="Enter file name /image" type='text' name='url' value={url} onChange={(e)=>setUrl(e.target.value)} /><br/>
                    <button onClick={handelEve} className='btn add' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Add;