class ErrorUtil{
  showError( errorCode: number, text: string){
    console.log("Something is wrong. Contact admin if issue persists");
  }
  
  showWarning(msg){
    console.log(msg);
  }
  
  static showAlert(){
    alert("Offer valid still stock exist");
  }
}