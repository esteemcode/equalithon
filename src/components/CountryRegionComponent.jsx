import React, { useReducer } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';


const Country = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'setCountry':
                return {
                    ...state,
                    country: action.country
                }
        }
    }

    const reducerRegion = (stateRegion, actionRegion) => {
        switch (actionRegion.type) {
            case 'setRegion':
                return {
                    ...stateRegion,
                    region: actionRegion.region
                }
        }
    }

    const [state, dispatch ]=  useReducer(reducer, {country: ''});
    const [stateRegion, dispatchRegion ]=  useReducer(reducerRegion, {region: ''});

    const handleCountryChange = (country) => {
        dispatch({type: 'setCountry', country});
    }

    const handleRegionChange = (region) => {
        dispatchRegion({type: 'setRegion', region});
    }

    return (
        <>
        <div className="pb-2">
        <CountryDropdown
            className="form-control"
            value={state.country}
            onChange={handleCountryChange}
            priorityOptions={["US"]}
        />
        </div>

        <RegionDropdown
        className="form-control"
        country={state.country}
        value={stateRegion.region}
        onChange={handleRegionChange}
    />

    </>

    )
}
export default Country;
