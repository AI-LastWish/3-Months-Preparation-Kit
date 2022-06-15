const stack1 = [], stack2 = []

function populateStack2(){
    if(stack2.length === 0){
        while(stack1.length > 0) stack2.push(stack1.pop())
    }
}

function enqueue(element) {
    stack1.push(element)
}

function dequeue() {
    populateStack2()
    return stack2.pop()
}

function printFrontElement(){
    populateStack2()
    const front = stack2.pop()
    console.log(front)
    stack2.push(front)
}

function processData(input) {
    //Enter your code here
    let inputArr = input.split('\n')
    for(let i = 1; i < inputArr.length; i++){
        const query = inputArr[i].split(' ')[0]
        switch(query){
            case '1': 
                const el = inputArr[i].split(' ')[1]
                enqueue(el)
                break
            case '2':
                dequeue()
                break
            case '3':
                printFrontElement()
                break
        }
    }
} 