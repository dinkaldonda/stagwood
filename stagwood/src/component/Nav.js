import React from 'react'
import img1 from '../asset/logo.png';
import card from '../asset/card.png';
import '../component/Nav.css';


export default function Nav() {
  return (
    <>
    <script> 
   
    </script>
    <nav className="navbar navbar-expand-lg bg-light">
   </nav>
    <body>
    <div class="container">

<form action="">

    <div class="row">

        <div class="col">

            <h3 class="title">billing address</h3>

            <div class="inputBox">
                <span>full name :</span>
                <input type="text" placeholder="abc"/>
            </div>
            <div class="inputBox">
                <span>email :</span>
                <input type="email" placeholder="example@example.com"/>
            </div>
            <div class="inputBox">
                <span>address :</span>
                <input type="text" placeholder="room - street - locality"/>
            </div>
            <div class="inputBox">
                <span>city :</span>
                <input type="text" placeholder="mumbai"/>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>state :</span>
                    <input type="text" />
                </div>
                <div class="inputBox">
                    <span>zip code :</span>
                    <input type="text" placeholder="123 456"/>
                </div>
            </div>

        </div>

        <div class="col">

            <h3 class="title">payment</h3>
                      <div class="din"><br />
                 <input type="radio" name="cash on delivery" id='dd'/>
             <span>    Cash on delivery</span><br />

             <input type="radio" name='net banking'/>
             <span>   Net Banking</span><br />
             </div>
            <div class="inputBox">
                <span>cards accepted :</span>
                <img src={card} alt=""/>
            </div>
            <div class="inputBox">
                <span>name on card :</span>
                <input type="text" placeholder="mr.abc"/>
            </div>
            <div class="inputBox">
                <span>credit card number :</span>
                <input type="number" placeholder="1111-2222-3333-4444"/>
            </div>
            
            <div class="flex">
                <div class="inputBox">
                    <span>exp Month/year :</span>
                    <input type="number" placeholder="2022/01"/>
                </div>
                <div class="inputBox">
                    <span>CVV :</span>
                    <input type="text" placeholder="123"/>
                </div>
            </div>

        </div>

    </div>

    <input type="submit" value="proceed to checkout" class="submit-btn"/>

</form>

</div>    

    </body>
    </>
  )
}
