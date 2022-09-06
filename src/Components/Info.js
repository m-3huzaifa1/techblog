import React from 'react';
import img1 from '../img/pana.svg';
import img2 from '../img/pana-1.svg';
export default function Info() {
    return(
        <div>
            <div className='row info'>
                <div className='col-6'>
                      <h1>Making the most of the ever-growing</h1>
                      <h2 className='sub-heading'>Information Technology</h2>
                      <br/>
                      <p>Managed by a team of professional experts with extensive
                        experience and impressive track records</p>
                       <br/>
                       <button className='btn rd' >Read More</button>
                </div>
                <div className='col-6 im'>
                   <img src={img1} height={300} alt='info'/>
                </div>
            </div>
            <div className='row info tech'>
                <div className='col-12 col-sm-6 im'>
                   <img src={img2} width={400} height={400} alt='tech'/>
                </div>
                <div className='col-12 col-sm-6'>
                    <h1>Welcome to <span id='rd'>Dwidasa Samsara Indonesia (DSI)</span></h1>
                    <br/>
                    <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010
                       by the founders, who each of them has a common end objective
                       to innovate new creations by making the most of the
                       ever-growing information technology through <span id='rd'>DSI</span>’s distinct
                       front-end based application concept.
                       <br/>
                       <br/>
                       Managed by a team of professional experts with extensive
                       experience and impressive track records,<span id='rd'>DSI</span> believes that
                       continuous improvements and innovations assure your business
                       to run effectively and efficiently</p>
                </div>
            </div>
        </div>
    )
}