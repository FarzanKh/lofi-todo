import React, {useEffect} from "react";

const Alert = ({type, msg, removeAlert, list}) => {
    useEffect(() => {
        const timeOut = setTimeout(() => {
            removeAlert()
        }, 3000)
        return () => clearTimeout(timeOut)
    }, [list, removeAlert])
    return (
        <div className={type === 'success' ? "alert alert-success shadow-lg opacity-50" : "alert alert-error shadow-lg opacity-80"}>
            <div>
                {type === 'success' ?
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                         viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                         viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                }

                <span>{msg}</span>
            </div>
        </div>
    )
}
export default Alert