
import ProductCard from '../../component/ProductCard';
import useFetch from '../../hooks/useFetch';

function Main() {


const {data:tarifler,isLoading,error}=useFetch("http://localhost:3000/tarifler")


  return (
    
<div className="row mt-3">
  {isLoading && <div className='alert alert-warning'>Yükleniyor...</div>}
  {error && <div className='alert alert-danger'>{error} </div>}
{
    tarifler && tarifler.map(tarif=> (


<ProductCard tarif={tarif} key={tarif.id} />
     

    ))
}

</div>

  )
}

export default Main