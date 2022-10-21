import React from 'react'
import Hero from '../components/Hero'
import CoursesList from '../components/CoursesList'
import CategoryList from '../components/CategoriesList';
const HomePage = () => {
  return (
    <div className='holder'>
      <Hero/>
      <CoursesList/>
      <CategoryList/>
    </div>
  )
}

export default HomePage