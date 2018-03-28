
function LocalStorage() {}

LocalStorage.save = (storageKey,jsonKey,data) => {
  let storage = JSON.parse(localStorage.getItem(storageKey));
  storage[jsonKey]= data;
  localStorage.setItem(storageKey, JSON.stringify(storage));
  console.log("LocalStorageLib")
  console.log(localStorage);
}

export default LocalStorage;
