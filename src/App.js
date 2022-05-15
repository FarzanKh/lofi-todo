import React, {useState, useEffect} from "react";
import List from './List'
import Alert from './Alert'
import MusicPlayer from "./MusicPlayer";

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
        // list.filter((item) => item.id !== id)
        setList(list.filter((item) => item.id !== id));
    }

    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id);
        setIsEditing(true);
        setEditId(id);
        setName(specificItem.title);
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list])

    return (
        <div className="container mx-auto mt-10">
            <div className="flex flex-row gap-4">
                <div className="basis-1/4">
                    <div className="card w-full bg-neutral-focus mt-10">
                        <div className="card-body">

                            <div className="flex flex-col">
                                <div className="basis-1">
                                    <article className="prose md:prose-lg lg:prose-xl prose-h1:text-sky-900 mb-4">
                                        <h1>LOFI Focus</h1>
                                    </article>
                                </div>
                                <div className="basis-1">
                                    <input type="text" placeholder="Add Task"
                                           className="input input-bordered w-full max-w-lg"
                                           value={name} onChange={(e) => setName(e.target.value)}/>
                                </div>

                            </div>


                            <form onSubmit={handleSubmit}>
                                <div className="card-actions">
                                    <button type="submit"
                                            className="btn gap-2 btn-primary btn-wide w-full">{isEditing ? 'Edit' : '+ Add'}
                                    </button>
                                </div>
                            </form>
                            {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
                        </div>
                    </div>
                </div>

                {list.length > 0 ? <div className="basis-3/4">
                    <div className="card w-full border-4 border-cyan-600 mt-10">
                        <div className="card-body">
                            <article className="prose md:prose-lg lg:prose-xl prose-h1:text-cyan-600 mb-4">
                                <h1>Todos</h1>
                            </article>
                            {list.length > 0 &&
                                <List items={list} clearList={clearList} removeItem={removeItem} editItem={editItem}
                                      showPlayer={startPlayer}/>}
                            {list.length > 0 && showPlayer && <MusicPlayer hidePlayer={hidePlayer}/>}
                        </div>
                        {list.length > 0 && <button className="btn btn-outline btn-error w-64 rounded-full ml-6 mb-6"
                                                    onClick={clearList}>Clear All</button>}
                    </div>
                </div> : <div className="basis-3/4">
                    <div className="card w-full border-4 border-cyan-900 mt-10">
                        <div className="card-body">
                            <article className="prose md:prose-lg lg:prose-xl prose-h1:text-cyan-600 mb-4">
                                <h1>Create a task or pick a fun activity🙂</h1>
                            </article>
                            <div className="flex flex-row gap-4">
                                <div className="basis-1/3">
                                    <div className="card card-compact bg-base-100 image-full">
                                        <figure>
                                            <img src="https://seedpsychology.com.au/wp-content/uploads/2019/03/iStock-874376840-Copy.jpg" alt="Shoes"/>
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">Meditate!</h2>
                                            <p>Just relax and be present</p>
                                            <div className="card-actions justify-end">
                                                <a href="https://meditofoundation.org/meditations"><button className="btn btn-outline btn-ghost">Meditate</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="basis-1/4 md:basis-1/3">
                                    <div className="card card-compact bg-base-100 image-full">
                                        <figure>
                                            <img src="https://www.runtastic.com/blog/wp-content/uploads/2018/08/thumbnail_1200x800-1.jpg" alt="Shoes"/>
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">Workout!</h2>
                                            <p>Just relax and be present</p>
                                            <div className="card-actions justify-end">
                                                <a href="https://www.healthline.com/health/fitness-exercise/at-home-workouts"><button className="btn btn-outline btn-ghost">Workout</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="basis-1/2 md:basis-1/3">
                                    <div className="card card-compact bg-base-100 image-full">
                                        <figure>
                                            <img src="https://www.transcriptionoutsourcing.net/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2020/11/portrait-of-a-happy-young-woman-in-headphones-PYU8EVW-scaled.jpg" alt="workout"/>
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">Read!</h2>
                                            <p>Just relax and be present</p>
                                            <div className="card-actions justify-end">
                                                <a href="https://getpocket.com/explore"><button className="btn btn-outline btn-ghost">Read</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default App;
