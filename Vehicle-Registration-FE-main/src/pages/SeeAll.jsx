import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Header from '../Components/Header'

const SeeAll = () => {

    const [vehicle, setVechicle] = useState([])

    let users = []
    const setdatas = () => {
        axios.get('https://vehicleregistration-be.onrender.com/api/vehicle/')
            .then(res => {
                users = res.data;
                setVechicle(users);
            }).catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        setdatas();
    }, [vehicle])

    const deletepro = (vid) => {
        axios.delete(`https://vehicleregistration-be.onrender.com/api/vehicle/delete/${vid}`).then(
            setVechicle(
                vehicle.filter((val) => {
                    // return val._id !== id;
                    return val.vid !== vid;
                })
            )
        )
        alert("succesfully deleted");
    }

    return (
        <div>
            <Header/>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Lisence Type</th>
                        <th scope="col">Vehicle Number</th>
                        <th scope='col'>Vehicle Type</th>
                        <th scope='col'>Delete Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vehicle.map(user => (
                            <tr className='table'>
                                <td>{user.name}</td>
                                <td>{user.contact_number}</td>
                                <td>{user.license_type}</td>
                                <td>{user.license_plate}</td>
                                <td>{user. vehicle_type}</td>
                                <td><button className='btn btn-danger' onClick={(e) => {
                                            e.preventDefault();
                                            deletepro(user.vid)
                                        }}>delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>


        </div>
    )
}

export default SeeAll