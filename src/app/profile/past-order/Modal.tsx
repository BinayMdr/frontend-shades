import React from 'react';

interface ModalProps {
    closeModal: () => void; 
  }

const Modal: React.FC<ModalProps> = ({closeModal}) => {
  return (
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-body m-2">
                  <button className="close" onClick={closeModal} style={{ position: 'absolute', right: '10px', zIndex: '1000' }}>×</button>
                    <h3 className="view__product__code mt-4">#SWS0010</h3>
                    <div className="row mt-4">
                        <div className="col-lg-12">
                            <div className="view__product__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th style={{"width":"40%"}}>Product</th>
                                            <th style={{"width":"20%"}}>Qty.</th>
                                            <th style={{"width":"20%"}}>Price</th>
                                            <th style={{"width":"20%"}}>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td >Sunglasses</td>
                                            <td >1</td>
                                        
                                            <td >Rs. 30</td>
                                            <td >Rs. 30</td>
                                        </tr>
                                        <tr>
                                            <td >Animal Printed in cheetah</td>
                                            <td >2</td>
                                            <td >Rs. 300</td>
                                            <td >Rs. 600</td>
                                        </tr>
                                        
                                        <tr>
                                            <td ></td>
                                            <td ></td>
                                            <td style={{"borderTop":"1px solid black" }}>Sub Total</td>
                                            <td style={{"borderTop":"1px solid black" }}>Rs. 630</td>
                                        </tr>
                                        <tr>
                                            <td ></td>
                                            <td ></td>
                                            <td >Discount</td>
                                            <td >Rs. 30</td>
                                        </tr>
                                        <tr>
                                            <td ></td>
                                            <td ></td>
                                            <td style={{"borderTop":"1px solid black" }}>Total</td>
                                            <td style={{"borderTop":"1px solid black" }}>Rs. 630</td>
                                        </tr>

                                        <tr>
                                            <td >Status: Completed</td>
                                            <td ></td>
                                            <td ></td>
                                            <td ></td>
                                        </tr>
                                        <tr>
                                            <td >Payment: Online</td>
                                            <td ></td>
                                            <td ></td>
                                            <td ></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Modal;
