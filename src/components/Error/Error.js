import React from 'react'
import './Error.css'
import PropTypes from 'prop-types'

const Error = ({ error }) => {

  return (
    <>
      {error &&
        <>
          <h1 className='error-message'>Something went wrong, please refresh and try again.</h1>
        </>
      }
    </>
  )
}

export default Error;

Error.propTypes = {
  error: PropTypes.string
}
