import React from 'react'
import {BsStar, BsStarHalf, BsStarFill} from 'react-icons/bs'
import styled from 'styled-components'
const StarRating = ({rating_star}) => {
  const stars = Array.from({length: 5}, (_, index) =>{
    const val = index + 0.5;
    return (
      <Star key={index}>
        {
          rating_star >= index + 1 ? (<BsStarFill />) : rating_star >= 
          val ? (<BsStarHalf />) : (<BsStar />)
        }
      </Star>
    )
  })

  return(
    <div>{stars}</div>
  )
}
const Star = styled.span`
color:#e59819;
margin-right:2px;
font-size:13px;
margin-bottom:-5px!important;
`
export default StarRating