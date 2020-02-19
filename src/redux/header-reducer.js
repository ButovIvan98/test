let initialState ={
    Express_main: [
            {id: '/express/calculate',title:'Калькулятор' , active: 'classes.active'},
            {id: '/express/users', title:'Мои отправления', active: 'classes.active'},
            {id: '/express/my_shipments', title:'Счета и оплата', active: 'classes.active'},
            {id: '/express/my_address', title:'Мои контакты', active: 'classes.active'},
    ],
        Cargo_main: [
            {id: '/car',title:'Найти машины' , active: 'classes.active'},
            {id: '/cargo', title:'Найти грузы', active: 'classes.active'},
            {id: '/my_car', title:'Мои машины', active: 'classes.active'},
            {id: '/my_cargo', title:'Мои грузы', active: 'classes.active'},
            {id: '/my_contact', title:'Мои контакты', active: 'classes.active'},
]
};
const SidebarReducer = (state = initialState, action)=>
{
    return state;
}

export default SidebarReducer;