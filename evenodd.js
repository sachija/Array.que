
const findEvenOdd = (N, Arr) => 
{
  let even=0;
  let odd=0;
  let A=[];
   
  for(let i=0;i<N;i++) {
     
    if(Arr[i]%2===0){
       
      even+=Arr[i];
       
    }
    else{
      odd+=Arr[i];
    }
    
  }
   
  A[0]=even;
  A[1]=odd;
  return A
};
 
