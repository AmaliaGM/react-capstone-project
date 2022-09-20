import React from 'react'

const Nav = () => {
  return (
    <div>
      <span>
      <input 
        type="text" 
        class="latitudeHolder" 
        inputMode="numeric"
        id="latitude"
        placeholder="latitude"
        aria-label="latitude"
        aria-aria-describedby="basic-addon1"
        value="42.98"
        /> 
        <input 
        type="text" 
        class="longitudeHolder"
        inputMode="numeric"
        id="longitude"
        placeholder="longitude"
        aria-label="longitude"
        aria-aria-describedby="basic-addon1"
        value="-81.23"
        />
        <div>
          <button id="btnGetPollution" type="button" className="btnGetPollution">
            Get Air Pollution
          </button>
          <button id="btnGetLocation" type="button" className="btnGetLocation">
            Use Location
          </button>
        </div>
      </span>
    </div>
  )
}

export default Nav
