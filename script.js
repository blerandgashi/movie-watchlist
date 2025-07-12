class Solution {
    onesComplement(s, n) {
        // code here
        
    }
}

let n = 76;
let pow = Math.pow(n, 2);

let str = n + "";
let str1 = pow + "";
if (str.endsWith(str1[str1.length-1])) {
  console.log('auto');
}else{
  console.log('not auto');
}
