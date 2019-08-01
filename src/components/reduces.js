

const data =(state={name:[]},action)=>{
switch(action.type){
  case "virus":
      return {
          ...state,
          khushi :action.payload
      }

   default :
   return state
}

}

export default data;