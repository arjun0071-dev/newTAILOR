import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify/unstyled';

function Edit() {
    const navigate = useNavigate()

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = (true);

    useEffect(() => {

        axios.patch(`http://192.168.1.68:3000/homesection`)
            .then((res) => {
                setData(res.data);
                setLoading(false)
            })
            .catch((err) => {
                console.error(err)
                toast.error("failed")
                setLoading(false)
            })
            , [id]
    })

    if (loading) return <div>loading..</div>
    if (!data) return <div>loading..</div>


    return (
        <>
            <div>
                {data.title}
            </div>
            <div>
                {data.subtilte}
            </div>
            <div>
                {data.description}
            </div>

            <button onClick={() => navigate("/api")} >
                yes
            </button>
        </>
    )
}

export default Edit