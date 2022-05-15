import React from "react";
import {RiEdit2Fill} from "react-icons/ri";
import {FaPlay} from "react-icons/fa";

const List = ({items, removeItem, editItem, showPlayer}) => {
    return (
        <>
            {items.map((item) => {
                return (
                    <div key={item.id} className="w-auto gap-2 bg-slate-200">
                        <div className="card-body">
                            <article className="prose lg:prose-xl prose-p:text-black">
                                <p>{item.title}</p>
                            </article>

                            <div className="card-actions justify-end">
                                <button onClick={() => editItem(item.id)} className="btn btn-circle btn-outline">
                                    <RiEdit2Fill size={28}/>
                                </button>
                                <button onClick={() => showPlayer()} className="btn btn-circle btn-outline btn-success">
                                    <FaPlay/>
                                </button>
                                <button onClick={() => removeItem(item.id)}
                                        className="btn btn-circle btn-outline btn-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>

                        </div>
                    </div>
                )
            })}

        </>
    )
}

export default List