
function LocalStorage() {}

LocalStorage.save = (data,key, ...args) => {//
    const storage= localStorage.getItem(key);
    if (!storage){
      console.log("LocalStorage key "+key+"  not found!");
      console.log('To create this key use the function CreateKey() of the LocalStorage lib');
      return null;
    }else{
      let pointer = JSON.parse(storage);
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
}

LocalStorage.get = (key, ...args) => {

  const storage= localStorage.getItem(key);

  if (!storage){
    console.log('LocalStorage key '+key+' not found!');
    console.log('To create this key use the function CreateKey() of the LocalStorage lib');
    return null;
  }else{
    let storage = JSON.parse(localStorage.getItem(key));

    let pointer = storage;
    const lastArg = args[args.length - 1];
    let path = key + "/";

    args.forEach(
      (name) => {
        if (pointer[name] !==  undefined){
          pointer = pointer[name];
          path+= name +"/";
        }else{
          console.log('Key '+name+' not found in the path '+path);
          console.log("To create this key use the function Save() of the LocalStorage lib");
          return null;
        }
      }
    )
    return pointer;
  }
}

export default LocalStorage;
