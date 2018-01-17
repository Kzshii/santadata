class Base64 {
  encode(data) {
    return(
      btoa(JSON.stringify(data))
    );
  }
}

export default Base64;