import MenuItems from "../MenuItems/MenuItems";
import {useSelector} from 'react-redux';

function MenuList({ getPizzas }) {

    const menuReducer = useSelector(store => store.menuReducer)

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
        </>
    )
}

export default MenuList;