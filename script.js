// ============================================
//  Unit 8.7 – Forms & Event Listeners
// ============================================
//  Complete each section below by following
//  the STEP comments.
//
//  IMPORTANT: Use addEventListener() to wire your
//  buttons — do NOT add onclick in the HTML.
// ============================================


// ============================================
//  WARM-UP: Shout It!
// ============================================
// When the user types text and clic
// display the text in ALL CAPS with "!" at the end.

// STEP 1: Get the "Shout" button by its ID ("btnShout")
//         using document.getElementById()
const btnShout = document.getElementById("btnShout");

// STEP 2: Add a click event listener to the button.
//         Inside the listener function:
btnShout.addEventListener("click", function() {
    // a) Get the text from the input with ID "shoutInput" using .value
    const shoutInputText = document.getElementById("shoutInput").value;
    
    // b) Convert the text to uppercase using .toUpperCase()
    // c) Add "!" to the end
    const shoutedText = shoutInputText.toUpperCase() + "!";
    
    // d) Display the result in the element with ID "outShout" using .innerHTML
    document.getElementById("outShout").innerHTML = shoutedText;
});


// ============================================
//  MAIN: Pizza Builder
// ============================================
// Calculate the total price of a pizza based on:
//   - Size (radio buttons): Small $7.50, Medium $10.00,
//     Large $12.50, XL $15.00
//   - Toppings (checkboxes): $0.50 each
//   - Service (dropdown): Dine In $0, Take Out $1.50,
//     Delivery $3.00

// STEP 3: Get the "Calculate Total" button by ID ("btnCalc")
//         Add a click event listener.
//         Inside the listener:
const btnCalc = document.getElementById("btnCalc");
btnCalc.addEventListener("click", function() {

    // a) Get the selected size price:
    //    Use document.getElementsByName("rg") to get all size radio buttons.
    //    Loop through them to find the one that is .checked, and read its .value.
    //    Convert to a number with parseFloat().
    const sizeRadios = document.getElementsByName("rg");
    let sizePrice = 0;
    for (let i = 0; i < sizeRadios.length; i++) {
        if (sizeRadios[i].checked) {
            sizePrice = parseFloat(sizeRadios[i].value);
            break;
        }
    }

    // b) Count checked toppings:
    //    Use document.getElementsByName("cb") to get all topping checkboxes.
    //    Loop through and count how many are .checked. Multiply count by 0.50.
    const toppingCheckboxes = document.getElementsByName("cb");
    let toppingCount = 0;
    for (let i = 0; i < toppingCheckboxes.length; i++) {
        if (toppingCheckboxes[i].checked) {
            toppingCount++;
        }
    }
    const toppingsPrice = toppingCount * 0.50;

    // c) Get the service fee:
    //    Use document.getElementById("serviceSelect").value
    //    Use if/else if/else to set the fee:
    const serviceValue = document.getElementById("serviceSelect").value;
    let serviceFee = 0;
    if (serviceValue === "takeout") {
        serviceFee = 1.50;
    } else if (serviceValue === "delivery") {
        serviceFee = 3.00;
    } else {
        serviceFee = 0; // "dinein"
    }

    // d) Calculate total: size + toppings + service fee
    const total = sizePrice + toppingsPrice + serviceFee;

    // e) Get the customer name from the input with ID "myInput"
    let customerName = document.getElementById("myInput").value.trim();
    if (customerName === "") {
        customerName = "Customer";
    }

    // f) Display the result in the element with ID "myPara":
    //    "[name], your total is $[total]"
    //    Use .toFixed(2) to format the total.
    const resultMessage = customerName + ", your total is $" + total.toFixed(2);
    document.getElementById("myPara").innerHTML = resultMessage;
});


// STEP 4: Get the "Clear" button by ID ("clearBtn")
//         Add a click event listener.
//         Inside the listener:
const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", function() {
    // a) Set the name input value to ""
    document.getElementById("myInput").value = "";

    // b) Set the Large radio (id "r3") to checked = true
    document.getElementById("r3").checked = true;

    // c) Uncheck ALL topping checkboxes (loop through them)
    const toppingCheckboxes = document.getElementsByName("cb");
    for (let i = 0; i < toppingCheckboxes.length; i++) {
        toppingCheckboxes[i].checked = false;
    }

    // d) Set the service dropdown value to "dinein"
    document.getElementById("serviceSelect").value = "dinein";

    // e) Set the output paragraph innerHTML to ""
    document.getElementById("myPara").innerHTML = "";
});