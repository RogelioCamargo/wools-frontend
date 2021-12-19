import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import BrandIcon from "./BrandIcon";
import MenuIcon from "./MenuIcon";
import LinkList from "./LinkList";
import { Offcanvas, Button } from "react-bootstrap";

const Header = () => {
	const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

	return (
		<header className="bg-primary">
			<div className="d-flex align-items-center justify-content-between h-50px">
				<div className="col-3 p-0">
					<div className="w-50 mx-auto">
						<Link className="text-dark no-text-decoration" to="/">
							<BrandIcon />
						</Link>
					</div>
				</div>
				<div className="col-3 p-0">
					<div className="d-flex w-50 mx-auto justify-content-end d-block d-sm-none">
						<Button onClick={toggleShow} className="p-0">
							<MenuIcon />
						</Button>
						<Offcanvas show={show} onHide={toggleShow} className="w-75">
							<Offcanvas.Header closeButton>
								<Offcanvas.Title>Menu</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<LinkList onClick={toggleShow}/>
							</Offcanvas.Body>
						</Offcanvas>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;