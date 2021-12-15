import React from 'react'
import './call.action.css'

function NewsLetter() {
    return (
       <>
       
       <div className="newsletter">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Subscribe Our Newsletter</h1>
                    </div>
                    <div className="col-md-6">
                        <div className="form">
                            <input type="email" value="Your email here"/>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NewsLetter
