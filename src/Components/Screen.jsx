import React from 'react'
import Imagen from './Imagen'
import Name from './Name'
import Stats from './Stats'
import Type from './Type'

const Screen = ({name, img, type_one, type_two, stats}) => {
  return (
    <section>
      <div className='principal'>
        <Imagen
          img = {img}
          name = {name}
        />
        <Name
          name = {name}
        />
      </div>
      <Stats
        stats = {stats}
      />
      <Type
        type_one = {type_one}
        type_two = {type_two}
      />
    </section>
  )
}

export default Screen
