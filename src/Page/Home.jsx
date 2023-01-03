import Products from "../Components/Products";

const Home = () => {
  return (  
    <div>
      {/* <img
        src={require(`../img/배너.jpg`)}
        style={{
          width : "100vw",
          height: "400px",
          backgroundSize:"cover"}}
      /> */}
      <div
      style={{
        backgroundImage:'url('+require("../img/배너.jpg")+')',
        width:"100%",
        height: "300px",
        backgroundSize: "cover",
        backgroundPosition:"center",
      }}>
      </div>
      <Products />
    </div>
  );
}

export default Home;