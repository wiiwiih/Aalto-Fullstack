import React from 'react'

const FilterForm = ({value, onChange}) => (
  <form>
      <div>
        Find countries: <input value={value}
                                 onChange={onChange} />
      </div>
  </form>
)

export default FilterForm