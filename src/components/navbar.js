import React, { useState, useEffect } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  const AppNavbar =  () => {
    const [isOpen, setIsOpen] = useState(false);
  
    useEffect(()=>{

    });
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">메뉴선택</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  변환기
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    맞춤 계산기
                  </DropdownItem>
                  <DropdownItem>
                    제품 선택 계산기
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    제품 비교
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/components/">커뮤니티</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default AppNavbar;