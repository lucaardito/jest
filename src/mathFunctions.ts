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

 export function badFunction(input: any): any {
  let data = input;
  let result = 0;
  let a = 10, b = 20;
  data.forEach((d: any) => {
      if (d.someProp == undefined) {
          console.log("Errore: proprietà mancante");
          result += a * b;
      } else {
          result += d.someProp;
      }
  });
  globalVar = result;
  console.log("Il risultato è: " + result);
  return result;
}

var globalVar = 0;
  