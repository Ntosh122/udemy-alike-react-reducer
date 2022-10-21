import React from 'react'
import styled from 'styled-components'
import Category from './Category'
import { useCoursesContext } from '../context/courses_context'
import { categories_images } from '../utils/images'
const CategoriesList = () => {
  const {categories} = useCoursesContext();
  return (
    <CategoriesListWrapper>
      <div className="container">
        <div className="categories-list-top">
          <h2>Top Categories</h2>
        </div>
        <div className="categories-list grid">
          {
            categories.map((category, index) =>{
              return (
                <Category image = {categories_images[index]} category = {category} key={index}/>
              )
            })
          }
        </div>
      </div>
    </CategoriesListWrapper>
  )
}
const CategoriesListWrapper = styled.div`
  .categories-list-top{
    margin-bottom:32px;
  }
  .categories-list{
    gap:32px;
  }
  @media screen and (min-width:600px){
    .categories-list{
       grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (min-width:800px){
    .categories-list{
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (min-width:992px){
    .categories-list{
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
export default CategoriesList