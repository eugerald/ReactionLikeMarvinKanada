import React from "react";
function About(){
    return(<main className="container">
        <h2 className="subheading">About</h2>
    <div className="d-flex justify-content-between">
        <img src={process.env.PUBLIC_URL + "https://apis.mail.yahoo.com/ws/v3/mailboxes/@.id==VjN-SEVV1cdXL0yPAvZ_gejJVSURw62U79mYzreDUVcYfplgoNC4eQLwROgVcnKgok9u6F676llwJijNHGM9Rx73ng/messages/@.id==ADPsPsIAjUpzY-scIgaD-JF8-T0/content/parts/@.id==2/thumbnail?appid=YMailNorrin"}/>
        <div className="container-fluid">
            <p>I learned front in wevdevelopment with CSS, HTML, and javascript. Then developed some back end coding skills with use of react, bootstrap.com, and api. A very determined coder who is willing to contiue growth in education. Very interested in what the future will bring for coding opportunity and other outlets. I pay very good attention to detail which is vital for being a professional coder. A habitual reader and ready to apply recently learned skills to a coding career</p>
            </div>
            </div>
   </main> )
}

export default About;