import React from 'react';
import img1 from'../img/product-description 1.png';
import img2 from'../img/product-description 2.png';
import img3 from'../img/product-description 3.png';
import i1 from'../img/image 7.png';
import i2 from'../img/image 9.png';
import i3 from'../img/image 10.png';
import i4 from'../img/image 11.png';
import i5 from'../img/image 13.png';
import i6 from'../img/image 14.png';
import {Card,CardBody} from 'reactstrap';

export default function Service() {
    return(
    <React.Fragment>
        <div className='container info service'>
            <div className='row '>
            <h3 id='hd'>Product and Service</h3>            
            <br/>            
            <br/>
            <br/>
                <div className='col-12 col-md-4'>
                   <img src={img1} alt='a'/><br/>
                   <h3 id='rd'>Our Product</h3>
                   <br/>
                   <p>Our product is made on the base of our
                      team’s careful research and analyses,<br/>
                      ranging from internet based<br/>
                      application.</p>
                    <br/>
                    <button className='btn rd' >Read More</button> 
                </div>
                <div className='col-12 col-md-4'>
                   <img src={img2} alt='b' /><br/>
                   <h3 id='rd'>Our Service</h3>
                   <br/>
                   <p>DSI’s shared service solutions focus on
                      the front-end based software
                      development, designed specifically for
                      the banking and financial sectors</p>
                    <br/>
                    <button className='btn rd' >Read More</button>
                </div>
                <div className='col-12 col-md-4'>
                   <img src={img3}  alt='c'/><br/>
                   <h3 id='rd'>Our Technology</h3><br/>
                   <p>First JAVA, runs on more than 850
                      million personal computers worldwide,
                      and on billions of devices worldwide,
                      including mobile and TV devices.</p>
                    <br/>
                    <button className='btn rd' >Read More</button>
                </div>                       
             </div>
             </div>
             <div className='info service'>
             <div className='row '>
                <div className='col-6 col-md-3 '>
                <Card>
                        <CardBody>
                            <p id='rd'>System Analyst</p>
                            <h4>Rodney Stratton</h4>
                            <i id='smedia' class="fa fa-fw fa-facebook" style={{color:'red'}}></i>
        
        
                            <i id='smedia' class="fa fa-fw fa-twitter" style={{color:'red'}}></i>
    
    
                            <i id='smedia' class="fa fa-fw fa-instagram" style={{color:'red'}}></i>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-6 col-md-3 '>
                <Card>
                        <CardBody >
                            <div id='smedia'>
                                
                            </div>
                            <p id='rd'>System Analyst</p>
                            <h4>Rodney Stratton</h4>
                            
                            <i id='smedia' class="fa fa-fw fa-facebook" style={{color:'red'}}></i>
        
        
                            <i id='smedia' class="fa fa-fw fa-twitter" style={{color:'red'}}></i>
    
    
                            <i id='smedia' class="fa fa-fw fa-instagram" style={{color:'red'}}></i>
        
    
                        </CardBody>
                    </Card>
                </div>
                <div className='col-6 col-md-3 '>
                <Card>
                        <CardBody>
                            <p id='rd'>Programmer</p>
                            <h4>Rodney Stratton</h4>
                            <i id='smedia' class="fa fa-fw fa-facebook" style={{color:'red'}}></i>
        
        
                            <i id='smedia' class="fa fa-fw fa-twitter" style={{color:'red'}}></i>
    
    
                            <i id='smedia' class="fa fa-fw fa-instagram" style={{color:'red'}}></i>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-6 col-md-3'>
                <Card>
                        <CardBody>
                        <p id='rd'>Programmer</p>
                        <h4>Rodney Stratton</h4>
                        <i id='smedia' class="fa fa-fw fa-facebook" style={{color:'red'}}></i>
        
        
                            <i id='smedia' class="fa fa-fw fa-twitter" style={{color:'red'}}></i>
    
    
                            <i id='smedia' class="fa fa-fw fa-instagram" style={{color:'red'}}></i>
                        </CardBody>
                    </Card>
                </div>                       
             </div>
             </div>
             <div className=' info service'>
             <div className='row'>
                <div className='col-6 col-md-4'>
                    <br/>
                    <br/>
                    <h6>PT Dwidasa Samsara Indonesia</h6>
                    <p>Ruko Jalur Sutera 29A No. 53 <br/>
                       Alam Sutera Serpong, Tangerang 15323</p>        
                </div>
                <div className='col-6 col-md-4'>
                    <h4>Contact</h4>
                    <br/>
                    <p>Phone: +62.21.5314.1135<br/>
                    Fax : +62.21.5314.1135<br/>
                    Email : community@dwidasa.com</p>
                </div>
                <div className='col-12 col-md-4'>
                <img src={i1} width={80} alt='d'/><img src={i2} width={80} alt='e'/><img src={i3} width={80} alt='f'/><br/>
                <img src={i4} width={80} alt='g'/><img src={i5} width={80} alt='h'/><img src={i6} width={80} alt='h'/>
                </div>                       
             </div>            
        </div>
        </React.Fragment>       
    )
}