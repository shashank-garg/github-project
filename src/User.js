import React,{useEffect,useState} from 'react'

function User() {
const [data, setdata] = useState([]);

//using async and await 
// let githubUser = async()=>{
//     let request = await fetch("https://api.github.com/users");
//     let data = await request.json();
//     console.log(data);
//     setdata(data);

// }

//using fetch and promises
let githubUser = ()=>{
    let request = fetch("https://api.github.com/users").then((response)=>response.json()).then((json)=>setdata(json));
   

}
    useEffect(() => {       
        githubUser();
    },[]);
    return (
        <div>
         <h1 style={{backgroundColor:"antiquewhite",textAlign:"center"}}>Github Users</h1>
                    <div className="container mt-5">
                    
                    <div className="row text-center">
        {
            data.map((item)=>{
                return(
                    <>
                    <div key={item.id} className="col-10 col-md-4 mt-5">
                   <div className="d-flex align-items-center">
                    <div className="card" style={{width: "18rem"}}>
  <img src={item.avatar_url} className="card-img-top" alt="image"/>
  <div className="card-body">
    <h5 className="card-title">{item.login}</h5>
    <p className="card-text">{item.events_url}</p>
    <a href={item.html_url} class="btn btn-primary">Github Link</a>
  </div>
  </div>
</div>
</div>
</>
                )
                
            })
        }
        
            
        </div>
        </div>
        </div>
    )
}

export default User
