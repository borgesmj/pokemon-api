import React from 'react'

const Stats = ({stats}) => {
  return (
    <table>
      <tbody>
        <tr>
            <th>HP</th>
            <td>{stats[0].base_stat}</td>
            <th>Ataque Especial</th>
            <td>{stats[3].base_stat}</td>
        </tr>
        <tr>
            <th>Ataque</th>
            <td>{stats[1].base_stat}</td>
            <th>Defensa Especial</th>
            <td>{stats[4].base_stat}</td>
        </tr>
        <tr>
            <th>Defesa</th>
            <td>{stats[2].base_stat}</td>
            <th>Velocidad</th>
            <td>{stats[5].base_stat}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Stats
