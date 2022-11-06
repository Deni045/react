


function App() {

    const arr = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
    
    const positive = arr.filter( item => {
      if(item > 0){
        return <div>item</div>
      }
    })

    const messages = [
      {message: 'hello', error: true},
      {message: 'javascript', error: false},
      {message: 'expovisiov', error: true},
      {message: 'react', error: true},
      {message: 'angular', error: false},
      {message: 'es6', error: false},
    ];

    const mes = messages.filter(item =>{
      if(item.error < true){
        return item
      }
    })

    console.log(mes)
        
    const words= ['expo', 'js', 'react', 'css', 'angular', 'vue', 'html'];
    
    let ast= words.map(item => {
      if(item.length < 5)
      item = '***';{
      return item
      }
    })

    console.log(ast)
  
      constsendMessage = (message1 => {
       /*
       * here is some big code to send a message
       */
     })
    
      const half = (number => {
       return number / 2;
     })
    
     const showConsole = () => {
       console.log('Expo');
     }
    
    const concatWords = ((first, second) => {
       return first + second;
     })
    
    const justText = function(){ 
      return 'expo';}
    
     const logging = function(text){
      console.log(text)
     }
    
     const add = function(x,y){
       const z = 3;
       return z*x*y;
     }
    
     const onlyPositive = function(number){
       if(number < 0) {
         return false;
       }    
       return true;
     }
     
  return (
   <div>
    {positive}
    
   </div>
  );
}

export default App;
