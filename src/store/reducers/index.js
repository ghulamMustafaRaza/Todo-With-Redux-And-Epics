import actions from '../actions'

let  initialState = {
    // todo: ['sadsadas', 'asdsasasa'],
    cartItems: [],
    product: [
      {
         "product-name":"MEN'S BETTER THAN NAKED&trade; JACKET",
         "product-image-url":"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png",
         "header-top-right-text":"Shop All",
         "header-top-left-text":"Men's",
         "product-url":"http://www.thenorthface.com/catalog/sc-gear/men-39-s-better-than-naked-8482-jacket.html",
         "header-top-right-url":"http://www.thenorthface.com/en_US/shop-mens/",
         "product-cta-text":"Shop Now"
      },
      {
         "product-name":"WOMEN'S BETTER THAN NAKED&trade; JACKET",
         "product-image-url":"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png",
         "header-top-right-text":"Shop All",
         "header-top-left-text":"Women's",
         "product-url":"http://www.thenorthface.com/catalog/sc-gear/women-39-s-better-than-naked-8482-jacket.html",
         "header-top-right-url":"http://www.thenorthface.com/en_US/shop-womens/",
         "product-cta-text":"Shop Now"
      },
      {
         "product-name":"WOMEN'S SINGLE-TRACK SHOE",
         "product-image-url":"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png",
         "header-top-right-text":"Shop All",
         "header-top-left-text":"Running Shoes",
         "product-url":"http://www.thenorthface.com/catalog/sc-gear/womens-single-track.html",
         "header-top-right-url":"http://www.thenorthface.com/webapp/wcs/stores/servlet/TNFSearchResult?langId=-1&amp;storeId=207&amp;catalogId=10201&amp;searchTerm=running%20shoes",
         "product-cta-text":"Shop Now"
      },
      {
         "product-name":"Enduro Boa&reg; Hydration Pack",
         "product-image-url":"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png",
         "header-top-right-text":"Shop All",
         "header-top-left-text":"Equipment",
         "product-url":"http://www.thenorthface.com/catalog/sc-gear/enduro-boa.html",
         "header-top-right-url":"http://www.thenorthface.com/en_US/shop-equipment/",
         "product-cta-text":"Shop Now"
      }
    ]
}

export default (state = initialState, action) => {
    switch (action.type){
        case actions.ADD_REDUCER: 
            return {...state, cartItems: state.cartItems.filter(
                a => {
                    console.log(a.id === action.payload)
                    return a.id === action.payload
                }
            )[0] ? state.cartItems.map(a => {
                return (a.id === action.payload) ? {...a, qty: a.qty + 1} : a
            }) : state.cartItems.concat({...state.product[action.payload], id: action.payload, qty: 1})}
        case actions.DELETE_REDUCER:
            let cartItems = [...state.cartItems].filter((a, i) => i !== action.payload) 
            console.log(cartItems)
            return {...state, cartItems}
        case actions.ADD_ITEM: 
        console.log('asdsadsaas',  action.payload, state.cartItems.map((a, i) => (i === action.payload) ? {...a, qty: a.qty + 1} : a))
            return {...state, cartItems: state.cartItems.map((a, i) => (i === action.payload) ? {...a, qty: a.qty + 1} : a)}
        case actions.DELETE_ITEM: 
            return {...state, cartItems: state.cartItems.map((a, i) => (i === action.payload) ? {...a, qty: a.qty - 1} : a).filter(a => a.qty > 0)}
        default:
            return state
    }
}