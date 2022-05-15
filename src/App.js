import React, {useState, useEffect} from "react";
import List from './List'
import Alert from './Alert'
import MusicPlayer from "./MusicPlayer";
import {db} from "./firebase/config";
import {collection, getDocs} from 'firebase/firestore'

const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
        return JSON.parse(localStorage.getItem('list'));
    } else {
        return []
    }
}

function App() {
    const [name, setName] = useState('');
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [alert, setAlert] = useState({show: false, msg: '', type: ''});
    const [showPlayer, setShowPlayer] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (!name) {
            showAlert(true, "error", "Please Enter a Value")
        } else if (name && isEditing) {
            setList(list.map((item) => {
                if (item.id === editId) {
                    return {...item, title: name}
                }
                return item;
            }))
            setName('');
            setEditId(null);
            setIsEditing(false);
            showAlert(true, "success", "Item Changed");
        } else {
            showAlert(true, "success", "Item Added Successfully")
            const newItem = {id: new Date().getTime().toString(), title: name}
            setList([...list, newItem]);
            setName('')
        }
    }

    const startPlayer = () => {
        console.log('play pressed')
        setShowPlayer(true)
    }

    const hidePlayer = () => {
        setShowPlayer(false)
    }

    const showAlert = (show = false, type = "", msg = "") => {
        setAlert({show, type, msg})
    }
    const clearList = () => {
        showAlert(true, "error", "List Cleared");
        setList([]);
    }

    const removeItem = (id) => {
        showAlert(true, "error", "Item Removed");
        setList(list.filter((item) => item.id !== id));
    }

    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id);
        setIsEditing(true);
        setEditId(id);
        setName(specificItem.title);
    }

    useEffect(() => {
        // Firebase stuff
        async function fetchData() {
            const querySnapshot =  await getDocs(collection(db, 'todos'));

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                console.log(data);

            })
        }
        fetchData();
        // Firebase stuff


        localStorage.setItem('list', JSON.stringify(list));
    }, [list])

    return (
        <div className="container mx-auto mt-10">
            <div className="flex flex-row gap-4">
                <div className="basis-1/4">
                    <div className="rounded-md w-full bg-slate-200 mt-10">
                        <div className="card-body">
                            <div className="flex flex-col">
                                <div className="basis-1">
                                    <article className="prose md:prose-lg lg:prose-xl prose-h1:text-sky-900 mb-4">
                                        <h1>LOFI Focus</h1>
                                    </article>
                                </div>
                                <div className="basis-1">
                                    <input type="text" placeholder="Add Task"
                                           className="input input-bordered w-full max-w-lg text-base"
                                           value={name} onChange={(e) => setName(e.target.value)}/>
                                </div>

                            </div>


                            <form onSubmit={handleSubmit}>
                                <div className="card-actions">
                                    <button type="submit"
                                            className="btn btn-wide w-full">{isEditing ? 'Edit' : '+ Add'}
                                    </button>
                                </div>
                            </form>
                            {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
                        </div>
                    </div>
                </div>

                {list.length > 0 ? <div className="basis-3/4">
                    <div className="w-full border-2 border-slate-600 mt-10">

                        {list.length > 0 &&
                            <List items={list} clearList={clearList} removeItem={removeItem} editItem={editItem}
                                  showPlayer={startPlayer}/>}
                        {list.length > 0 && showPlayer && <MusicPlayer hidePlayer={hidePlayer}/>}
                        <div className='flex items-center justify-center'>
                            {list.length > 0 && <button className="btn btn-outline btn-error w-64 mb-6 mt-4"
                                                        onClick={clearList}>Clear All</button>}
                        </div>
                    </div>
                </div> : <div className="basis-3/4">
                    <div className="card w-full border-2 border-cyan-900 mt-10">
                        <div className="card-body">
                            <article className="prose md:prose-lg lg:prose-xl prose-h2:text-cyan-600 mb-4">
                                <h2>Add a task or just relax🙂</h2>
                            </article>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default App;
