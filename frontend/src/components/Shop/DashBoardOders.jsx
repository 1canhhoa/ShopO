import { useEffect } from 'react'
import PropTypes from 'prop-types'
const DashBoardOders = props => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='w-[85%]'>
      <form action="/action_page.php">
        <label >Choose a car:</label>
        <select name="cars" id="cars" required>
          <option value="">None</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

DashBoardOders.propTypes = {

}

export default DashBoardOders
