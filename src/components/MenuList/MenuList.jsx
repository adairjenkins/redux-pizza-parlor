import MenuItems from "../MenuItems/MenuItems";
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom'

function MenuList({ getPizzas }) {

    const menuReducer = useSelector(store => store.menuReducer)
    const history = useHistory();

    const handleClick = () => {
        history.push('/form');
    }

    return (
        <>
            <div>
                {/* <p>Menu List goes here:</p> */}
                {/* Map through the pizza array */}
                {menuReducer.map((pizza) => {
                    return (
                        <MenuItems
                            key={pizza.id}
                            getPizzas={getPizzas}
                            pizza={pizza}
                        />
                    );
                })}
            </div>
            <button onClick={handleClick}>Proceed....</button>
        </>
    )
}


export default MenuList;