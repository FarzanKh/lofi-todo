const MusicPlayer = ({hidePlayer}) => {
    return (

        <div className="card w-full bg-slate-100 mt-10">
            <div className="card-actions justify-end">
                <button className="btn btn-square btn-sm mb-2 mr-2 mt-2" onClick={hidePlayer}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            <iframe width="100%" height="720" src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1"
                    title="Lofi Music"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

                    allowFullScreen>

            </iframe>
        </div>


    )
}

export default MusicPlayer