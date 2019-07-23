import React from 'react'

const FilterForm = ({value, onChange}) => (
  <form>
      <div>
        filter names: <input value={value}
                     onChange={onChange} />
      </div>
  </form>
)

export default FilterForm