import React from 'react'
import { Country, State } from "country-state-city"

const Shipping = () => {
    return (
        <section className='shipping'>
            <main>
                <h1>Shipping Details</h1>
                <form>
                    <div>
                        <label>House No.</label>
                        <input type='text' placeholder='Enter House No.' />
                    </div>
                    <div>
                        <label>City</label>
                        <input type='text' placeholder='Enter City' />
                    </div>
                    <div>
                        <label>Country</label>
                        <select>
                            <option value=''>Country</option>
                            {Country && Country.getAllCountries().map((country) => (
                                <option value={country.isoCode} key={country.isoCode}>{country.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>State</label>
                        <select>
                            <option value=''>State</option>
                            {State && State.getStatesOfCountry("IN").map(state => (
                                <option value={state.isoCode} key={state.isoCode}>{state.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Pin Code</label>
                        <input type='number' placeholder='Enter Pin Code' />
                    </div>
                    <div>
                        <label>Phone No.</label>
                        <input type='number' placeholder='Enter Phone No.' />
                    </div>
                    <button type='submit'>Conform Order</button>
                </form>
            </main>
        </section>
    )
}

export default Shipping
