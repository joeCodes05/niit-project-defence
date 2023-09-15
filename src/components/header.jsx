import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <>
      <header className='bg-white px-[15px] py-[10px] border-b'>
        <h1 className='text-gray-700 font-bold text-2xl'>
          {title}
        </h1>
      </header>
    </>
  )
}

Header.defaultProps = {
  title: "My Todo App",
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header