import React, {Fragment, useState, useEffect, useRef} from 'react';
import axios from '../../../util/axios-base'
import { removerAcentos } from '../../../util/Utilities'
import SpinnerSearch from '../../../components/Loading/SpinnerSearch'
import ListSearch from '../../../components/Lists/ListSearch'

import cx from 'classnames';

const SearchBox = (props) => {
    const [activeSearch, setActiveSearch] = useState(false)
    const [search, setSearch] = useState('')
    const [result, setResult] = useState()
    const [loading, setLoading] = useState(false)
    const [display, setDisplay] = useState(false)
    const wrapperRef = useRef(null)

    useEffect(() => {
        if(!search || search.length < 2)  
            setResult()  

        const timer = setTimeout(() => {
            if(search && search.length >= 2){
                setLoading(true)
                setDisplay(false)
                axios.get(`/fii/${removerAcentos(search).replace(' ','_').replace('11B', '').replace('11', '')}`)
                    .then( res => {
                        console.log(res.data.fiis)
                        setLoading(false)
                        setDisplay(true)
                        setResult(res.data.fiis)
                    })
                    .catch( err =>{
                        setResult([])
                        setLoading(false)
                    })
            }
            else{
                setResult([])
            }
        }, 2000);
        return () => clearTimeout(timer);
    }, [search]);

    useEffect(() => {
        document.addEventListener('mousedown', handClickOutside)

        return () => {
            document.removeEventListener('mousedown', handClickOutside)
        }
    }, [])

    const handClickOutside = (event) => {
        const {current: wrap} = wrapperRef
        if(wrap && !wrap.contains(event.target)){
            setDisplay(false)
        }
    }

    return (
        <Fragment >
            <div ref={wrapperRef}>
                <div className={cx("search-wrapper", {
                    'active': activeSearch
                })}>
                    <div className="input-holder">
                        <input 
                            type="text" 
                            className="search-input" 
                            value={search} 
                            placeholder="código, nome ou segmento..."
                            onChange={(ev) => setSearch(ev.target.value)}/>
                        
                        <button onClick={() => setActiveSearch(prev => !prev)}
                                className="search-icon"><span/></button>
                    </div>
                    {loading && <div className="loading-search"><SpinnerSearch/></div>}
                    {display && result && result.length === 0 && <div className="loading-search text-white">Sem resultado...</div>}
                    <button onClick={() => setActiveSearch(prev => { setSearch(''); return !prev})} className="close"/>
                </div>
                {display && result && result.length > 0 && <ListSearch result={result}/>}
            </div>
        </Fragment>
    )

}

export default SearchBox;
