
function LocalStorage() {}

LocalStorage.save = (data,key, ...args) => {
  console.log("LocalStorage.Save:")
  const storage = JSON.parse(localStorage.getItem(key));
  let pointer = storage;
  let keys = Object.keys(storage);
  let name;
  const lastArg = args[args.length - 1];

  for (let i = 0 ; i < args.length - 1 ; i++) {
    keys = Object.keys(pointer);
    name= args[i];
    if (!(name in keys)){
      pointer[name]= {};
      pointer= pointer[name];
    }else{
      pointer = pointer[name];
    }
  }
  pointer[lastArg] = data;
  localStorage.setItem(key,JSON.stringify(storage));
}



export default LocalStorage;
