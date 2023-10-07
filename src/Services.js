import React from 'react'
import web1 from './images/BE.avif'
import web2 from './images/vocational.jpg'
import web3 from './images/mh.avif'
import web4 from './images/AV1.png'
import web5 from './images/istockphoto-667434682-612x612.jpg'
import web6 from './images/programming-languages-1.avif'
import ProgressTracker from './ProgressTracker'
import Aintro from './Aintro'
import Bintro from './Bintro'
import Cintro from './Cintro'
import Dintro from './Dintro'
import Eintro from './Eintro'
import Mycomponent from "./OpenTab"


function Services() {
    return (
  <div>
  <div className='my-5'>
  <h1 className='text-center'>Our Services</h1>
  </div>
  <div className="container-fluid mb-5">
  <div className="row">
  <div className="col-10 mx-auto">
  <div className="row gy-5">
  <div className="col-md-4 col-10 mx-auto">
  
  <div class="card">
    <img src={web1} class="card-img-top" alt="img"/>
    <div class="card-body">
      <h5 class="card-title font-weight-bold">Basic Education</h5>
      <p class="card-text">Explore & Learn</p>
      <a href="/Aintro" class="btn btn-primary">Explore</a>
    </div>
  </div>
  
  </div>
  <div className="col-md-4 col-10 mx-auto">
  
  <div class="card">
    <img src={web2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Vocational Training</h5>
      <p class="card-text">Learn different Skills</p>
      <a href="/Bintro" class="btn btn-primary">Explore</a>
    </div>
  </div>
  
  </div>
  <div className="col-md-4 col-10 mx-auto">
  
  <div class="card">
    <img src={web3} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Mental Health</h5>
      <p class="card-text">Mental well-being</p>
      <button id="Meet" class="btn btn-primary" onClick={Mycomponent}>Call</button> 
    </div>
  </div>
  
  </div>
  <div className="col-md-4 col-10 mx-auto">
  
  <div class="card">
    <img src={web4} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Health and Wellness:</h5>
      <p class="card-text">Physical Health</p>
      <a href="/Dintro" class="btn btn-primary">Explore</a>
    </div>
  </div>
  
  </div>
  <div className="col-md-4 col-10 mx-auto">
  
  <div class="card">
    <img src={web5} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Personal Development </h5>
      <p class="card-text">Build yourself</p>
      <a href="/Eintro" class="btn btn-primary">Explore</a>
    </div>
  </div>
  
  </div>
  <div className="col-md-4 col-10 mx-auto" style={{ width: '25rem',height: '30rem' }}>
  
  <div class="card">
    <img src={web6} class="card-img-top " alt="..."/>
    <div class="card-body">
      <h5 class="card-title">My Learning</h5>
      <p class="card-text">Your progress </p>
      <a href="/ProgressTracker" class="btn btn-primary">Click</a>
    </div>
  </div>
  
  </div>
  </div>
  
  </div>
  </div>
  </div>
  
  
  
  </div>
     
     
  
    )
  }

export default Services;
