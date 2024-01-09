import React, { Component } from 'react'
import {
   Dropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
} from 'reactstrap';

class ProfileIcon extends Component {
   constructor(props) {
      super(props)
      this.toggle = this.toggle.bind(this);
      this.state = {
         dropdownopen: false
      }
   }

   toggle = () => {
      this.setState(prevState => ({
         dropdownOpen: !prevState.dropdownOpen
      }));
   }


   render() {
      return (
         <div style={{marginRight: '230px'}}>
            <div className="d-flex p-2">
               <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} direction={this.direction}>
               <DropdownToggle
                  tag='span'
                  data-toggle='dropdown'
                  aria-expanded={this.state.dropdownOpen}
               >
                  <img 
                     src='https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png'
                     className='br-100 ba h3 w3 dib pointer'
                     alt="" 
                  />
               </DropdownToggle>
               <DropdownMenu className='b--transparent shadow-5' 
                  style={{
                     marginTop: '20px', 
                     backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
               >
                  <DropdownItem onClick={this.props.toggleModal}>View Profile</DropdownItem>
                  <DropdownItem onClick={() => this.props.onRouteChange('signout')}>Sign Out</DropdownItem>
               </DropdownMenu>
               </Dropdown>
            </div>
        </div>
      )
   }
}

export default ProfileIcon