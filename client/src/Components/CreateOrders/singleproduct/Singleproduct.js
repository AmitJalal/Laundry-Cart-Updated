import React, { useEffect } from "react";
import "./singleproduct.css";

export default function Singleproduct({
	name,
	description,
	image,
	customerorder,
	render,
}) {
	const [quantity, setQuantity] = React.useState(0);
	const [wash, setWash] = React.useState(false);
	const [iron, setIron] = React.useState(false);
	const [dry, setDry] = React.useState(false);
	const [bleach, setBleach] = React.useState(false);

	const handleClick = async (e) => {
		if (e.target.name === "quantity") {
			setQuantity(e.target.value);
		}
	};
	const selectWashType = (e) => {
		if (e.target.name === "wash") {
			setWash(!wash);
		} else if (e.target.name === "iron") {
			setIron(!iron);
		} else if (e.target.name === "dry") {
			setDry(!dry);
		} else if (e.target.name === "bleach") {
			setBleach(!bleach);
		}
	};

	var washtype = "";
	if (wash) {
		washtype += "Wash,";
	}
	if (iron) {
		washtype += "iron,";
	}
	if (dry) {
		washtype += "dry,";
	}
	if (bleach) {
		washtype += "bleach,";
	}

	var totalPrice = 0;
	if (wash) {
		totalPrice += 10;
	}
	if (iron) {
		totalPrice += 10;
	}
	if (dry) {
		totalPrice += 10;
	}
	if (bleach) {
		totalPrice += 50;
	}

	customerorder[name] = {
		name: name,
		quantity: quantity,
		washtype: washtype,
		totalPrice: totalPrice,
	};
	useEffect(() => {
		setQuantity(0);
		setWash(false);
		setBleach(false);
		setDry(false);
		setIron(false);
	}, [render]);

	const handleReset = () => {
		setQuantity(0);
		setWash(false);
		setBleach(false);
		setDry(false);
		setIron(false);
	};

	return (
		<>
			<div className="singleproduct__container">
				<div className="singleproduct__container__product">
					<div className="singleproduct__product">
						<img
							alt="product"
							className="product"
							src={`http://localhost:4143/${image}`}
						></img>
						<div className="single__productdetails">
							<h3>{name}</h3>
							<p>{description}</p>
						</div>
					</div>
				</div>
				<div className="singleproduct__quantity">
					<input
						value={quantity}
						name="quantity"
						onChange={handleClick}
						type={"number"}
					></input>
				</div>
				<div className="singleproduct__widgets">
					<img
						alt="wash"
						className="widgets"
						name="wash"
						onClick={selectWashType}
						src={
							wash
								? "images/washing-machine-onselect.svg"
								: "images/washing-machine.svg"
						}
					></img>
					<img
						alt="iron"
						className="widgets"
						name="iron"
						onClick={selectWashType}
						src={iron ? "images/ironing-onselect.svg" : "images/ironing.svg"}
					></img>
					<img
						alt="dry"
						className="widgets"
						name="dry"
						onClick={selectWashType}
						src={dry ? "images/towel-onselect.svg" : "images/towel.svg"}
					></img>

					<img
						alt="bleach"
						name="bleach"
						onClick={selectWashType}
						className="widgets"
						src={bleach ? "images/bleach-onselect.svg" : "images/bleach.svg"}
					></img>
				</div>
				<div className="singleproduct__price">
					{quantity === 0 ? (
						"------"
					) : (
						<>
							<p className="singleproduct__Price__div">
								{quantity} x {totalPrice} ={" "}
							</p>{" "}
							<p className="singleproduct__mainPrice__div">
								{quantity * totalPrice}
							</p>
						</>
					)}
				</div>
				<button onClick={handleReset} className="reset">
					Reset
				</button>
			</div>
		</>
	);
}
