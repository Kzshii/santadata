
function LocalStorage() {}

LocalStorage.save = (data,key, ...args) => {
  console.log("LocalStorage.Save:")

  if (args.length > 0){
    if (!(localStorage.getItem(key))){
      LocalStorage.createKey(key);
    }

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
    console.log(storage);
    localStorage.setItem(key,JSON.stringify(storage));
  }else{
    if (LocalStorage.isJson(data)){
      localStorage.setItem(key,JSON.stringify(data));
    }else{
      localStorage.setItem(key,data);
    }
  }
}

LocalStorage.isJson = (data) =>{
  try {
        JSON.parse(data);
        return true;
    } catch (e) {
        return false;
    }

    return true;
}

LocalStorage.createKey = (key)=> {
  localStorage.setItem(key,JSON.stringify({}));
}

LocalStorage.set = (data,key) => {
  localStorage.setItem()
}


LocalStorage.get = (key, ...args) => {

  console.log("LocalStorage.get");
  if (localStorage.getItem(key)){
    const storage = JSON.parse(localStorage.getItem(key));
    let pointer = storage;
    const lastArg = args[args.length - 1];
    let path= key + "/";

    console.log("começou")
    args.forEach(
      (name) => {
        if (pointer[name] !==  undefined){
          path += name + "/";
          pointer = pointer[name];
        }else{
          console.error('Key "'+name+'" not found in the path "'+path
                        + '" To create this key use the function save() of the LocalStorage lib');
          return null;
        }
      }
    )
    return pointer;
  }else{
    console.error('LocalStorage key "'+key+'" not found! '
                  + 'To create this key use the function save() or createKey()  of the LocalStorage lib');
    return null;
  }

}

export default LocalStorage;
