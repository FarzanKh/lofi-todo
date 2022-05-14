const MusicPlayer = ({hidePlayer}) => {
    const soundcloudArray = ["https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1106398864&color=%2300b0ca&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/890621617&color=%2300b0ca&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1035841942&color=%2300b0ca&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1264347766&color=%2300b0ca&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1245971767&color=%2300b0ca&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    ];
    const random = Math.floor(Math.random() * soundcloudArray.length);
    return (

        <div className="card w-full border-4 border-cyan-900 mt-10">
            <div className="card-actions justify-end">
                <button className="btn btn-square btn-sm mb-2 mr-2 mt-2" onClick={hidePlayer}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            <iframe width="100%" height="166" allow="autoplay" title="Focus music"
                    src={soundcloudArray[random]}>
            </iframe>
        </div>


    )
}

export default MusicPlayer