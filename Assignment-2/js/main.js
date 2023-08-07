// //1:-

    //a:-Removing an element and printing the length of the array.
        let arr = ["1","2","3","4","5","6","7"];
        arr.splice(5,1);
        console.log(arr, arr.length);

    //b:-Converting all the array items to data type numbers
     let arr_b = ["1","2","3","4","5","6","7"];
     const arr_c = arr_b.map(str => {
         return Number(str);
     })
     console.log(arr_c)
    //c:-removing last 3 elements from an array and then adding two string elements to start of the array
        let arr2=["1","2","3","4","5","6","7"];
        arr2.splice(4,3)
        console.log(arr2);
        arr2.splice(0,0,"one","two")
        console.log(arr2);

//d:-String concatination and console sum of array.
   let arr_3 = ["1","2","3","4","5","6","7"];
     console.log(arr_3.join())
     const arr3 = arr_3.map(str => {
         return Number(str);
     });
     let sum=0;
     for (let i = 0; i < arr3.length; i++) {
         sum += arr3[i];
     }
     console.log(sum);
 //e:-filter out item and console the array
     let arr4 = ["1","2","3","4","5","6","7"];
     console.log(`array before removing the element ${arr4}`)
     for(let i= 0;i<=arr4.length;i++)
     {
        if(arr4[i]==="3"){
             arr4.splice(i,1)
         }
     }
     console.log(`Array after removing the element ${arr4}`)
// //f:- console the item when the items are "3,5,7"
    for(let i=0;i<arr3.length;i++)
     {
         if(arr3[i] === 3||arr3[i] === 5||arr3[i] === 7 )
             {
                 console.log(arr[i]);
             }
         }

// //g:-compare two arrays and console if they same datatypes
     let arr5=[1, 2, "3", 4, 5, 6,"7"];
     let countt=0;
     if(arr.length===arr5.length){
         for(let i=0;i<arr.length;i++)
         {
             if(arr[i]===arr5[i])
             {
                 console.log(arr[i])
                 countt++;
             }
         }
     }
     console.log(`Only ${countt} elements are equal`);

// //h:-iterating the array and multiplying the element with its index value
     let arr6 = [0,2,3,7,5,6,8];
     let sum1 = 0;
     for(let j=0;j<arr6.length;j++)
     {
         sum1 += arr6[j]*j;
     }
     if(sum1>40){
         console.log(`Result greater than 40`);
     }
     else{
         console.log(`Result not greater than 40`);
     }

// //i:- merge two array and console it
    let arr7=[2,3,4,5,6];
     let arr8=[7,8,9,10,11];
     let arr9= arr7.concat(arr8);
     console.log(arr9);
    
//2:-Star pattern 
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=(5-i);j++)
    {
       process.stdout.write("");
    }
    for(let k=1;k<=i;k++)
    {
        process.stdout.write(" * ");
    }
    console.log();
}