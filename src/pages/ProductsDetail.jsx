import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ProductsDetail(){

    const { id } = useParams();
    const navigate = useNavigate();

    return(
        console.log('hi')
    )
}