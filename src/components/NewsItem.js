import image from'../assets/download.....jpeg'
const NewsItem=({title,description,url,src})=>{
    return(
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src?src:image} className="card-img-top" alt="..." style={{ maxWidth: "100%", maxHeight: "200px", objectFit: "cover" }} />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Stay informed with our daily dose of global news and updates."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
    )
}
export default NewsItem;