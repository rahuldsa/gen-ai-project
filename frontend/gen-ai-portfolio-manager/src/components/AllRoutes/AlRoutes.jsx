import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProjectForm from '../ProjectForm'

const AlRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProjectForm/>}></Route>
      </Routes>
    </div>
  )
}

export default AlRoutes
