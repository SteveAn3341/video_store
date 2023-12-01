export default function InventoryItem({movie}){
  const {title, imgurl , coppiesavailable} = movie;

  console.log(movie)
  return(


    <div className = 'inventory-item'>
    <h3>
      {title}
    </h3>
    <img src = {imgurl} className="resize-img"/>
    <p>coppiesavailable:{coppiesavailable}</p>
    <button 
    disabled = {coppiesavailable === 0}
    onClick={ () => alert(`you checked out ${title}`)}
     >check out</button>
    
    </div>
  );
}