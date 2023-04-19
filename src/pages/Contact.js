import React from "react";
function Contact(){
    return(<main className="container">
        <h2 className="subheading">Contact</h2>
 
<form>
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">"eugerald05@yahoo.com"/</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Bigfish23$</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</main> )
}


