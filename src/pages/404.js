import Button from '@/components/Button'
import React from 'react'

const NotFound = () => {
  return (
    
    <section className='common-section error-section'>
        <div className='container'>
            <h1>404 | Page Not Found</h1>
            <Button title="Go to Homepage" link="/" size="btn-md"/>
        </div>
    </section>
    
  )
}

export default NotFound