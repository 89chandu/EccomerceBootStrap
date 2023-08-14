import React, { useReducer } from "react";

export const CartContext = React.createContext();

const intitState = {
	TotalCartItems: 0,
	cartItems: [],
	TotalCartAmount: 0,
};

const Reducer = (state, action) => {
	switch (action.type) {
		case "INC_CART_COUNT": {
			return {
				...state,
				TotalCartItems: state.TotalCartItems + 1,
			};
		}
		case "ADD_2_CART": {
			const InCart = state.cartItems.find(
				(item) => item.img_id === action.obj.img_id
			);

			if (!InCart) {
				let newObj = { ...action.obj, quantity: 1 };
				return {
					...state,
					cartItems: [...state.cartItems, newObj],
					TotalCartAmount:
						state.TotalCartAmount + action.obj.price,
				};
			} else {
				state.cartItems.forEach((item) => {
					if (item.img_id === action.obj.img_id) {
						item.quantity = item.quantity + 1;
					}
				});
				return {
					...state,
					TotalCartAmount:
						state.TotalCartAmount + action.obj.price,
				};
			}
		}
		case "REMOVE_FROM_CART": {
			let newArr = state.cartItems.filter((item) => {
				return item.img_id !== action.img_id;
			});
			let tbd = state.cartItems.find(
				(item) => item.img_id === action.img_id
			);
			let newTotal = tbd.quantity * tbd.price;
			return {
				...state,
				cartItems: newArr,
				TotalCartAmount: state.TotalCartAmount - newTotal,
				TotalCartItems: state.TotalCartItems - tbd.quantity
			};
		}

		default:
			return state;
	}
};

export const CartContextProvider = (props) => {
	const [state, Dispatch] = useReducer(Reducer, intitState);
	return (
		<CartContext.Provider value={{ state, Dispatch }}>
			{props.children}
		</CartContext.Provider>
	);
};