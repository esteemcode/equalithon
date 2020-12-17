import { React, useState } from 'react';
import Navigation from './landingPage/navigation/Navigation';
import { Container} from 'react-bootstrap';

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
            
            <Navigation />
            <form className="m-auto col-6 border border-light p-5" action="#!">

                <Container className="cyan form-header text-white mb-3">
                    <h5> One last thing.</h5>
                    <p> Invite 3 peers: the more to help, the merrier!</p>
                </Container>

                <p className="mb-2 ml-2">Your contacts will receive an email with your invite; ie "Essteem does cool things for women in tech! Thought you'd be interested."</p>

                {countForm > 0 &&
                    <div>
                        <div className="row">
                            <div className="col-6"><input type="text" id="FirstName" className="form-control mb-2" placeholder="First Name" ></input></div>
                            <div className="col-6"><input type="text" id="LastName" className="form-control mb-2" placeholder="Last Name" ></input></div>
                        </div>

                        <input type="email" id="FormEmail" className="form-control mb-2" placeholder="E-mail" ></input>

                        <input type="text" id="FormMessage" className="form-control mb-4" placeholder="Your invite message" ></input>
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
                            <div className="col-6"><input type="text" id="FirstName" className="form-control mb-2" placeholder="First Name" ></input></div>
                            <div className="col-6"><input type="text" id="LastName" className="form-control mb-2" placeholder="Last Name" ></input></div>
                        </div>

                        <input type="email" id="FormEmail" className="form-control mb-2" placeholder="E-mail" ></input>

                        <input type="text" id="FormMessage" className="form-control mb-4" placeholder="Your invite message" ></input>
                    </div>
                }

                <button onClick={onAddPeerClick} disabled={countForm === 3 ? true : false} className="btn cyan mr-2" >Add Contact</button>
                <button onClick={onDeleteClick} disabled={countForm > 1 ? false : true} className="btn cyan" >Delete Contact</button>
                <button className="btn btn-warning float-right " >Send and Start!</button>
                <button className="btn float-right border mr-2" >Skip</button>
                
            </form>
        </div>


    )
}

export default RegistrationGroup;