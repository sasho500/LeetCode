var isPalindrome = function(s) {

    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  

    let left = 0;
    let right = s.length - 1;
  
   
    while (left < right) {
     
      if (s[left] !== s[right]) {
        return false;
      }
  
    
      left++;
      right--;
    }
  
 
    return true;
  };
  

  const s1 = "A man, a plan, a canal: Panama";
  console.log(isPalindrome(s1)); 
  

  const s2 = "race a car";
  console.log(isPalindrome(s2)); 

  const s3 = " ";
  console.log(isPalindrome(s3)); 