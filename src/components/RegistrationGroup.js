import React from 'react';
import { useState } from 'react';

const RegistrationGroup = () => {

    const [countForm, setCountForm] = useState(1);

    const onAddPeerClick = () => {

        let newCountForm = countForm + 1;

        setCountForm(newCountForm);
    }

    const onDeleteClick = () => {

        let count = countForm - 1;

        setCountForm(count);
    }

    return (
        <div >

            <form className="m-auto col-6 border border-light p-5" action="#!">

                <div className="border border-light bg-info text-white p-1">
                    <h6> One last thing.</h6>
                    <p> Invite 3 peers: the more to help, the merrier!</p>
                </div>

                <p className="mb-2 ml-2">Your contacts will receive an email with your invite; ie "Essteem does cool things for women in tech1 thought you'd be interested."</p>

                {countForm > 0 &&
                    <div>
                        <div className="row">
                            <div className="col-6"><input type="text" id="FirstName" className="form-control mb-2" placeholder="*First Name" ></input></div>
                            <div className="col-6"><input type="text" id="LastName" className="form-control mb-2" placeholder="*Last Name" ></input></div>
                        </div>

                        <input type="email" id="FormEmail" className="form-control mb-2" placeholder="*E-mail" ></input>

                        <input type="text" id="FormMessage" className="form-control mb-4" placeholder="*Your invite message" ></input>
                    </div>
                }

                {countForm > 1 &&
                    <div>
                        <div className="row">
                            <div className="col-6"><input type="text" id="FirstName" className="form-control mb-2" placeholder="*First Name" ></input></div>
                            <div className="col-6"><input type="text" id="LastName" className="form-control mb-2" placeholder="*Last Name" ></input></div>
                        </div>

                        <input type="email" id="FormEmail" className="form-control mb-2" placeholder="*E-mail" ></input>

                        <input type="text" id="FormMessage" className="form-control mb-4" placeholder="*Your invite message" ></input>
                    </div>
                }

                {countForm > 2 &&
                    <div>
                        <div className="row">
                            <div className="col-6"><input type="text" id="FirstName" className="form-control mb-2" placeholder="*First Name" ></input></div>
                            <div className="col-6"><input type="text" id="LastName" className="form-control mb-2" placeholder="*Last Name" ></input></div>
                        </div>

                        <input type="email" id="FormEmail" className="form-control mb-2" placeholder="*E-mail" ></input>

                        <input type="text" id="FormMessage" className="form-control mb-4" placeholder="*Your invite message" ></input>
                    </div>
                }

                <button onClick={onAddPeerClick} disabled={countForm === 3 ? true : false} className="btn btn-info mr-2" >Add Contact</button>
                <button onClick={onDeleteClick} disabled={countForm > 1 ? false : true} className="btn btn-info" >Delete Contact</button>
                <button className="btn btn-warning float-right " >Send and Start!</button>
            </form>
        </div>


    )
}

export default RegistrationGroup;