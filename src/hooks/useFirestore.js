import { useEffect, useState } from "react"

export const useFirestore = (getFunction, dependencies = [], ms) => {

    const [data, setData] = useState()
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)
        setTimeout(() => {
            getFunction()
                .then(response => {
                    setData(response)
                })
                .catch(() => {
                    setData(false)
                })
                .finally( () => {setLoad(false)} )
        }, ms)
    }, dependencies)

    return{
        load, 
        data
    }
}
