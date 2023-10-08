// {} global execution context => this.
// global execution context
// Functional execution context
// Eval execution context

// two phases 1. memory creation phase - 
            //    2.execution phase


            let val1 = 10
            let val2 = 5
            function addNum(num1, num2){
                let total = num1 + num2
                return total
            }
            let result1 = addNum(val1, val2)
            let result2 = addNum(10, 2)
    /// global execution phase will be happened with this.
    // 2nd phase is memory phase in this 
    //   val1 is undefined
    // val2 is undefined
    // addnum is defination, result 1 & 2 are undefined
    // 3rd phase execution phase in this val1 is 10 val2 is 5
    // addNum newvariable environment execution thread

    