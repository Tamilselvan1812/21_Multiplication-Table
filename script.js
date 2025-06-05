function generateTable() {
            let result = '';
            let number = parseInt(document.getElementById("my-input").value);        //  let name = "vijay";
                                                                                     //  console.log("hi my name is "+name) = concatenation
                                                                                     //  console.log(`hi my name is ${name}`) = template literals
             if (isNaN(number)) {                                                    // NaN = not an number
                result = "Enter valid input";
            } else {
                let i = 1;
                let n = number;
                result = '';

                 while (i <= 10) {                                           // initial value 1, condition <=10,increment or decrement +1
                    result += `${n} * ${i} = ${i * n}\n`;                    //   n+" * "+ i + " = "+ (i*n)      2 * 1 = 2
                     i++;                                                    // i = i+1 => i++  , i = i+2 => i += 2
                }                                                            // \n = new line
            }
             document.getElementById('result').innerText = result;              
        }