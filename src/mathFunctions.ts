export function abs(x: number): number {
    if (x >= 0) {
      return x;
    } else {
      return -x;
    }
  }

  export function homeworkAverage(scores: number[]): number {
    let min = Infinity; 
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
       if (scores[i] < min)
         min = scores[i];
       total += scores[i];
    }
    total = total - min;
    return scores.length > 1 ? total / (scores.length - 1) : 0; 
 }

 export function badFunction() {
  let a = "Hello";
  a  = "";
  if (true) {
    console.log("ok");
  }
  else {
    console.log("ko");
  }
  
 }