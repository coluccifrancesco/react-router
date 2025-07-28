import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ProductsDetail(){

    const  { id }  = useParams();
    let articleId = parseInt(id);
    const [articles, setArticles] = useState([]);
    let articleInfo = articles.find(article => article.id === articleId);
    
    function fetchArticles(){
        console.log('🏗️ Products component rendering...');
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            setArticles(data)
        })
    };
    
    useEffect(fetchArticles, []);
    
    console.log('Id of the page: ' + articleId);
    console.log('Total articles: ' + articles.length);

    if(articleInfo){
        console.log('Product id: ' + articleInfo.id);
        console.log('Product name: ' + articleInfo.title);
    }

    return(
        <div className='mt-5 container'>
            <div className="row">
                {}
            </div>

            <div className='d-flex mx-auto justify-content-between align-items-center'>
                <Link to={`/products/${articleId - 1}`}>
                    <button className='btn btn-primary'>Prodotto Precedente</button>
                </Link>
                <Link to={`/products/${articleId + 1}`}>
                    <button className='btn btn-primary'>Prodotto Successivo</button>
                </Link>
            </div>
        </div>
    )
}