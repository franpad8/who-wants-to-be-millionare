import React from 'react'
import { Link } from 'react-router-dom'

const Best = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Stage</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Franklin</td>
            <td>Winner</td>
          </tr>

          <tr>
            <td>David</td>
            <td>13th</td>
          </tr>
          <tr>
            <td>Fantino</td>
            <td>12th</td>
          </tr>

          <tr>
            <td>Javier</td>
            <td>10th</td>
          </tr>
        </tbody>
      </table>

      <Link to='/'>Back</Link>
    </>
  )
}

export default Best
