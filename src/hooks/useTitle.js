import { useEffect } from "react"

const useTitle = title => {
    useEffect( () => {
        document.title = `${title} - Health care`;
    },[title])
}

export default useTitle;