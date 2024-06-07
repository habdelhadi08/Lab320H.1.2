
function ArticleListItem({blog}) {
 
    return (
        <>
          <h3>{blog.date}</h3>
          <h2>{blog.title}</h2>
         <img style={{width: "100%"}} src={blog.image}></img>
          <p>{blog.content}</p>
         <button style={{color:"tomato", position:"relative", right:"-1200px"}}>Continue</button>
   
          <hr />
        </>
      );
    }
    
    export default ArticleListItem;