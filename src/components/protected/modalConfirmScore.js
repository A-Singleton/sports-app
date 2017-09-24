
import React, { Component } from 'react'
import {Popover, Tooltip, Button, Modal, Tooltips, OverlayTrigger} from 'react-bootstrap'
import RepReport from './repReport'
import ConfirmMatchModal from './confirmMatchModal'

export default class modalConfirmScore extends Component {

  constructor(props) {
    super(props);
    this.state = { showModal: false };

  }
// getInitialState() {
//    return { showModal: false };
//  }

 close = () => {
   this.setState({ showModal: false });
 }

 open = () => {
   this.setState({ showModal: true });
 }

 render() {
   const popover = (
     <Popover id="modal-popover" title="popover">
       very popover. such engagement
     </Popover>
   );
   const tooltip = (
     <Tooltip id="modal-tooltip">
       wow.
     </Tooltip>
   );

   var rateOpener = "Rate your Opponent's Sportsmanship"
   var rateExplanation = "Your rating is anonymous, but will help other players find good sports to play with"
   //<RepReport />
   return (
     <div>
       <p>Click to get the full Modal experience!</p>

       <Button
         bsStyle="primary"
         bsSize="large"
         onClick={this.open}
       >
         Launch demo modal
       </Button>

       <Modal show={this.state.showModal} onHide={this.close}>
         <Modal.Header closeButton>
           <Modal.Title>Almost Done...</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <h2> { rateOpener } </h2>
           <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

           <h4>Popover in a modal</h4>
           <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

           <h4>Tooltips in a modal</h4>
           <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

           <hr />

           <h4>Overflowing text to show scroll behavior</h4>
           <ConfirmMatchModal players={this.props.match}/>

          <h5> { rateExplanation } </h5>
         </Modal.Body>
         <Modal.Footer>
           <Button onClick={this.close}>Close</Button>
         </Modal.Footer>
       </Modal>
     </div>
   );
 }
};
