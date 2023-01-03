const Products = () => {
  const imgArray = [
    {name:"빨간맛 반팔", img:"옷1.png"},
    {name:"아스파라거스 긴팔", img:"옷2.png"},
    {name:"힙스터 나그랑", img:"옷3.png"},
    ]

  return (  
    <div style={{width:"100vw", marginTop:"50px", display:"flex", flexDirection:"column"}}>
      <a href="" style={{textAlign:"start", marginLeft: "6%"}}>더보기</a>
      <div style={{width:"100%", display:"grid", gap:"5px", gridTemplateRows:"1fr", gridTemplateColumns:"1fr 1fr 1fr"}}>
        {
          imgArray.map((img,i)=>(
            <div key={i} style={{width:"200px", height:"250px", margin:"30px auto", padding:"15px", boxShadow:"2px 2px 5px 1px gray", border:"none", borderRadius:"10px" }}>
              <img src={require(`../img/${img.img}`)} alt="없음" style={{width:"150px", height:"150px", marginTop:"20px"}}/>
              <p style={{fontWeight:"bold", color:"black", marginTop:"25px"}}>{img.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Products;