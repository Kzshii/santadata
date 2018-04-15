# About this lib

This custom library uses the react-form package to implements an easy way to create Forms based on a JSON template.

# Functions:

##LocalStorage.save = (data,key, ...args [optional])

###Description

This function is responsible for saving data in the localstorage

##Parameters

###data:
    data that will be saved

###key:
    localstorage key where the data will be saved

### ...args:
    If the location you want to access is a JSON, you can add multiple keys, forming a path

## Basic usage

###function call
```
LocalStorage.save("texto","consult","medicines","analgesico");
```
LocalStorage Result
{
  consult: {
    medicines:{
      analgesico: "texto"
    }
  }
}


##LocalStorage.get = (key, ...args [optional])

###Description

this function is responsible for picking up LocalStorage data

##Parameters

###key:
  place where data is stored

### ...args:
    If the location you want to access is a JSON, you can add multiple keys, forming a path

## Basic usage

###function call
```
variavel = LocalStorage.get("consult","medicines","analgesico");
//"texto";
```
LocalStorage

{
  consult: {
    medicines:{
      analgesico: "texto"
    }
  }
}
